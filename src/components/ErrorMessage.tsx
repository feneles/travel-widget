import { Alert } from "@mui/material";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <Alert severity="error" className="my-4">
      {message}
    </Alert>
  );
};

export default ErrorMessage;
