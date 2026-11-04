import {create} from 'zustand';
import {getCartDetails} from '@/shared/lib';
import {Api} from '@/shared/services/api-client';
import {CartStateItem} from '@/shared/lib/get-cart-details';
import {CreateCartItemValues} from '@/shared/services/dto/cart.dto';

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
      //Запрашивает корзину у сервера
      const data = await Api.cart.getCart();
      //Преобразует данные в удобный формат getCartDetails(data)
      //Сохраняет результат в Zustand Store
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({error: true});
    } finally {
      set({loading: false});
    }
  },
  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({loading: true, error: false});
      const data = await Api.cart.updateCartItemQuantity(id, quantity);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({error: true});
    } finally {
      set({loading: false});
    }
  },

  removeCartItem: async (id: number) => {
    try {
      set({loading: true, error: false});
      const data = await Api.cart.deleteCartItem(id);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({error: true});
    } finally {
      set({loading: false});
    }
  },
  addCartItem: async (values: CreateCartItemValues) => {
    try {
      set({loading: true, error: false});
      const data = await Api.cart.createCartItem(values);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({error: true});
    } finally {
      set({loading: false});
    }
  },
}));
