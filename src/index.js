import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PokemonPage from "./components/PokemonPage";

// ========================================
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<PokemonPage />);
