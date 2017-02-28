import { BASE_PATH } from "./config";

export const routeFor = (path) => {
  if (path === "/") return BASE_PATH;
  return `${BASE_PATH}/${path}`;
}
