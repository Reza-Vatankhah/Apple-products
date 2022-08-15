
import HomePage from "./components/layout/home/HomePage";
import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/layout/products/ProductPage";
import ModelPage from "./components/layout/models/ModelPage";
import ScrollToTop from "./components/shared/ScroollToTop";

function App() {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/models/:slug" element={<ModelPage />} />
          <Route path="/blogs/:slug" element={<ProductPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
