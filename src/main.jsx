import React from "react";
import ReactDOM from "react-dom/client";
import { components } from "./components";
import "./scss/style.scss";

Object.keys(components).map((componentId) => {
  const containers = document.querySelectorAll(`[id="${componentId}"]`);
  containers.forEach((container) => {
    const props = {};
    for (const attr of container.attributes) {
      props[attr.name] = attr.value;
    }
    const children = container.innerHTML;
    const Component = components[componentId];

    const root = ReactDOM.createRoot(container);

    root.render(<Component {...props}>{children}</Component>);
  });
});
