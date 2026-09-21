// @flow
import * as React from "react";
import Link from "next/link";
import {cn} from "cn";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui";
import {Plus} from "lucide-react";

type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
};
export const ProductCard = ({id, name, price, imageUrl, className}: Props) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${id}`}>
        <div
          className={
            "bg-secondary flex h-[260px] justify-center rounded-lg p-6"
          }
        >
          <img
            className={"h-[215px] w-[215px]"}
            src={imageUrl}
            alt={name}
          />
        </div>
        <Title
          text={name}
          size={"sm"}
          className={"mt-3 mb-1 font-bold"}
        />
        <p className={"text-sm text-gray-400"}>
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредо, чеснок
        </p>
        <div className={"mt-4 flex items-center justify-between"}>
          <span className={"text-[20px]"}>
            от <b>{price} ₽</b>
          </span>

          <Button>
            <Plus
              size={20}
              className={"mr-1"}
            />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
