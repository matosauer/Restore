import { Button, Link, Paper, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Paper>
        <Typography variant='h1' align='center'>Not Found</Typography>
        <Typography variant='h3' align='center'>Sorry, we couldn't find what you were looking for.</Typography>

        <Button fullWidth component={Link} to='/catalog'>
            Go back to shop
        </Button>
    </Paper>
  )
}

