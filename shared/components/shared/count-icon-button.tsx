import {Button} from '@/shared/components/ui';
import {cn} from 'cn';

type Props = {
  size?: number,
  disabled?: boolean,
  type?: 'plus' | 'minus',
  onClick?: () => void,
  className?: string
};
export const CountIconButton = ({size='sm', disabled, type, onClick,className}: Props) => {
  return (
    <Button className={cn('',className)} variant={"outline"} disabled={disabled} onClick={onClick}>

    </Button>
  );
};