import { useEffect, useState } from "react";

import Loader from "./components/common/Loader";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTopButton
from "./components/common/ScrollToTop";
import { Toaster } from "react-hot-toast";

function App() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setLoading(false);

      }, 2500);

    return () =>
      clearTimeout(timer);

  }, []);

  return (
    <>
    <ScrollToTopButton />
      {loading ? (
        <Loader />
      ) : (
        <AppRoutes />
      )}

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}

export default App;