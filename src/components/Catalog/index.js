import Menu from '../Menu';
import Box from '@mui/material/Box';
import Category from '../Category';
import api from '../../api';
import { useEffect, useState } from 'react';

const Catalog = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.getAllCategories()
      .then(response => setCategories(response.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <Box>
      <Menu categories={categories} />
      {categories.map((category) => <Category category={category} key={category.id} />)}
    </Box>
  )
}

export default Catalog;
