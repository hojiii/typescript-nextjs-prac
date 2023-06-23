import MeowArticle from '@/components/MeowArticle';
import MeowdArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Link from 'next/link';
import styles from './page.module.css'

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
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
      <MeowArticle/>
    </>
  );
}
