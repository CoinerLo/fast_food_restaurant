import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import api from '../../api';
import './CategoryItem.css';

const CategoryItem = ({ idProduct }) => {
  const [product, setProduct] = useState(null);
  const [isAddButtonPressed, setIsAddButtonPressed] = useState(false);

  useEffect(() => {
    api.getGoodsById(idProduct)
      .then(response => setProduct(response.data))
      .catch(e => console.log(e));
  })
  if (!product) return null;

  const handlerClickAdd = ()=> {
    setIsAddButtonPressed(!isAddButtonPressed);
  }

  const { name, price, delivery, img: imgProduct, new: isNew, hit: isHit } = product;

  return (
    <Card sx={{ width: 288, height: 360 }} className='CategoryItem'>
      <Box position={'relative'} height={'208px'} width={'208px'}>
        <CardMedia
          className='CategoryItem_img'
          component="img"
          image={imgProduct}
          alt={name}
        />
        {isAddButtonPressed ?
        <div onClick={handlerClickAdd}>+</div>
        : <button onClick={handlerClickAdd} className='CategoryItem_buttonAdd'>
            +
          </button>
        }
      </Box>
      <CardContent className='CategoryItem_NamePrice'>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" color='primary'>
          {`${price} ₽`}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CategoryItem;
