import { Box, Typography, Button, useTheme } from "@mui/material";
import { Error } from "@mui/icons-material";

import { tokens } from "../../theme";

const ErrorPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Error sx={{ fontSize: 120, color: "#ff0000" }} />
      <Typography variant="h4" sx={{ fontWeight: "bold", margin: 2 }}>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="h6" sx={{ margin: 2 }}>
        We are sorry for the inconvenience. Please try again later.
      </Typography>
      <Button
        variant="contained"
        sx={{ margin: 2, backgroundColor: colors.greenAccent[600] }}
        onClick={() => window.location.reload()}
      >
        Reload Page
      </Button>
    </Box>
  );
};

export default ErrorPage;
