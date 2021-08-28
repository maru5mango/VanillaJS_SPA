import Home from "./pages/home.js";
import DetailPage from "./pages/id.js";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import About from "./pages/about.js";
import MyInfo from "./pages/mypage/myinfo.js";
import MyLike from "./pages/mypage/mylike.js";

import { parseCurrentUrl } from "./core/router.js";

const router = async () => {
  const $content = null || document.getElementById("content");
  const pageList = {
    "/": Home,
    "/login": Login,
    "/signup": Signup,
    "/about": About,
    "/mypage/myInfo": MyInfo,
    "/mypage/like": MyLike,
  };
  const { resource, routes, id } = parseCurrentUrl();
  const parsedUrl = resource
    ? routes
      ? id
        ? `/${resource}/${routes}/${id}`
        : `/${resource}/${routes}`
      : `/${resource}`
    : "/";
  // console.log(parsedUrl);
  const page = pageList[parsedUrl] || DetailPage;
  new page($content, {});
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
