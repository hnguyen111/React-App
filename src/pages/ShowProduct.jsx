import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/material';

const ShowProduct = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		axios.get(`https://fakestoreapi.com/products/${productId}`)
			.then((res) => {
				setProduct(res.data);
			})
	}, []);

	if (!product) {
		return <p>Loading .........</p>
	}

	return (
		<Box>
			<Card sx={{ mt: 10, ml: 10, mr: 10, maxWidth: 545 }}>
				<CardMedia
					sx={{ height: 340 }}
					image={product.image}
					title={product.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{product.title}
					</Typography>
					<Typography gutterBottom variant="h5" component="div">
						${product.price}
					</Typography>
					<Typography variant="body2" sx={{ color: 'text.secondary' }}>
						{product.description}
					</Typography>
					<Typography variant="body2" sx={{ color: 'text.secondary' }}>
						<Rating readOnly name="size-small" defaultValue={product.rating.rate} size="small" /> ({product.rating.count})
					</Typography>
				</CardContent>
			</Card>
		</Box>

	)
}

export default ShowProduct