import { useState } from 'react';
import { Tabs, Tab, Box, useTheme } from '@mui/material';
import { TAB_LABELS } from '../../../core/constants/ui';
import { TabPanel } from './tab-panel';
import { EnhanceCode } from './enhance-code';
import { ProgrammingAlgorithm } from './programming-algorithm';

export const TabsContainer = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        mb: '2.5vw',
        padding: 1,
        background: theme.gradients.primary,
        borderRadius: theme.shape.borderRadius,
        boxShadow: 1,
      }}
    >
      <Tabs value={value} onChange={handleChange}>
        {TAB_LABELS.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>

      <TabPanel value={value} index={0}>
        <EnhanceCode />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ProgrammingAlgorithm />
      </TabPanel>
    </Box>
  );
};