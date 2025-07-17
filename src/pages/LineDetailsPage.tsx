import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Paper,
  Alert,
  AlertTitle,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { lineColors } from "../utils/colors";
import { useLineStore } from "../store/lineStore";

const LineDetailsPage = () => {
  const { lineId } = useParams<{ lineId: string }>();
  const navigate = useNavigate();
  const { lines, loading, error, lastUpdated } = useLineStore();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const line = lines.find((l) => l.id === lineId);

  if (!line) {
    return <ErrorMessage message={`Line with ID: ${lineId} not found`} />;
  }

  const isGoodService = line.lineStatuses.some(
    (status) => status.statusSeverity === 10
  );

  return (
    <Paper elevation={3} className="p-4 md:p-8">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/travel")}
        className="mb-4"
      >
        Back to list
      </Button>

      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        style={{
          color: lineId
            ? lineColors[lineId] || lineColors.default
            : lineColors.default,
        }}
      >
        {line.name}
      </Typography>

      <Typography
        variant="caption"
        color="textSecondary"
        component="p"
        gutterBottom
      >
        Status as of: {lastUpdated?.toLocaleString("en-GB")}
      </Typography>

      <Divider className="my-4" />

      {isGoodService ? (
        <Alert severity="success">
          <AlertTitle>No Disruptions</AlertTitle>
          Good service is running on this line.
        </Alert>
      ) : (
        <Box className="flex flex-col gap-4">
          {line.lineStatuses.map((status) => (
            <Alert
              key={status.id}
              severity={status.statusSeverity < 10 ? "warning" : "info"}
            >
              <AlertTitle>{status.statusSeverityDescription}</AlertTitle>
              {status.reason ? status.reason : "No additional information."}
            </Alert>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default LineDetailsPage;
