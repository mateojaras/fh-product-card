import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import React from 'react';

export interface Props {
  tittle?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTittle = ({ tittle, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {tittle ? tittle : product.tittle}
    </span>
  );
};
