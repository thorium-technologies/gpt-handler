import { SxProps, Theme } from "@mui/material";

export interface CodeSnippetProps {
    code: string;
    language?: string;
    sx?: SxProps<Theme>;
}