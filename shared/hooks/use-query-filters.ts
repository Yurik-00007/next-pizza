import {useRouter} from 'next/navigation';
import {useEffect} from 'react';
import {Filters} from '@/hooks/use-filters';
import qs from 'qs';

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  useEffect(() => {
    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes),
      ingredients: Array.from(filters.selectedIngredients),
      sizes: Array.from(filters.sizes),
    };
    const query = qs.stringify(params, {arrayFormat: 'comma'});

    router.push(`?${query}`, {
      scroll: false,
    });
  }, [
    filters.pizzaTypes,
    filters.prices,
    filters.selectedIngredients,
    filters.sizes,
    router,
  ]);
};
