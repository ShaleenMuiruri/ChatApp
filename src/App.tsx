import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesktopChatApp from "./pages/DesktopChatApp";
import LoginPageChatApp from "./pages/LoginPageChatApp";
import { useEffect } from "react";

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
      case "/loginpagechatapp":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DesktopChatApp />} />
      <Route path="/loginpagechatapp" element={<LoginPageChatApp />} />
    </Routes>
  );
}
export default App;
