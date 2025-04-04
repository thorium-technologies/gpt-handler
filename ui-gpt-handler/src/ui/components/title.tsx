import { Typography } from "@mui/material"
import { PAGE_TITLE } from '../../core/constants/ui';

export const PageTitle = () => {
    return (
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
            <Typography variant="h4" component="h1" gutterBottom>
                {PAGE_TITLE}
            </Typography>
        </div>
    )
}