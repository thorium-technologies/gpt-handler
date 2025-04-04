import { Typography } from '@mui/material';
import { CodeSnippet } from '../common/code-snippet-area';
import { CustomButton } from '../common/custom-button';

export const CompactObject = () => {

    const code = `function helloWorld() {
        console.log("Hello, world!");
    }`;

    const handleCompactClick = () => {
        console.log('Compact Object triggered!');
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
        </div>
    );
};
