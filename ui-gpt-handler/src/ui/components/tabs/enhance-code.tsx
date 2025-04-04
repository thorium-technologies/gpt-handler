import { Typography } from '@mui/material';
import { CustomButton } from '../common/custom-button';

export const EnhanceCode = () => {
  const handleEnhanceClick = () => {
    // Here you can invoke your service, API call, or any logic.
    // For example: console.log('Enhance Code triggered!');
  };

  return (
    <>
      <Typography>
        This is the content of the <strong>Enhance Code</strong> tab.
      </Typography>

      {/* Position the FAB in the bottom-right corner. Adjust style as needed. */}
      <div style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <CustomButton onClick={handleEnhanceClick} label="Enhance" />
      </div>
    </>
  );
};
