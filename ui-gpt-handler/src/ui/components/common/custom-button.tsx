import React from 'react';
import Fab from '@mui/material/Fab';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const STATIC_LABEL = 'Navigate';

interface CustomButtonProps {
  onClick: () => void; 
  label?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  label = STATIC_LABEL,
}) => {
  return (
    <Fab 
      variant="extended" 
      color="secondary" 
      aria-label="custom-button" 
      onClick={onClick}
    >
      <AutoAwesomeIcon sx={{ mr: 1 }} />
      {label}
    </Fab>
  );
};
