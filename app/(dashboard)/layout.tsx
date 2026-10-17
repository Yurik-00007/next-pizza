import type {Metadata} from 'next';
import {ReactNode} from 'react';

export const metadata: Metadata = {
  title: 'Next Pizza | Панель',
};

export default function DashboardLayout({children}: {children: ReactNode}) {
  return (
    <>
      <header>DASHBOARD HEADER</header>
      {children}
    </>
  );
}
