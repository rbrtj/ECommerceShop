import { ProductItemType } from './ProductItem';
export type CartStoreType = {
  cart: {
    cartItems: ProductItemType[];
  };
};

export type Action = { type: ActionTypes; payload: ProductItemType };

export type ActionTypes = 'CART_ADD_ITEM' | 'CART_REMOVE_ITEM';

export type DefaultDispatch = {
 defaultDispatch: React.Dispatch<Action> 
}