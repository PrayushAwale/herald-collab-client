import Cookie from "js-cookie";

const setCookie = (cookiename, value) => {
  Cookie.set(cookiename, value, {
    expires: 1,
    secure: true,
    sameSite: "Strict",
    path: "/",
  });
};

export default setCookie;
