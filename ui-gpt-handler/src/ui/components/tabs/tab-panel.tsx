import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface TabPanelProps {
  children: ReactNode;
  value: number;
  index: number;
}

export const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};
