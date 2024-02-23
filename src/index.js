import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
// import { createContext } from "react";
// import { ContextProvider } from "./context/Context.Provider";

const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /* Обов'язково для gh-pages */
}
{
  /* <BrowserRouter basename='/goit-hw-05-movies'> назва репозиторію */
}
{
  /* 1. Додати BrowserRouter щоб працювали наші маршрути */
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
