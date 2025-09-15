module msp_contract::payment {
    use sui::event;
    use sui::tx_context::{Self as TxContext};

    public struct PaymentEvent has copy, drop {
        amount: u64,
        buyer: address,
        seller: address,
        timestamp: u64,
    }

    public entry fun pay(
        seller: address,
        amount: u64,
        ctx: &mut TxContext
    ) {
        let buyer = tx_context::sender(ctx);

        event::emit(PaymentEvent {
            amount,
            buyer,
            seller,
            timestamp: tx_context::epoch_timestamp_ms(ctx),
        });
    }
}