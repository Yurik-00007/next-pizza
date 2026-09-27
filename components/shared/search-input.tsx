"use client";
import {Search} from "lucide-react";
import {cn} from "cn";
import {useRef, useState} from "react";
import {useClickAway} from "react-use";

type Props = {className?: string};
export const SearchInput = ({className}: Props) => {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });
  return (
    <>
      {focused && (
        <div
          className={cn(
            "fixed top-0 right-0 bottom-0 left-0 z-30 bg-black/50",
            className
          )}
        />
      )}
      <div
        ref={ref}
        className={cn(
          "relative z-30 flex h-11 flex-1 items-center justify-between rounded-2xl",
          className
        )}
      >
        <Search
          size={20}
          className={"absolute top-1/2 left-3 translate-y-[-50%] text-gray-400"}
        />
        <input
          className={"w-full rounded-2xl bg-gray-100 py-3 pl-11 outline-none"}
          type={"text"}
          placeholder={"Найти пиццу..."}
          onFocus={() => setFocused(true)}
        />
      </div>
    </>
  );
};
