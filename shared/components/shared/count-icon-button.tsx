import {Button} from '@/shared/components/ui';
import {cn} from 'cn';
import {CountButtonProps} from '@/shared/components/shared/count-button';
import {Minus, Plus} from 'lucide-react';

type Props = {
  size?: CountButtonProps['size'];
  disabled?: boolean;
  type?: 'plus' | 'minus';
  onClick?: () => void;
};
export const CountIconButton = ({
  size = 'sm',
  disabled,
  type,
  onClick,
}: Props) => {
  return (
    <Button
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'hover:bg-primary p-0 hover:text-white disabled:border-gray-400 disabled:text-gray-400',
        size === 'sm'
          ? 'h-[30px] w-[30px] rounded-sm'
          : 'h-[38px] w-[38px] rounded-md'
      )}
    >
      {type === 'plus' ? (
        <Plus className={size === 'sm' ? 'h-4' : 'h-5'} />
      ) : (
        <Minus className={size === 'sm' ? 'h-4' : 'h-5'} />
      )}
    </Button>
  );
};
