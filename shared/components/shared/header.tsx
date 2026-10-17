import {cn} from 'cn';
import Image from 'next/image';
import {Button} from '@/shared/components/ui';
import {Container} from '@/shared/components/shared/container';
import {User} from 'lucide-react';
import Link from 'next/link';
import {SearchInput} from '@/shared/components/shared/search-input';
import {CartButton} from '@/shared/components/shared/cart-button';

type Props = {
  className?: string;
};

export const Header = ({className}: Props) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className={'flex items-center justify-between py-8'}>
        {/*Левая часть*/}
        <Link href="/">
          <div className={'flex items-center gap-4'}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={35}
              height={35}
            />
            <div>
              <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
              <p className="text-sm leading-3 text-gray-400">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>
        {/*Середина*/}
        <div className={'mx-10 flex-1'}>
          <SearchInput />
        </div>
        {/*Правая часть*/}
        <div className={'flex items-center gap-3'}>
          <Button
            variant={'outline'}
            className={'flex items-center gap-1'}
          >
            <User size={16} />
            Войти
          </Button>
          <CartButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
