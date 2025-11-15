"use client";

import * as React from "react";
import * as Types from "@/lib/types";
import * as Paths from "@/lib/paths";

type State = {
  activePath: Types.Path;
};

type SiteContext = {
  state: State;
  setActivePath: (path: Types.Path) => void;
};

const SiteContext = React.createContext<SiteContext | null>(null);

type SiteContextProps = React.PropsWithChildren;

export const Provider: React.FC<SiteContextProps> = (props) => {
  const [state, setState] = React.useState<State>({
    activePath: Paths.HOME,
  });

  const setActivePath = (path: Types.Path) => {
    setState((state) => ({
      ...state,
      activePath: path,
    }));
  };

  const value = {
    state,
    setActivePath,
  };

  return (
    <SiteContext.Provider value={value}>{props.children}</SiteContext.Provider>
  );
};

export const useContext = () => {
  const context = React.useContext(SiteContext);
  if (context === null) {
    throw new Error(
      "SiteContext.useContext must be used within a SiteContext.Provider"
    );
  }
  return context;
};

export const setPath = (path: Types.Path) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext();
  context.setActivePath(path);
};
