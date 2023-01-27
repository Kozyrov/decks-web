export type CardType = {
    cardId: string;
    deckIds: string[];
    title: string;
    description?: string | null;
}

export interface CardDictionary {
    [key: string]: CardType;
}

export type CardDto = {
    cardId: string;
    deckId: string;
}