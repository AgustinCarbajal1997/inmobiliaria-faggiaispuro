import "../styles/globals.css";
import "../firebase/client";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import DashboardLayout from "../components/Layout/DashboardLayout";
import GeneralLayout from "../components/Layout/GeneralLayout";
import { AppContextProvider } from "../context/useAppContext";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname.includes("/dashboard")) {
    return (
      <AppContextProvider>
        <DashboardLayout>
          <Toaster />

          <Component {...pageProps} />
        </DashboardLayout>
      </AppContextProvider>
    );
  }
  return (
    <GeneralLayout>
      <Toaster />
      <Component {...pageProps} />
    </GeneralLayout>
  );
}

export default MyApp;
