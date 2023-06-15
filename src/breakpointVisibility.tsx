import { ReactNode, ReactElement } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { desktopOnly, mobileOnly } from "./styleHelpers";

export const DesktopOnly = ({
  children,
}: {
  children: ReactNode;
}): ReactElement | null => {
  const visible = useBreakpointValue(desktopOnly, { ssr: false });
  return visible ? <>{children}</> : null;
};

export const MobileOnly = ({
  children,
}: {
  children: ReactNode;
}): ReactElement | null => {
  const visible = useBreakpointValue(mobileOnly);
  return visible ? <>{children}</> : null;
};
