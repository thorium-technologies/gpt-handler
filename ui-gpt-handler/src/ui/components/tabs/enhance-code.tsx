import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { CustomButton } from '../common/custom-button';
import { CodeSnippet } from '../common/code-snippet-area';
import { NotificationAlert } from '../common/notification-alert';

export const EnhanceCode = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleEnhanceClick = () => {
    // Your logic or API call here. For example:
    // enhanceCodeApi(...)
    //   .then(() => setShowAlert(true))
    //   .catch(() => ... handle error ...);

    setShowAlert(true);
  };

  return (
    <>
      <Typography>
        This is the content of the <strong>Enhance Code</strong> tab.
      </Typography>

      <CodeSnippet 
        code={`console.log("Enhanced code snippet goes here.");`}
        language="JavaScript"
        sx={{ mt: 3, mb: 2 }}
      />

      <CustomButton onClick={handleEnhanceClick} label="Enhance" />

      {showAlert && (
        <Box sx={{ mt: 2 }}>
          <NotificationAlert
            severity="success"
            title="Success"
            message="Your code was enhanced successfully."
            onClose={() => setShowAlert(false)}
          />
        </Box>
      )}
    </>
  );
};
