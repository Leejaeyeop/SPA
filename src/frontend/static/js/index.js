import home from "./home.js";
import post from "./post.js";
import setting from "./setting.js";

const router = async () => {
    const routes = [
        { path: "/", view: home },
        { path: "/posts", view: post },
        { path: "/settings", view: setting },
    ];
    const pageMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: route.path === location.pathname,
        };
    });
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
    const page = match.route.view;
    document.querySelector("#root").innerHTML = await page.getHtml();
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            // 새로 고침 방지
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router();
        }
    });
    router();
});
