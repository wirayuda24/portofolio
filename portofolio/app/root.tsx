import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
  useOutlet,
} from "@remix-run/react";
import { HeaderResponsive } from "./components/header";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import type { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Wirayuda's Website",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const outlet = useOutlet();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <HeaderResponsive>
              <AnimatePresence exitBeforeEnter initial={false}>
                <motion.main
                  key={useLocation().pathname}
                  initial={{x: '-10%', opacity: 0}}
                  animate={{x: '0', opacity: 1}}
                  exit={{y: '-10%', opacity: 0}}
                  transition={{duration: 0.3}}
                >
                  {outlet}
                </motion.main>
              </AnimatePresence>
            </HeaderResponsive>
          </MantineProvider>
        </ColorSchemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
