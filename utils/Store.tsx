import { Action, CartStoreType } from '@/types/CartStore';
import { createContext, useReducer } from 'react';

const initialState: CartStoreType = {
  cart: { cartItems: [] },
};

function reducer(state: CartStoreType, action: Action): CartStoreType {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

const defaultDispatch: React.Dispatch<Action> = () => initialState;

export const CartStore = createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

export function StoreProvider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartStore.Provider value={{ state, dispatch }} {...props} />;
}
