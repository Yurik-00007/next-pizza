import React from 'react';
import {Minus, Plus} from 'lucide-react';
import {cn} from 'cn';
import {Button} from '@/shared/components/ui';

interface Props {
  value?: number;
  size?: 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const CountButton: React.FC<Props> = ({
  className,
  value = 1,
  size = 'sm',
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-between gap-3',
        className
      )}
    >
      <Button
        variant="outline"
        className={cn(
          'hover:bg-primary p-0 hover:text-white',
          size === 'sm'
            ? 'h-[30px] w-[30px] rounded-sm'
            : 'h-[38px] w-[38px] rounded-se-md'
        )}
      >
        <Minus className={size === 'sm' ? 'h-4' : 'h-5'} />
      </Button>
      <b className={size === 'sm' ? 'text-sm' : 'text-md'}>{value}</b>
      <Button
        variant="outline"
        className={cn(
          'hover:bg-primary p-0 hover:text-white',
          size === 'sm'
            ? 'h-[30px] w-[30px] rounded-sm'
            : 'h-[38px] w-[38px] rounded-md'
        )}
      >
        <Plus className={size === 'sm' ? 'h-4' : 'h-5'} />
      </Button>
    </div>
  );
};
