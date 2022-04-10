import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Delivery = () => {
  const [isDelivery, setIsDelivery] = useState(true);

  const clickHandlerIsDelivery = (typeDelivery) => () => {
    typeDelivery ? setIsDelivery(false) : setIsDelivery(true)
  }

  return (
    <Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} marginTop={'118px'}>
        <Typography variant="h1" gutterBottom component="h1" fontSize={'64px'} fontWeight={600}>
          Доставка г.Москва
        </Typography>
        <ButtonGroup>
          <Button variant={isDelivery ? "contained" : ""} onClick={clickHandlerIsDelivery(false)}>Доставка</Button>
          <Button variant={isDelivery ? "" : "contained"} onClick={clickHandlerIsDelivery(true)}>Самовывоз</Button>
        </ButtonGroup>
      </Box>
      {isDelivery && (
        <Box
          component="form"
          autoComplete="off"
          display={'flex'}
          alignItems={'center'}
          marginTop={'47px'}
          marginBottom={'65px'}
        >
          <Typography component="h2" fontSize={'32px'} marginRight={'12px'}>Улица</Typography>
          <TextField id="street" label="Улица" variant="outlined" />
          <Typography component="h2" fontSize={'32px'} marginRight={'12px'} marginLeft={'43px'}>Дом</Typography>
          <TextField id="homeNum" label="Дом" variant="outlined" />
        </Box>
      )}
    </Box>
  )
}

export default Delivery;
