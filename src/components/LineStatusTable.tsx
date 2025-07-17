import { Link as RouterLink } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Link,
  Box,
} from "@mui/material";
import type { Line } from "../types";
import { lineColors } from "../utils/colors";

interface LineStatusTableProps {
  lines: Line[];
}

const getStatusChipColor = (
  severity: number
): "success" | "warning" | "error" | "default" => {
  if (severity === 10) return "success";
  if (severity < 10 && severity > 5) return "warning";
  if (severity <= 5) return "error";
  return "default";
};

const LineStatusTable = ({ lines }: LineStatusTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="tube line status table">
        <TableHead>
          <TableRow>
            <TableCell>Line</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lines.map((line) => (
            <TableRow key={line.id}>
              <TableCell component="th" scope="row">
                <Box className="flex items-center gap-3">
                  <Box
                    component="span"
                    className="w-1.5 h-6 rounded"
                    style={{
                      backgroundColor:
                        lineColors[line.id] || lineColors.default,
                    }}
                  />
                  <span className="font-bold">{line.name}</span>
                </Box>
              </TableCell>
              <TableCell>
                <Chip
                  label={line.lineStatuses[0].statusSeverityDescription}
                  color={getStatusChipColor(
                    line.lineStatuses[0].statusSeverity
                  )}
                  size="small"
                />
              </TableCell>
              <TableCell align="right">
                <Link component={RouterLink} to={`/travel/${line.id}`}>
                  View More
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LineStatusTable;
