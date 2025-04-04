import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { TAB_LABELS } from '../../../core/constants/ui';
import { TabPanel } from './tab-panel';
import { EnhanceCode } from './enhance-code';
import { CompactObject } from './compact-object';

export const TabsContainer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        {TAB_LABELS.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>

      <TabPanel value={value} index={0}>
        <EnhanceCode />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <CompactObject />
      </TabPanel>
    </Box>
  );
};