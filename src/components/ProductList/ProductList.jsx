import Product from '../Product/Product';
import Grid from '@mui/material/Grid';

const ProductList = (props) => {
	return (
		<div>
			<Grid container spacing={2}>
				{
					props.products.map((product) => {
						return <Grid key={product.id} size={{ sm: 12, md: 6, lg: 3 }}>
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								image={product.image}
								description={product.description}
							/>
						</Grid>
					})
				}
			</Grid>
		</div>
	)
}

export default ProductList;