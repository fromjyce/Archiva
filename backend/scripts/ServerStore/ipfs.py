import json
import hashlib
from datetime import datetime
from typing import Dict, Any, Optional
import ipfshttpclient

from aptos_sdk.client import RestClient  # type: ignore
from aptos_sdk.account import Account

class AptosContractArchiver:
    def __init__(self, ipfs_api_url: str = "/ip4/127.0.0.1/tcp/5001", aptos_node_url: str = "https://explorer.aptoslabs.com/account/0x7234108da71e7bd89d9c4038cd40c51c73c8301aa929832929254fbfdef022be?network=devnet"):
       
        self.ipfs_client = ipfshttpclient.connect(ipfs_api_url)
        self.aptos_client = RestClient(aptos_node_url)
        
    def fetch_contract_data(self, contract_address: str) -> Dict[str, Any]:
    
        try:
            # Fetch contract metadata and bytecode
            contract_data = self.aptos_client.get_account_resource(
                contract_address,
                "0x1::code::ModuleStore"
            )
            
            # Fetch additional contract info
            account_info = self.aptos_client.get_account(contract_address)
            
            return {
                "address": contract_address,
                "bytecode": contract_data["data"]["code"],
                "sequence_number": account_info["sequence_number"],
                "timestamp": datetime.utcnow().isoformat(),
                "chain_id": self.aptos_client.chain_id
            }
        except Exception as e:
            raise Exception(f"Failed to fetch contract data: {str(e)}")

    def prepare_metadata(self, 
                        contract_data: Dict[str, Any],
                        version: str,
                        description: Optional[str] = None,
                        additional_info: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
       
        metadata = {
            "version": version,
            "contractAddress": contract_data["address"],
            "chainId": contract_data["chain_id"],
            "timestamp": contract_data["timestamp"],
            "sequenceNumber": contract_data["sequence_number"]
        }
        
        if description:
            metadata["description"] = description
            
        if additional_info:
            metadata["additionalInfo"] = additional_info
            
        # Generate content hash for verification
        content_hash = hashlib.sha256(
            json.dumps(contract_data["bytecode"]).encode()
        ).hexdigest()
        metadata["contentHash"] = content_hash
        
        return metadata

    def store_contract(self,
                      contract_address: str,
                      version: str,
                      description: Optional[str] = None,
                      additional_info: Optional[Dict[str, Any]] = None) -> Dict[str, str]:
        
        try:
            # Fetch contract data
            contract_data = self.fetch_contract_data(contract_address)
            
            # Store bytecode
            bytecode_hash = self.ipfs_client.add_json(contract_data["bytecode"])
            
            # Prepare and store metadata
            metadata = self.prepare_metadata(
                contract_data,
                version,
                description,
                additional_info
            )
            metadata["bytecodeIpfsHash"] = bytecode_hash
            metadata_hash = self.ipfs_client.add_json(metadata)
            
            return {
                "bytecode_hash": bytecode_hash,
                "metadata_hash": metadata_hash
            }
            
        except Exception as e:
            raise Exception(f"Failed to store contract: {str(e)}")

    def retrieve_contract(self, metadata_hash: str) -> Dict[str, Any]:
       
        try:
            # Fetch metadata
            metadata = self.ipfs_client.get_json(metadata_hash)
            
            # Fetch bytecode using hash from metadata
            bytecode = self.ipfs_client.get_json(metadata["bytecodeIpfsHash"])
            
            return {
                "metadata": metadata,
                "bytecode": bytecode
            }
            
        except Exception as e:
            raise Exception(f"Failed to retrieve contract: {str(e)}")

    def verify_contract(self, metadata_hash: str) -> bool:
        
        try:
            # Retrieve contract data
            contract_data = self.retrieve_contract(metadata_hash)
            
            # Generate content hash of retrieved bytecode
            content_hash = hashlib.sha256(
                json.dumps(contract_data["bytecode"]).encode()
            ).hexdigest()
            
            # Compare with stored hash in metadata
            return content_hash == contract_data["metadata"]["contentHash"]
            
        except Exception as e:
            raise Exception(f"Failed to verify contract: {str(e)}")