import {
    Box,
    Typography,
    IconButton,
    Paper,
    Tooltip,
    useTheme,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

interface CodeSnippetProps {
    code: string;
    language?: string;
    sx?: SxProps<Theme>;
}

export const CodeSnippet = ({ code, language = 'text', sx }: CodeSnippetProps) => {
    const [copied, setCopied] = useState(false);
    const theme = useTheme();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <Paper
            variant="outlined"
            sx={{
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                fontFamily: 'monospace',
                overflow: 'hidden',
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[1],
                ...sx, // override or extend with consumer styles
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                    bgcolor: theme.palette.grey[200],
                    borderBottom: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Typography variant="caption" color="text.secondary">
                    {language}
                </Typography>

                <Tooltip title="Copied" open={copied} disableFocusListener disableHoverListener disableTouchListener>
                    <IconButton size="small" onClick={handleCopy} color="primary">
                        <ContentCopyIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>

            <Box
                component="pre"
                sx={{
                    m: 0,
                    p: 2,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    fontSize: '0.875rem',
                }}
            >
                <code>{code}</code>
            </Box>
        </Paper>
    );
};
