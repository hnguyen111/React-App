import { useState } from 'react';
import styles from './Product-example.module.css';

const Product = (props) => {
    const [title, setTitle] = useState(props.title);
    const productOnClickHandler = () => {
        console.log('Unknown');
        setTitle('Unknown');
    }
    return (
        <figure onClick={productOnClickHandler} className={styles.product}>
            <img width="250px" src={props.image} alt="" />
            <figcaption>
                <h2>{title}</h2>
                <h3>${props.price}</h3>
                <p>{props.description}</p>
                <button>Buy Now</button>
            </figcaption>
        </figure>
    )
}

export default Product;