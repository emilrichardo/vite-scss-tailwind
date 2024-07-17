import React from "react";
import ReactDOM from "react-dom/client";
import { components } from "./components";
import "./scss/style.scss";

const renderComponent = (container, componentId) => {
  const props = {};
  for (const attr of container.attributes) {
    props[attr.name] = attr.value;
  }
  const Component = components[componentId];
  if (!Component) {
    return;
  }
  const root = ReactDOM.createRoot(container);
  root.render(<Component {...props} />);
};

const searchAndRenderComponents = (container) => {
  Object.keys(components).forEach((componentId) => {
    const nestedComponents = container.querySelectorAll(
      `[data-component="${componentId}"]`
    );
    nestedComponents.forEach((nestedContainer) => {
      renderComponent(nestedContainer, componentId);
      searchAndRenderComponents(nestedContainer); // Recursividad para componentes anidados
    });
  });
};

const searchComponent = (componentId) => {
  const containers = document.querySelectorAll(
    `[data-component="${componentId}"]`
  );
  containers.forEach((container) => {
    searchAndRenderComponents(container); // Inicia el proceso recursivo desde el contenedor principal
  });
};

Object.keys(components).forEach((componentId) => {
  searchComponent(componentId);
});
