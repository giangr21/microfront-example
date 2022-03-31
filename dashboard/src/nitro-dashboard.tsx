import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import singleSpaReact from "single-spa-react";
import App from "./App";

const Root = () => {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
});

export const { bootstrap, mount, unmount } = lifecycles;
