import { createSlice,  PayloadAction } from '@reduxjs/toolkit';
import { StaticDecks } from '../../shared/constants/deck.constants';
import { AsyncStatus } from '../../shared/constants/state.constants';
import { CardDictionary, CardDto } from '../../shared/types/card.types';

interface CollectionState {
    status: AsyncStatus,
    entities: {
        collection: {
            ids: string[],
            cards: CardDictionary
        }
    },
    error: boolean 
};

const initialState = {
    status: AsyncStatus.idle,
    entities: {
        collection: {
            ids: [],
            cards: {}
        }
    },
    error: false
};

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        removeCard(state: CollectionState, action: PayloadAction<CardDto>) {
            const {cardId, deckId} = action.payload;
            const target = state.entities.collection.cards[cardId];
        
            target.deckIds = target.deckIds.filter(cardId => cardId !== deckId);
            if (!target.deckIds.includes(StaticDecks.unsorted)) target.deckIds = [...target.deckIds, StaticDecks.unsorted];
        }
    },
});

export const { removeCard } = collectionSlice.actions;
export default collectionSlice.reducer;
