import {Cart, CartItem, ProductItem, Product, Ingredient} from '@prisma/client';

export type CartItemDTO = CartItem & {
  productItem: ProductItem & {
    product: Product;
  };
  ingredients: Ingredient[];
};

export type CartDTO = Cart & {
  items: CartItemDTO[];
};
