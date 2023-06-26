import { AppProps } from "next/app";
import { AllTheProviders } from "../jest.setup";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AllTheProviders>
      <Component {...pageProps} />
    </AllTheProviders>
  );
}
