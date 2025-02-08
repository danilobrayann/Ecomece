import { ProductType } from "@/types/productstype";
import Image from "next/image";

async function getProducts() {
  const data = await fetch("https://fakestoreapi.com/products");
  return data.json();
}

export default async function Home() {
  const productsList = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-0">
      <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {productsList.map((product: ProductType) => (
          <div key={product.id}>
            {product.title}
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
