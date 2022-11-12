import React from "react";
import ReactDOM from "react-dom/client";
import InstaModal from "./components/InstaModal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <InstaModal title="Título aki..." />
  </React.StrictMode>
);
