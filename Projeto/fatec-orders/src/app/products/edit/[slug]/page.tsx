"use client";

import { withDataFetching } from "@/components/HOCS/withDataFetching";
import EditTemplate from "@/components/templates/products/EditTemplate";
import { env } from "@/config/env";
import { IProduct } from "@/interfaces/IProduct";
import { useEffect, useState } from "react";

interface ProductEditProps {
  params: { slug: string };
  data: any;
}

const ProductEdit: React.FC<ProductEditProps> = ({ params, data }) => {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    if (!data) return;

    const {
      id,
      descricao: description,
      marca: brand,
      peso_grama: weight,
      sabor: flavor,
      valor: value,
    } = data.produto;

    setProduct({ id, brand, description, flavor, value, weight });
  }, [data]);

  return <EditTemplate product={product} />;
};

export default withDataFetching(`${env.apiBaseUrl}/produto`)(ProductEdit);
