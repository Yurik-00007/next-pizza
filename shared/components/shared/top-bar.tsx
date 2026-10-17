import * as React from 'react';
import {cn} from 'cn';
import {Container} from '@/shared/components/shared/container';
import {Categories} from '@/shared/components/shared/categories';
import {SortPopup} from '@/shared/components/shared/sort-popup';
import {Category} from '@prisma/client';

type Props = {
  className?: string;
  categories: Category[];
};
export const TopBar = ({className, categories}: Props) => {
  return (
    <div
      className={cn(
        'sticky top-0 z-9 bg-white py-5 shadow-lg shadow-black/5',
        className
      )}
    >
      <Container className={'flex items-center justify-between'}>
        <Categories productItems={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
