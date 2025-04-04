import { Typography, Box } from '@mui/material';
import { useState } from 'react';
import { CodeSnippet } from '../common/code-snippet-area';
import { CustomButton } from '../common/custom-button';
import { NotificationAlert } from '../common/notification-alert';

export const CompactObject = () => {
  const code = `function helloWorld() {
    console.log("Hello, world!");
  }`;

  const [showAlert, setShowAlert] = useState(false);

  const handleCompactClick = () => {
    console.log('Compact Object triggered!');
    // After your logic or API call, show the alert
    setShowAlert(true);
  };

  return (
    <div>
      <Typography>
        This is the content of the <strong>Compact Object</strong> tab.
      </Typography>

      <CodeSnippet
        code={code}
        language="JavaScript"
        sx={{ mt: 3, mb: 2 }}
      />

      <CustomButton
        onClick={handleCompactClick}
        label="Compact"
      />

      {showAlert && (
        <Box sx={{ mt: 2 }}>
          <NotificationAlert
            severity="success"
            title="Success"
            message="Your compact object was generated successfully."
            onClose={() => setShowAlert(false)}
          />
        </Box>
      )}
    </div>
  );
};
