import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import TransactionsPage from "../pages/TransactionsPage/TransactionsPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/transactions" element={<TransactionsPage />} />
      <Route exact path="/stats" element={<div>Stats Page</div>} />
    </Routes>
  );
};
