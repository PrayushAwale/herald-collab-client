import getCookie from "./getCookie";

const useAuth = () => {
  const token = getCookie("token");
  return token;
};

export default useAuth;
