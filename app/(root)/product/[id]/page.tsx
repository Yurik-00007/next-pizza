import {prisma} from '@/prisma/prisma-client';
import {notFound} from 'next/navigation';
import {Container, PizzaImage, Title} from '@/shared/components/shared';
import {GroupVariants} from '@/shared/components/shared/group-variants';

export default async function ProductPage({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  const {id} = await params;
  const product = await prisma.product.findFirst({
    where: {id: Number(id)},
  });

  if (!product) {
    return notFound();
  }
  return (
    <Container className={'my-10 flex flex-col'}>
      <div className={'flex flex-1'}>
        <PizzaImage
          imgUrl={product.imageUrl}
          size={40}
        />
        <div className={'w-[490px] bg-[#fff8f8] p-7'}>
          <Title
            text={product.name}
            size={'md'}
            className={'mb-1 font-extrabold'}
          />
          <p className={'text-gray-400'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            impedit numquam voluptatem? Atque cum dignissimos eius eos explicabo
            fugit saepe? Animi consectetur illo in iusto maxime, nam odit
            quisquam vel?
          </p>
          <GroupVariants
            selectedValue={'2'}
            items={[
              {
                name: 'Маленькая',
                value: '1',
              },
              {
                name: 'Средняя',
                value: '2',
              },
              {
                name: 'Большая',
                value: '3',
                disabled: true,
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
