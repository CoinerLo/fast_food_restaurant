import Box from '@mui/material/Box';
import FooterItem from './FooterItem';

import './footer.css'
const Footer = () => {
  return (
    <Box>
      <Box className='footer_logo'>
        <span />
        <span />
        <span />
      </Box>
      <Box marginTop={'78px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} marginBottom={'120px'}>
        <FooterItem />
        <FooterItem />
        <Box className='ellipse'></Box>
        <FooterItem />
        <FooterItem />
      </Box>
      <Box>
        
      </Box>
    </Box>
  )
}

export default Footer;
