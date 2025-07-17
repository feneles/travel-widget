import { Routes, Route, Navigate } from "react-router-dom";
import LineListPage from "../pages/LineListPage";
import LineDetailsPage from "../pages/LineDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/travel" replace />} />
      <Route path="/travel" element={<LineListPage />} />
      <Route path="/travel/:lineId" element={<LineDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
