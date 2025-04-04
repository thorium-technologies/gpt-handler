import { ReactNode } from 'react';
import { PageTitle } from '../components/title';
import { Container } from '@mui/material';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container
      sx={{ minHeight: '100vh', padding: 2 }}
    >
       <PageTitle />
      {children}
    </Container>
  );
};
