import { FormControl, Grid, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import { CodeSnippet } from '../common/code-snippet-area';
import { CustomButton } from '../common/custom-button';
import { LANGUAGE_LABELS } from '../../../core/constants/language';
import { generateProgrammingAlgorithm } from '../../../infra/api/programming-algorithm/programming-algorithm-api';

export const ProgrammingAlgorithm = () => {
  const [language, setLanguage] = useState('');
  const [algorithm_name, setAlgorithm] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCompactClick = async () => {
    try {
      setLoading(true);
      const response = await generateProgrammingAlgorithm({ language, algorithm_name });
      setCode(response.messages[0]?.message?.content || '');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
            sx={{ mb: 3 }}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {Object.entries(LANGUAGE_LABELS).map(([key, label]) => (
              <MenuItem key={key} value={key}>
                {label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="Algorithm"
            id='algorithm'
            fullWidth
            multiline
            variant="outlined"
            sx={{ mb: 3 }}
            value={algorithm_name}
            onChange={(e) => setAlgorithm(e.target.value)}
          />
        </FormControl>
        <CustomButton
          onClick={handleCompactClick}
          label={loading ? "Generating..." : "Generate programming algorithm"}
          disabled={loading || !language || !algorithm_name}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <CodeSnippet
          code={loading ? 'Loading...' : code}
          language={language}
          sx={{ mb: 2, height: '60vh', overflow: 'auto' }}
        />
      </Grid>
    </Grid>
  );
};
