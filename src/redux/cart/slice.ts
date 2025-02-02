import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartItem, CartSliceState } from './types';

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(
                (obj) =>
                    obj.PizzaBlockId === action.payload.PizzaBlockId &&
                    obj.type === action.payload.type &&
                    obj.size === action.payload.size,
            );

            if (
                findItem &&
                findItem.type === action.payload.type &&
                findItem.size === action.payload.size
            ) {
                findItem.count++;
            } else {
                const CartPizzaId =
                    action.payload.PizzaBlockId + action.payload.type + action.payload.size;

                state.items.push({
                    ...action.payload,
                    id: CartPizzaId,
                    count: 1,
                });
            }
            state.totalPrice = calcTotalPrice(state.items);
        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find((obj) => obj.id === action.payload);

            if (findItem) {
                findItem.count--;
            }

            state.totalPrice = calcTotalPrice(state.items);
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = calcTotalPrice(state.items);
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
