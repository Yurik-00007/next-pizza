import {create} from 'zustand';
import {getCartDetails} from '@/shared/lib';
import {Api} from '@/shared/services/api-client';
import {CartStateItem} from '@/shared/lib/get-cart-details';

export type CartState = {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  // Получение товаров из корзины
  fetchCartItems: () => Promise<void>;

  // Запрос на обновление количества товаров
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  // Запрос на добовления товаров в корзину
  //TODO типизировать values
  addCartItem: (value: any) => Promise<void>;

  // Запрос на удаление товаров в корзину
  removeCartItem: (id: number) => Promise<void>;
};

export const useCartStore = create<CartState>()((set, get) => ({
  items: [],
  loading: true,
  error: false,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({loading: true, error: false});
      const data = await Api.cart.fetchCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({error: true});
    } finally {
      set({loading: false});
    }
  },
  removeCartItem: async (id: number) => {},
  updateItemQuantity: async (id: number, quantity: number) => {},
  addCartItem: async (value: any) => {},
}));
