import { ReactNode } from 'react';
import { PageTitle } from '../components/title';
import { Container, useTheme } from '@mui/material';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const theme = useTheme();
  
  return (
    <Container
      sx={{
        minHeight: '100vh',
        minWidth: '95%',
        padding: 1,
        background: theme.palette.background.default,
      }}
    >
       <PageTitle />
      {children}
    </Container>
  );
};
