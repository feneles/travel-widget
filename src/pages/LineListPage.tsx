import { Box, Typography } from "@mui/material";
import { useLineStatus } from "../hooks/useLineStatus";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import LineStatusTable from "../components/LineStatusTable";

const LineListPage = () => {
  const { lines, loading, error, lastUpdated } = useLineStatus();

  const renderContent = () => {
    if (loading) {
      return (
        <Box className="w-full flex justify-center items-center min-h-80">
          <LoadingSpinner />
        </Box>
      );
    }

    if (error) {
      return <ErrorMessage message={error} />;
    }

    if (lines.length === 0) {
      return <Typography>No line status data available.</Typography>;
    }

    return <LineStatusTable lines={lines} />;
  };

  const formattedDate = lastUpdated
    ? lastUpdated.toLocaleString("en-GB")
    : "...";

  return (
    <Box>
      <Box className="mb-4 flex justify-between items-center">
        <Typography variant="h4" component="h1">
          Travel Widget
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Last updated: {formattedDate}
        </Typography>
      </Box>

      {renderContent()}
    </Box>
  );
};

export default LineListPage;
