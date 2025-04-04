import { Box, FormControl, Grid, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { CodeSnippet } from '../common/code-snippet-area';
import { CustomButton } from '../common/custom-button';
import { NotificationAlert } from '../common/notification-alert';
import { LANGUAGE_LABELS } from '../../../core/constants/language';

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
    <Grid
      container
      spacing={4}
      sx={{
        mt: 4,
      }}
    >
      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl fullWidth>
          <InputLabel id="language-select-label">Programming Language</InputLabel>
          <Select
            labelId="language-select-label"
            label="Programming Language"
            fullWidth
            sx={{ mb: 2 }}
            onChange={(e) => console.log(e.target.value)}
          >
            {Object.entries(LANGUAGE_LABELS).map(([key, label]) => (
              <MenuItem key={key} value={key}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <CustomButton
          onClick={handleCompactClick}
          label="Generate compact object algorithm"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
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
        <CodeSnippet
          code={code}
          language="JavaScript"
          sx={{ mb: 2, height: '60vh', overflow: 'auto' }}
        />
      </Grid>
    </Grid>
  );
};
