import {useEffect, useState} from 'react';
import {Ingredient} from '@prisma/client';
import {Api} from '@/services/api-client';

type ReturnProps = {
  ingredients: Ingredient[];
  loading: boolean;
};

export const useIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients: Ingredient[] = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);
  return {
    ingredients,
    loading,
  };
};
