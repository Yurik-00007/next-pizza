"use client";

import {Title} from "@/components/shared/title";
import {cn} from "cn";
import {ProductCard} from "@/components/shared/product-card";
import {useIntersection} from "react-use";
import {useEffect, useRef} from "react";
import {useCategoryStore} from "@/store/category";

type Props = {
  title: string;
  productItems: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
};
export const ProductsGroupList = ({
  className,
  listClassName,
  productItems,
  categoryId,
  title,
}: Props) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  //хук
  const intersectionRef = useRef(null!);
  //хук который принимает useRef и порог
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  //хук который следит за переменными и запуститься как только элемент будет виден
  //intersection.isIntersecting — булево значение: true, если элемент сейчас видим (согласно порогу threshold), false — если нет
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
      // console.log(title, categoryId);
    }
  }, [title, categoryId, intersection?.isIntersecting, setActiveCategoryId]);
  //useRef садим на обертку блока
  return (
    <div
      className={className}
      id={title}
      ref={intersectionRef}
    >
      <Title
        text={title}
        size={"lg"}
        className={"mb-5 font-extrabold"}
      />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {productItems.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
