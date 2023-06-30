/*
  App Component

  This is the main component that wraps the entire application.
  It provides session management using the `SessionProvider` from `next-auth/react`.
  It also includes global components such as modals and layouts.
  The `Toaster` component is used for displaying toast notifications.

  Usage:
  This component is typically used as the entry point in the Next.js app.
  It should wrap the main component rendered in each page.

*/

import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import EditModal from "@/components/modals/EditModal";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
