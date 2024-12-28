module sender::TestTransfer {
    use aptos_framework::coin;
    use aptos_framework::aptos_coin;

    /// Function to transfer `0.5 APT` to a specified recipient.
    public entry fun transfer_apt(
        sender: &signer,
        recipient: address
    ) {
        // Specify the amount to transfer (0.005 APT = 500_000 Octas)
        let amount: u64 = 500_000;

        // Transfer the specified amount of APT to the recipient
        coin::transfer<aptos_coin::AptosCoin>(sender, recipient, amount);
    }
}
