import { ProductItemType } from './ProductItem';
export type CartStoreType = {
  cart: {
    cartItems: ProductItemType[];
  };
};

export type Action = { type: 'CART_ADD_ITEM'; payload: ProductItemType };

export type DefaultDispatch = {
 defaultDispatch: React.Dispatch<Action> 
}