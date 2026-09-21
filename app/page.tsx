import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className={"mt-8"}>
        <Title
          text={"Все пиццы"}
          size={"lg"}
          className={"font-extrabold"}
        />
      </Container>
      <TopBar />
      <Container className={"mt-9 pb-14"}>
        <div className={"flex gap-[80px]"}>
          {/*Фильтрация*/}
          <div className={"w-[250px]"}>
            <Filters />
          </div>
          {/*Список товаров*/}
          <div className={"flex-1"}>
            <div className={"flex flex-col gap-16"}>
              <ProductsGroupList
                title={"Пиццы"}
                categoryId={1}
                productItems={[
                  {
                    id: 0,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                  {
                    id: 1,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                  {
                    id: 2,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                  {
                    id: 3,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                  {
                    id: 4,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                  {
                    id: 5,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                ]}
              />
              <ProductsGroupList
                title={"Закуски"}
                categoryId={3}
                productItems={[
                  {
                    id: 0,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                  {
                    id: 1,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                  {
                    id: 2,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                  {
                    id: 3,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                  {
                    id: 4,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                  {
                    id: 5,
                    name: "Сырный цыпленок",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{price: 550}],
                  },
                ]}
              />

              {/*
              <ProductCard
                id={0}
                name={"Сырный цыпленок"}
                price={550}
                imageUrl={
                  "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp"
                }
              />
*/}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
