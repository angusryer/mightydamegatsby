import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

const appHtmlString = () => renderToString(<App />)

export default appHtmlString;