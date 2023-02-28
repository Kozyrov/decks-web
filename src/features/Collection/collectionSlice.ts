import { createSelector, createSlice,  PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { StaticDecks } from '../../shared/constants/deck.constants';
import { AsyncStatus } from '../../shared/constants/state.constants';
import { Entity, EntityDictionary, EntityDto } from '../../shared/types/entity.types';

export interface CollectionState {
    status: AsyncStatus,
    entities: {
        cards: {
            ids: string[],
            byId: EntityDictionary,
        },
        decks: {
            ids: string[],
            byId: EntityDictionary,
        }
    },
    error: boolean 
};

const initialState = {
    status: AsyncStatus.idle,
    entities: {
        cards: {
            ids: [],
            byId: {}
        },
        decks: {
            ids: [],
            byId: {}
        }
    },
    error: false
};

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        addNewCardToDeck(state: CollectionState, action: PayloadAction<Entity>) {
            const newCard = action.payload;
            const target = state.entities.cards;

            target.byId[newCard.uniqueId] = newCard;
            target.ids = [...target.ids, newCard.uniqueId];           
        },
        removeCardFromDeck(state: CollectionState, action: PayloadAction<EntityDto>) {
            const {uniqueId, groupId} = action.payload;
            const target = state.entities.cards.byId[uniqueId];
        
            target.groupIds = target.groupIds.filter(cardId => cardId !== groupId);
            if (!target.groupIds.includes(StaticDecks.unsorted)) target.groupIds = [...target.groupIds, StaticDecks.unsorted];
        }
    },
});

export const selectCardsByDeckId = createSelector([
    (state: CollectionState) => state,
    (state: CollectionState, deckId: string) => deckId
],
    (collection, deckId): Entity[] => collection.entities.decks.byId[deckId].groupIds.map(cardId => collection.entities.cards.byId[cardId])
);

export const { addNewCardToDeck, removeCardFromDeck } = collectionSlice.actions;
export default collectionSlice.reducer;
