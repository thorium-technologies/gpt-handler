import { useState } from 'react';
import { FormControl, Grid, InputLabel, Select, MenuItem, TextField, Box, Skeleton } from '@mui/material';
import { CustomButton } from '../common/custom-button';
import { CodeSnippet } from '../common/code-snippet-area';
import { NotificationAlert } from '../common/notification-alert';
import { enhanceCode } from '../../../infra/api/enhance/enhance-api';
import { LANGUAGE_LABELS } from '../../../core/constants/language';

export const EnhanceCode = () => {
  const [codeInput, setCodeInput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleEnhanceClick = async () => {
    try {
      setLoading(true);
      // Use selectedLanguage; if none selected, default to 'python'
      const languageToUse = selectedLanguage ?? 'python';
      const response = await enhanceCode({ code: codeInput, language: languageToUse });
      setResult(response.messages[0]?.message?.content ?? '');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setShowAlert(true);
    }
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      {/* Left Column: Language selection, code input, button, and alert */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="enhance-language-select-label">Programming Language</InputLabel>
          <Select
            labelId="enhance-language-select-label"
            label="Programming Language"
            fullWidth
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {Object.entries(LANGUAGE_LABELS).map(([key, label]) => (
              <MenuItem key={key} value={key}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Code to Enhance"
            multiline
            rows={10}
            fullWidth
            variant="outlined"
            sx={{ mb: 3 }}
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value)}
          />
        </FormControl>
        <CustomButton
          onClick={handleEnhanceClick}
          label={loading ? 'Enhancing...' : 'Enhance Code'}
          disabled={loading || !codeInput}
        />
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
      </Grid>

      {/* Right Column: Enhanced code snippet */}
      <Grid size={{ xs: 12, md: 6 }}>
        {loading ? (
          <Skeleton
            variant="rounded"
            sx={{ mb: 2, height: '60vh', overflow: 'auto' }}
          />
        ) : (
          <CodeSnippet
            code={result}
            language={selectedLanguage || 'python'}
            sx={{ mb: 2, height: '60vh', overflow: 'auto' }}
          />
        )}
      </Grid>
    </Grid>
  );
};
