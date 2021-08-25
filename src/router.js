import Home from "./pages/home.js";
import DetailPage from "./pages/id.js";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";

import { parseCurrentUrl } from "./core/router.js";

const router = async () => {
  const $content = null || document.getElementById("content");
  const pageList = {
    "/#": Home,
    "/#login": Login,
    "/#signup": Signup,
  };
  const { routes } = parseCurrentUrl();
  const parsedUrl = routes ? `/${routes}` : "/";
  const page = pageList[parsedUrl] || DetailPage;
  new page($content, {});
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
