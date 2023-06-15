import { ThemeTypings } from "@chakra-ui/react";
export const mobileStyleBreakpoint = <T = string | number>(
  mobileValue: T,
  desktopValue: T,
  breakpoint: ThemeTypings["breakpoints"] = "md"
): Record<string, T> => ({
  base: mobileValue,
  [breakpoint]: desktopValue,
});
export const desktopOnly = mobileStyleBreakpoint<boolean>(false, true);
export const mobileOnly = mobileStyleBreakpoint<boolean>(true, false);
