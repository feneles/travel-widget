import { Routes, Route, Navigate } from "react-router-dom";
import LineListPage from "../pages/LineListPage";
import LineDetailsPage from "../pages/LineDetailsPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/travel" element={<LineListPage />} />
      <Route path="/travel/:lineId" element={<LineDetailsPage />} />
      <Route path="*" element={<Navigate to="/travel" />} />
    </Routes>
  );
};
