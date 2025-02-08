interface product {
  id: number;
  title: string;
}
async function getProducts() {
  const data = await fetch("https://fakestoreapi.com/products");
  return data.json();
}

export default async function Home() {
  const productsList: product[] = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-0">
      <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {productsList.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
}
