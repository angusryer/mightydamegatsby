import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// Receives a callback function. Send web vitals to an analytics endpoint or just provide console.log. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
