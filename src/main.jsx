import React from "react";
import ReactDOM from "react-dom/client";
import { components } from "./components";
import "./scss/style.scss";

const searchComponent = (componentId) => {
  const containers = document.querySelectorAll(
    `[data-component="${componentId}"]`
  );
  containers.forEach((container) => {
    const props = {};
    for (const attr of container.attributes) {
      props[attr.name] = attr.value;
    }

    const Component = components[componentId];
    if (!Component) {
      return;
    }
    const root = ReactDOM.createRoot(container);

    root.render(<Component {...props}></Component>);
  });
};

Object.keys(components).map((componentId) => {
  searchComponent(componentId);
});
