import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import "./index.css";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Toaster position='top-right' expand={true} richColors />
        <App />
    </React.StrictMode>
);
