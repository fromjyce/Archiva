address 0x1 {
    module MyContract {
        use std::signer;

        struct ContractData has key, drop {
            value: u64,
            archived: bool,
        }

        public fun initialize_account(account: &signer, initial_value: u64) {
            let contract_data = ContractData { value: initial_value, archived: false };
            move_to(account, contract_data);
        }

        public fun update_value(account: &signer, new_value: u64) acquires ContractData {
            let contract_data = borrow_global_mut<ContractData>(signer::address_of(account));
            contract_data.value = new_value;
        }

        public fun archive(account: &signer) acquires ContractData {
            let contract_data = borrow_global_mut<ContractData>(signer::address_of(account));
            contract_data.archived = true;
        }

        public fun destroy(account: &signer) acquires ContractData {
            let contract_data = move_from<ContractData>(signer::address_of(account));
            assert!(contract_data.archived, 0x1); // Ensure it's archived before destroying
        }
    }
}
