import { ProductType } from "@/types/productstype";

type ProductProps ={
product: ProductType;
}

export default function Product ({product}:ProductProps ){

    return (
        <div className="flex flex-col">
        <div>{product.image}</div>
        <div>{product.title}</div>
        <div>Adicionar ao meu carrinho</div>
        </div>
    )
}