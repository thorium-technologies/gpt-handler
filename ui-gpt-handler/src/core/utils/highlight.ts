import { createHighlighter } from 'shiki';
import { SUPPORTED_LANGUAGES } from '../constants/language';

let cachedHighlighter: Awaited<ReturnType<typeof createHighlighter>>;

/**
 * Highlights code using Shiki with a VS Code-like theme.
 * @param code - The code string to highlight.
 * @param lang - The programming language of the code.
 * @returns A Promise resolving to an HTML string with syntax highlighting.
 */
export const highlightCode = async (code: string, lang: string): Promise<string> => {
    if (!cachedHighlighter) {
        cachedHighlighter = await createHighlighter({
            themes: ['github-light'],
            langs: SUPPORTED_LANGUAGES,
        });
    }
    return cachedHighlighter.codeToHtml(
        code,
        {
            lang,
            theme: 'github-light',
        }
    );
};
