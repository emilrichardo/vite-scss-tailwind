import React from "react";
import ReactDOM from "react-dom/client";
import { components } from "./components";
import "./scss/style.scss";

// Step 1: Create a map to store roots
const rootsMap = new WeakMap();

const renderComponent = (container, componentId) => {
  const props = {};
  for (const attr of container.attributes) {
    props[attr.name] = attr.value;
  }
  const Component = components[componentId];
  if (!Component) {
    return;
  }

  // Step 2: Check if a root already exists for this container
  let root = rootsMap.get(container);
  if (!root) {
    // If not, create a new root and store it
    root = ReactDOM.createRoot(container);
    rootsMap.set(container, root);
  }

  // Step 3: Use the existing or new root to render the component
  root.render(<Component {...props}></Component>);
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
