import {NextRequest, NextResponse} from 'next/server';
import {prisma} from '@/prisma/prisma-client';
import {updateCartTotalAmount} from '@/shared/lib/update-cart-total-amount';

export async function PATCH(
  req: NextRequest,
  {params}: {params: Promise<{id: string}>}
) {
  try {
    // Получаем id из URL
    const {id: itemId} = await params;
    const id = Number(itemId);

    // Получаем новое количество товара
    const data = (await req.json()) as {quantity: number};

    // Получаем токен корзины
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({error: 'Cart token not found'}, {status: 401});
    }

    // Ищем товар в корзине
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });

    if (!cartItem) {
      return NextResponse.json({error: 'Cart item not found'}, {status: 404});
    }

    // Обновляем количество товара
    await prisma.cartItem.update({
      where: {id},
      data: {quantity: data.quantity},
    });

    // Пересчитываем общую стоимость корзины
    const updatedUserCart = await updateCartTotalAmount(token);

    // Возвращаем обновлённую корзину
    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log('[CART_PATCH] Server error', error);
    return NextResponse.json(
      {message: 'Не удалось обновить карзину'},
      {status: 500}
    );
  }
}

export async function DELETE(
  req: NextRequest,
  {params}: {params: Promise<{id: string}>}
) {
  try {
    // Получаем id из URL
    const {id: itemId} = await params;
    const id = Number(itemId);

    // Получаем токен корзины
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({error: 'Cart token not found'}, {status: 401});
    }

    // Ищем товар в корзине
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });

    if (!cartItem) {
      return NextResponse.json({error: 'Cart item not found'}, {status: 404});
    }

    // Обновляем количество товара
    await prisma.cartItem.delete({
      where: {id},
    });

    // Пересчитываем общую стоимость корзины
    const updatedUserCart = await updateCartTotalAmount(token);

    // Возвращаем обновлённую корзину
    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log('[CART_PATCH] Server error', error);
    return NextResponse.json(
      {message: 'Не удалось обновить карзину'},
      {status: 500}
    );
  }
}
