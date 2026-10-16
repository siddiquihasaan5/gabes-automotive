import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type PageRoute = "/" | "/services" | "/about" | "/contact" | "/404";

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const getNormalizedPath = (): string => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    const validPaths = ["/", "/services", "/about", "/contact"];
    return validPaths.includes(path) ? path : "/404";
  };

  const [currentPath, setCurrentPath] = useState<string>(getNormalizedPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getNormalizedPath());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    const cleanPath = path.replace(/\/+$/, "") || "/";
    window.history.pushState({}, "", cleanPath);
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
