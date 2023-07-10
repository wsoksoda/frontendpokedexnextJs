import { ChakraProvider } from "@chakra-ui/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import "@testing-library/jest-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

// const customJestConfig = {
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
// };
/**
 * All the *base* providers that are used in the app, not that some providers
 * are nested inside of other components down the tree.
 * @param children
 * @returns JSX.Element
 */
export const AllTheProviders = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <AnimatePresence mode="wait" initial={false}>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ChakraProvider>
  </AnimatePresence>
);

export function useCustomHook() {
  return useQuery({ queryKey: ["customHook"], queryFn: () => "Hello" });
}

jest.mock("react-chartjs-2", () => ({
  Bar: () => null,
}));
