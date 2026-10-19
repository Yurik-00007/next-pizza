import {cn} from 'cn';
import {CountIconButton} from '@/shared/components/shared/count-icon-button';

export type CountButtonProps = {
  value?: number;
  size?: 'sm' | 'lg';
  className?: string;
  onClick?: (type: 'plus' | 'minus') => void;
};

export const CountButton = ({
  className,
  value = 1,
  size = 'sm',
  onClick,
}: CountButtonProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-between gap-3',
        className
      )}
    >
      <CountIconButton
        onClick={() => onClick?.('minus')}
        disabled={value === 1}
        size={size}
        type="minus"
      />
      <b className={size === 'sm' ? 'text-sm' : 'text-base'}>{value}</b>
      <CountIconButton
        onClick={() => onClick?.('plus')}
        size={size}
        type="plus"
      />
    </div>
  );
};
