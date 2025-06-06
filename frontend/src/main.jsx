import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
import StoreContextProvider from "./context/StoreContext.jsx"; // This is the problematic import
// ... other imports

createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
);
