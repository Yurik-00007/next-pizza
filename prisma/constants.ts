export const categories = [
  {name: "Пиццы"},
  {name: "Завтраки"},
  {name: "Закуски"},
  {name: "Кофе и чай"},
  {name: "Напитки"},
];

export const ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl: "/images/ingredients/syrniy-bortik.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl: "/images/ingredients/mozzarella.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl: "/images/ingredients/сheddar_parmesan.png",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl: "/images/ingredients/jalapeno.png",
  },
  {
    name: "Свинная шейка",
    price: 79,
    imageUrl: "/images/ingredients/pork.png",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl: "/images/ingredients/champignon.png",
  },
  {
    name: "Бекон",
    price: 79,
    imageUrl: "/images/ingredients/bacon.png",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl: "/images/ingredients/ham.png",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl: "/images/ingredients/pepperoni.png",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl: "/images/ingredients/chorizo.png",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl: "/images/ingredients/cucumber.png",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl: "/images/ingredients/tomato.png",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl: "/images/ingredients/onion.png",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl: "/images/ingredients/pineapple.png",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl: "/images/ingredients/herb.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl: "/images/ingredients/pepper.png",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl: "/images/ingredients/brynza.png",
  },
  {
    name: "Креветки",
    price: 79,
    imageUrl: "/images/ingredients/prawn.png",
  },
].map((obj, index) => ({id: index + 1, ...obj}));

export const products = [
  // Завтрак 10
  {
    name: "1 Закуска и напиток",
    imageUrl: "/images/products/2/light_breakfast.png",
    categoryId: 2,
  },
  {
    name: "2 Лёгкий завтрак",
    imageUrl: "/images/products/2/light_breakfast.png",
    categoryId: 2,
  },
  {
    name: "3 Сытный завтрак",
    imageUrl: "/images/products/2/light_breakfast.png",
    categoryId: 2,
  },
  {
    name: "4 Омлет с пепперони",
    imageUrl: "/images/products/2/light_breakfast.png",
    categoryId: 2,
  },
  {
    name: "5 Хашбрауны",
    imageUrl: "/images/products/2/hash_brown.png",
    categoryId: 2,
  },
  {
    name: "6 Холодный чикен ролл",
    imageUrl: "/images/products/2/roll.png",
    categoryId: 2,
  },
  {
    name: "7 Чизкейк Нью-Йорк",
    imageUrl: "/images/products/2/cheesecake.png",
    categoryId: 2,
  },
  {
    name: "8 Соберите свой омлет",
    imageUrl: "/images/products/2/omelette_your.png",
    categoryId: 2,
  },
  {
    name: "9 Омлет сырный",
    imageUrl: "/images/products/2/cheese_omelet.png",
    categoryId: 2,
  },
  {
    name: "10 Омлет с ветчиной и грибами",
    imageUrl: "/images/products/2/omelet_ham.png",
    categoryId: 2,
  },
  // Закуски 10
  {
    name: "1 Брусничные Додочизы",
    imageUrl: "/images/products/3/1.png",
    categoryId: 3,
  },
  {
    name: "2 Паста а-ля Болоньезе",
    imageUrl: "/images/products/3/2.png",
    categoryId: 3,
  },
  {
    name: "3 Покет-пицца чикенбургер",
    imageUrl: "/images/products/3/3.png",
    categoryId: 3,
  },
  {
    name: "4 Куриные крылья барбекю",
    imageUrl: "/images/products/3/4.png",
    categoryId: 3,
  },
  {
    name: "5 Ланчбокс с куриными крыльями",
    imageUrl: "/images/products/3/5.png",
    categoryId: 3,
  },
  {
    name: "6 Додстер",
    imageUrl: "/images/products/3/6.png",
    categoryId: 3,
  },
  {
    name: "7 Грибной Стартер",
    imageUrl: "/images/products/3/7.png",
    categoryId: 3,
  },
  {
    name: "8 Картофель из печи",
    imageUrl: "/images/products/3/8.png",
    categoryId: 3,
  },
  {
    name: "9 Картофель по-деревенски",
    imageUrl: "/images/products/3/9.png",
    categoryId: 3,
  },
  {
    name: "10 Креветки терияки",
    imageUrl: "/images/products/3/10.png",
    categoryId: 3,
  },
  // Горячие напитки 8
  {
    name: "1 Айс капучино",
    imageUrl: "/images/products/4/1.png",
    categoryId: 4,
  },
  {
    name: "2 Кофе Карамельный капучино",
    imageUrl: "/images/products/4/2.png",
    categoryId: 4,
  },
  {
    name: "3 Кофе Ореховый латте",
    imageUrl: "/images/products/4/3.png",
    categoryId: 4,
  },
  {
    name: "4 Кофе Кокосовый латте",
    imageUrl: "/images/products/4/4.png",
    categoryId: 4,
  },
  {
    name: "5 Кофе Капучино",
    imageUrl: "/images/products/4/5.png",
    categoryId: 4,
  },
  {
    name: "6 Кофе Латте",
    imageUrl: "/images/products/4/6.png",
    categoryId: 4,
  },
  {
    name: "7 Кофе Американо",
    imageUrl: "/images/products/4/7.png",
    categoryId: 4,
  },
  {
    name: "8 Какао",
    imageUrl: "/images/products/4/8.png",
    categoryId: 4,
  },
  // Напитки 10
  {
    name: "1 Горячий пунш Спелая фейхоа",
    imageUrl: "/images/products/5/1.png",
    categoryId: 5,
  },
  {
    name: "2 Лимонад голубика-лайм",
    imageUrl: "/images/products/5/2.png",
    categoryId: 5,
  },
  {
    name: "3 Айс-ти инжир-бузина",
    imageUrl: "/images/products/5/3.png",
    categoryId: 5,
  },
  {
    name: "4 Айс-ти груша-фейхоа",
    imageUrl: "/images/products/5/4.png",
    categoryId: 5,
  },
  {
    name: "5 Классический молочный коктейль",
    imageUrl: "/images/products/5/5.png",
    categoryId: 5,
  },
  {
    name: "6 Клубничный молочный коктейль",
    imageUrl: "/images/products/5/6.png",
    categoryId: 5,
  },
  {
    name: "7 Шоколадный молочный коктейль",
    imageUrl: "/images/products/5/7.png",
    categoryId: 5,
  },
  {
    name: "8 Морс Клюква",
    imageUrl: "/images/products/5/8.png",
    categoryId: 5,
  },
  {
    name: "9 Айсти зеленый со вкусом лимона",
    imageUrl: "/images/products/5/9.png",
    categoryId: 5,
  },
  {
    name: "10 Нектар Добрый Яблоко–вишня–черноплодная рябина",
    imageUrl: "/images/products/10.png",
    categoryId: 5,
  },
];
