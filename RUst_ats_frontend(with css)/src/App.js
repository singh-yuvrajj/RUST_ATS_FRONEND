import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop from "./pages/Desktop";
import Desktop1 from "./pages/Desktop1";
import Desktop2 from "./pages/Desktop2";
import Desktop3 from "./pages/Desktop3";
import Desktop4 from "./pages/Desktop4";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-4":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-3":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-8":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-6":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/desktop-4" element={<Desktop1 />} />
      <Route path="/desktop-3" element={<Desktop2 />} />
      <Route path="/desktop-8" element={<Desktop3 />} />
      <Route path="/desktop-6" element={<Desktop4 />} />
    </Routes>
  );
}
export default App;
