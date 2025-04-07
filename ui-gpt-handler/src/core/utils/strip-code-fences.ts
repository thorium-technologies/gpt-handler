/**
 * Removes leading and trailing triple-backtick fences from a code snippet.
 * Example:
 * ```python
 * print("Hello World")
 * ```
 * becomes
 * print("Hello World")
 */
export function stripCodeFences(rawCode: string): string {
    // Remove opening fences like ```python\n or ```
    const withoutOpening = rawCode.replace(/^```[a-zA-Z]*\n?/, '');
    // Remove closing fences like \n``` or ```
    const withoutClosing = withoutOpening.replace(/\n?```$/, '');
    return withoutClosing;
  }
  