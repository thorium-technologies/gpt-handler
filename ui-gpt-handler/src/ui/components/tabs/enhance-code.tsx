import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { CustomButton } from '../common/custom-button';
import { CodeSnippet } from '../common/code-snippet-area';
import { NotificationAlert } from '../common/notification-alert';
import { enhanceCode } from '../../../infra/api/enhance/enhance-api';

export const EnhanceCode = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [code, setCode] = useState('for i in range(0,10): print(i)');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEnhanceClick = async () => {
    try {
      setLoading(true);
      const response = await enhanceCode({ code, language: 'python' });
      setResult(response.messages[0]?.message?.content || '');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setShowAlert(true);
    }
  };

  return (
    <>
      <Typography>
        This is the content of the <strong>Enhance Code</strong> tab.
      </Typography>

      <CodeSnippet 
        code={loading ? 'Loading...' : result ? result : ''}
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
