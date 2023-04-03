export const storage = {
  getToken: () => JSON.parse(window.localStorage.getItem("token") || `null`),
  setToken: () => JSON.stringify(window.localStorage.setItem("token")),
  clearToken: () => window.localStorage.removeItem("token"),
};
