import React from 'react';
import Fab from '@mui/material/Fab';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const STATIC_LABEL = 'Navigate';

interface CustomButtonProps extends React.ComponentProps<typeof Fab> {
  onClick: () => void; 
  label?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  label = STATIC_LABEL,
  ...props
}) => {
  return (
    <Fab 
      variant="extended" 
      color="secondary" 
      aria-label="custom-button" 
      onClick={onClick}
      {...props}
    >
      <AutoAwesomeIcon sx={{ mr: 1 }} />
      {label}
    </Fab>
  );
};
