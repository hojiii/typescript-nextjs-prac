import { getProducts } from '@/service/products';
import Link from 'next/link';
import styles from './page.module.css'

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com',{
    next : {revalidate: 3},
    //cache: '' 이렇게하면 force-cache가 디폴트 임으로 ssg 로 행동, no-store로 해도 ssg로 행동 캐시를 해두지 않아서 서버에 요청이 오면 드때 패치
  });
  const data = await res.json();
  const factText = data.data[0]
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>
        {factText}
      </article>
    </>
  );
}
