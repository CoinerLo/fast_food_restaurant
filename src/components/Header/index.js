import Box from '@mui/material/Box';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CustomButton from './CustomButton';
import './header.css';

const Header = () => {
  return (
    <>
      <div className='header_logo'>
        <span />
        <span />
        <span />
      </div>
      <Box className='header_box'>
        <Box sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <FormatAlignLeftIcon />
        </Box>
        <CustomButton className='header_button' variant="contained" size="small" color='primary'>
          {`327 ₽`} <ShoppingBasketIcon className='ml-4'/>
        </CustomButton>
      </Box>
    </>
  )
}

export default Header;
