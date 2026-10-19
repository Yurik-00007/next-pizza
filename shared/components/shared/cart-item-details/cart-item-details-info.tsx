type Props = {
  name: string;
  details: string;
  className?: string;
};
export const CartItemDetailsInfo = ({name, details, className}: Props) => {
  return (
    <div className={className}>
      <div className={'flex items-center justify-between'}>
        <h2 className={'flex-1 text-lg leading-6 font-bold'}>{name}</h2>
      </div>
      {details.length > 0 && (
        <p className={'text-xs text-gray-400'}>{details}</p>
      )}
    </div>
  );
};
