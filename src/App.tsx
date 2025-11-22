import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./Global.css";

import Layout from "./components/layouts/Layout";
import Page from "./pages/page";
import { ProductStoreProvider } from "./store/product-store";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <ProductStoreProvider>
                <Page />
              </ProductStoreProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
