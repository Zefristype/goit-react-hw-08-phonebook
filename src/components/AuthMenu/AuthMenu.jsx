import Box from '@mui/material/Box';
import { StyledNavLink } from 'components/Header/Header.styled';

export const AuthMenu = () => {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </Box>
  );
};
