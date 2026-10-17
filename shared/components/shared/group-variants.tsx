'use client';

import {cn} from 'cn';

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};
//Синтаксис Variant['value'] означает: "возьми тип поля value из типа Variant".
type Props = {
  items: readonly Variant[];
  onClick?: (value: Variant['value']) => void;
  value?: Variant['value'];
  className?: string;
};
export const GroupVariants = ({className, onClick, value, items}: Props) => {
  return (
    <div
      className={cn(
        'flex justify-between rounded-3xl bg-[#f3f3f7] p-1 select-none',
        className
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            'flex h-[30px] flex-1 cursor-pointer items-center justify-center rounded-3xl px-5 text-sm transition-all duration-400',
            {
              'bg-white shadow': item.value === value,
              'pointer-events-none text-gray-500 opacity-50': item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
