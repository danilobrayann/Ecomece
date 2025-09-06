"use client";
import { useState } from "react";
import { ProductType } from "@/types/productstype";
import Image from "next/image";

type productimagemProps = {
  product: ProductType;
  fill?: boolean;
};
export default function ProductsImagem({ product, fill }: productimagemProps) {
  const [loading, setLoading] = useState(true);
  return fill ? (
    <Image
      src={product.image}
      fill={true}
      alt={product.title}
      className={`object-cover ${
        loading
          ? "scale-110 blur-3xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.image}
      width={400}
      height={700}
      alt={product.title}
      className={`object-cover ${
        loading
          ? "scale-110 blur-3xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
