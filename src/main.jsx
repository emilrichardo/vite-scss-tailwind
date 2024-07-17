import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./components/MyComponent";
import "./scss/style.scss";

// Encuentra el contenedor del componente
const container = document.getElementById("my-componente");

const props = {};
for (const attr of container.attributes) {
  props[attr.name] = attr.value;
}

const root = ReactDOM.createRoot(container);
root.render(<MyComponent {...props} />);
