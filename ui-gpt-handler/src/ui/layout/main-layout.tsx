import { ReactNode } from 'react';
import { PageTitle } from '../components/title';
import { Container } from '@mui/material';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container>
       <PageTitle />
      {children}
    </Container>
  );
};
