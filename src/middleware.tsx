import { NextRequest, NextResponse } from "next/server";

export function middleware(request : NextRequest){
  console.log("미들웨어가 실행되고 있음! 체크중!")
  if(request.nextUrl.pathname.startsWith('/products/1004')){
    console.log('미들웨어-경로를 리다이렉팅함');
    return NextResponse.redirect(new URL('/products',request.url))
  }
}

export const config = {
  matcher : ['/products/:path*']
}//특정 경로에 대해서만 미들웨어를 실행하는법 matcher를 이용하여 경로를 설정해주면됨