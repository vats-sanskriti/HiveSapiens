// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import{CssBaseline} from '@mui/material';
// import{HelmetProvider} from 'react-helmet-async';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <HelmetProvider>
//     <CssBaseline />
//     <div onContextMenu={e => e.preventDefault()}>
//       <App />
//     </div>
//     </HelmetProvider> 
//   </StrictMode>,
// )

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";  // ✅ Import Redux Provider
import store from "./redux/store";  // ✅ Import Redux Store

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* ✅ Wrap App with Provider */}
      <HelmetProvider>
        <CssBaseline />
        <div onContextMenu={(e) => e.preventDefault()}>
          <App />
        </div>
      </HelmetProvider>
    </Provider>
  </StrictMode>
);



