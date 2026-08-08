import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { SimulatorPage } from "../pages/SimulatorPage";
import { QuotePage } from "../pages/QuotePage";
import { CatalogPage } from "../pages/CatalogPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/simulateur" element={<SimulatorPage />} />
        <Route path="/devis" element={<QuotePage />} />
        <Route path="/catalogue" element={<CatalogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
