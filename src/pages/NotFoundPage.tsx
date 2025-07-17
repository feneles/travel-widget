import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box className="flex flex-col min-h-80 gap-8 items-center justify-center text-center">
      <Typography
        variant="h1"
        component="h1"
        className="font-bold text-gray-700"
      >
        404
      </Typography>
      <Typography variant="h5" component="p" className="mb-6 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button component={RouterLink} to="/travel" variant="text" size="large">
        Go Back to Home Page
      </Button>
    </Box>
  );
};

export default NotFoundPage;
