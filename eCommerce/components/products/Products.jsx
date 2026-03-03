import React from "react";
import { useGetAllProductsQuery } from "../../src/apis/ProductApi";
import styles from "./Products.module.css"; // Ready for styling

const Products = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  if (isLoading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (isError) {
    return <div className={styles.error}>Failed to load products.</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Products</h2>

      <div className={styles.grid}>
        {data?.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.description}>{product.description}</p>
              <p className={styles.price}>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;