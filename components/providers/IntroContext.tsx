"use client";

import React, { createContext, useContext, useState } from "react";

type IntroContextType = {
  isEntered: boolean;
  enterSite: () => void;
};

const IntroContext = createContext<IntroContextType>({
  isEntered: false,
  enterSite: () => {},
});

export const IntroProvider = ({ children }: { children: React.ReactNode }) => {
  const [isEntered, setIsEntered] = useState(false);

  const enterSite = () => setIsEntered(true);

  return (
    <IntroContext.Provider value={{ isEntered, enterSite }}>
      {children}
    </IntroContext.Provider>
  );
};

export const useIntro = () => useContext(IntroContext);

