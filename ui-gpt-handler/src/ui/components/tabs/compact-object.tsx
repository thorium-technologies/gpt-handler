import { Typography } from '@mui/material';
import { CodeSnippet } from '../common/code-snippet-area';

export const CompactObject = () => {

    const code = `function helloWorld() {
    console.log("Hello, world!");
}`;
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
        </div>
    );
};
