import { getProducts } from '@/service/products';
import { NextResponse } from 'next/server';
export async function GET(request: Request){
  const products = await getProducts();
  return NextResponse.json({products})
}
//api 라우트 쓰는 방식 예전는 pages 안에 쓰는 방식이였으나 app 폴더에서 사용가능하게 변경됨
//app폴더 장점 get post 등 별로 나누어서 함수별로 구조적으로 만들수있게 가능