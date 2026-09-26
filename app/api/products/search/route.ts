import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  console.log(req.nextUrl.searchParams.get("query"));
  const query = req.nextUrl.searchParams.get("query") || "";
  const products = await prisma.product.findMany({
    where: {
      // name: query,
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
    take: 5,
  });
  //===
  //includes содержиться (сырная-> сыр), моде:нечувствительный
  // const ingredients = await prisma.ingredient.findMany();
  return NextResponse.json({products});
}
