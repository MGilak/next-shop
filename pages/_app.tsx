import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../components/main-slider/slider.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
