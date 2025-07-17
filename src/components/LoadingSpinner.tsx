import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box className="flex justify-center items-center p-8">
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
