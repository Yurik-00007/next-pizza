'use client';
import {Search} from 'lucide-react';
import {cn} from 'cn';
import {useRef, useState} from 'react';
import {useClickAway, useDebounce} from 'react-use';
import Link from 'next/link';
import {Api} from '@/services/api-client';
import {Product} from '@prisma/client';

type Props = {className?: string};
export const SearchInput = ({className}: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (err) {
        console.log(err);
      }
    },
    500,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setProducts([]);
    setSearchQuery('');
  };
  return (
    <>
      {focused && (
        <div
          className={cn(
            'fixed top-0 right-0 bottom-0 left-0 z-30 bg-black/50',
            className
          )}
        />
      )}
      <div
        ref={ref}
        className={cn(
          'relative z-30 flex h-11 flex-1 items-center justify-between rounded-xl',
          className
        )}
      >
        <Search
          size={20}
          className={'absolute top-1/2 left-3 translate-y-[-50%] text-gray-400'}
        />
        <input
          className={'w-full rounded-lg bg-gray-100 py-3 pl-11 outline-none'}
          type={'text'}
          placeholder={'Найти пиццу...'}
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/*  Popup*/}
        {products.length > 0 && (
          <div
            className={cn(
              'invisible absolute top-14 z-30 w-full rounded-lg bg-white py-2 opacity-0 shadow-md transition-all duration-200',
              focused && 'visible top-12 opacity-100'
            )}
          >
            {products.map((el) => (
              <Link
                key={el.id}
                className={
                  'hover:bg-primary/10 flex items-center gap-3 px-3 py-2'
                }
                href={`/product/${el.id}`}
                onClick={onClickItem}
              >
                <img
                  className={'rounded-xs'}
                  src={el.imageUrl}
                  alt={el.name}
                  width={32}
                  height={32}
                />
                <div>{el.name}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
