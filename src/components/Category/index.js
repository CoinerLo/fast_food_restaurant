import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CategoryItem from '../CategoryItem';
import './category.css'

const Category = ({ category }) => {
  const { id, name, products } = category;
  if (products.length === 0) return null;

  return (
    <Box className={id % 2 === 0 ? 'bg-d' : 'bg-w'} paddingTop={'40px'}>
      <Typography component="h2" fontSize={'32px'} marginBottom={'32px'}>{name}</Typography>
      <Box  sx={{ flexGrow: 1 }}>
        <Grid container>
          {products.map(product => (
            <Grid item xs={3} key={product}>
              <CategoryItem idProduct={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Category;
