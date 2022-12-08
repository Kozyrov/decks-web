type DeckTypes = {
    deck: string[];
}

const Deck = ({deck}: DeckTypes) => {
    return (
        <div>
            <div>Card List</div>
            {deck.map((card, i) => (
                <div key={`card_${i}`}>{card}</div>
            ))}
        </div>
    )
}

export default Deck;