import { createContext, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

type ThemeProviderValues = {
  theme: BackgroundColor;
  setTheme: (theme: BackgroundColor) => void;
  backgroundGradient: string;
};

const ThemeContext = createContext<ThemeProviderValues | null>(null);

export const backgroundColor = {
  red: ["#ED213A", "#93291E"],
  orange: ["#f12711", "#f5af19"],
  green: ["#000000", "#0f9b0f"],
  blue: ["#373B44", "#4286f4"],
  purple: ["#41295a", "#2F0743"],
  pink: ["#f953c6", "#b91d73"],
} as const;

type BackgroundColor = keyof typeof backgroundColor;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<BackgroundColor>("theme", "red");

  const [firstColor, secondColor] = backgroundColor[theme];

  const backgroundGradient = `linear(to-l,${firstColor},${secondColor})`;

  const value = useMemo(() => {
    return { theme, setTheme, backgroundGradient };
  }, [theme, setTheme, backgroundGradient]);

  console.log(theme);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a theme provider");
  }
  return context;
};

export default useTheme;

// export const useTheme = () => {

//     return { theme, setTheme, firstColor, secondColor, backgroundGradient };
//   };
