import { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    IconButton,
    Paper,
    Tooltip,
    useTheme,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { SxProps, Theme } from '@mui/material/styles';
import { DEFAULT_SNIPPET_LANGUAGE } from '../../../core/constants/language';
import { NotificationAlert } from './notification-alert';
import { highlightCode } from '../../../core/utils/highlight';
import { stripCodeFences } from '../../../core/utils/strip-code-fences';

interface CodeSnippetProps {
    code: string;
    language?: string;
    sx?: SxProps<Theme>;
}

/**
 * CodeSnippet component renders highlighted code using Shiki.
 * It supports multiple languages and allows code to be copied.
 * 
 * Highlighting is powered by [Shiki](https://shiki.style/guide/), which uses VS Code themes.
 */
export const CodeSnippet = ({
    code,
    language = DEFAULT_SNIPPET_LANGUAGE,
    sx,
}: CodeSnippetProps) => {
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [highlightedCode, setHighlightedCode] = useState<string>('');
    const theme = useTheme();

    // Generate highlighted HTML whenever code or language changes.
    useEffect(() => {
        const runHighlight = async () => {
            try {
                const sanitizedCode = stripCodeFences(code);
                const html = await highlightCode(sanitizedCode, language);
                setHighlightedCode(html);
            } catch (err) {
                console.error('Failed to highlight code:', err);
                setError('Failed to highlight code.');
            }
        };

        runHighlight();
    }, [code, language]);

    const handleCopy = async () => {
        try {
            const sanitizedCode = stripCodeFences(code);
            await navigator.clipboard.writeText(sanitizedCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy code:', err);
            setError('Failed to copy code to clipboard.');
        }
    };

    const handleCloseAlert = () => {
        setError(null);
    };

    return (
        <>
            {error && (
                <Box sx={{ mt: 3 }}>
                    <NotificationAlert
                        severity="error"
                        message={error}
                        onClose={handleCloseAlert}
                    />
                </Box>
            )}

            <Paper
                variant="outlined"
                sx={{
                    bgcolor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    fontFamily: 'monospace',
                    overflow: 'hidden',
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: theme.shadows[1],
                    display: 'flex',
                    flexDirection: 'column',
                    ...sx, // allow consumers to override or extend styles
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
                        flexShrink: 0, // Ensure the header does not shrink
                    }}
                >
                    <Typography variant="caption" color="text.secondary">
                        {language}
                    </Typography>

                    <Tooltip
                        title="Copied"
                        open={copied}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                    >
                        <IconButton size="small" onClick={handleCopy} color="primary">
                            <ContentCopyIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Box>

                <Box
                    component="div"
                    sx={{
                        flexGrow: 1, // Allow the code area to take up remaining space
                        overflowY: 'auto', // Enable vertical scrolling
                        m: 0,
                        p: 2,
                        fontSize: '0.875rem',
                        fontFamily: 'monospace',
                    }}
                    // Using dangerouslySetInnerHTML is safe because we trust the output from Shiki.
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                />
            </Paper>
        </>
    );
};
