import {pizzaSizes, PizzaType} from '@/shared/constants/pizza';
import {ProductItem} from '@prisma/client';
import {Variant} from '@/shared/components/shared/group-variants';

export const getAvailablePizzaSizes = (
  type: PizzaType,
  items: ProductItem[]
): Variant[] => {
  //массив видов пицц -> items
  //[
  // {id: 1, price: 550, size: 20, pizzaType: 1, productId: 39,…},
  // {id: 2, price: 495, size: 30, pizzaType: 2, productId: 39, …},
  // {id: 3, price: 226, size: 40, pizzaType: 2, productId: 39, …}]
  //фильтруем пиццу по типу(pizzaType: 1) и отображаем массив -> filteredPizzasByType
  // [{id: 1, price: 550, size: 20, pizzaType: 1, productId: 39, …}]
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  // console.log(items, filteredPizzasByType);

  //превращаем массив объектов pizzaSizes ([{name: 'Маленькая', value: '20'}{…}{…}]) в availablePizzaSizes ([{name: 'Маленькая', value: '20', disabled:false}{…}{…}])

  //Обычно disabled: true означает «выключено», а false — «доступно».

  // console.log('availablePizzaSizes', availablePizzaSizes);
  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
};
