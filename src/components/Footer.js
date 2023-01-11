import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/kcoder.gif';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="0px" pt="24px">
      <img src={Logo} alt="logo" width="20%" />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '15px' } }} mt="1px" textAlign="center" pb="40px">copyright@DesignAndDevelopByDIPAKKUMAL</Typography>
  </Box>
);

export default Footer;