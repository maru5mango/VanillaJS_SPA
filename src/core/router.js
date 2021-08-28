export const parseCurrentUrl = () => {
  const path = location.hash.slice(1).toLowerCase() || "/";
  const params = path.split("/");

  const request = {
    resource: params[0] || null,
    routes: params[1] || null,
    id: params[2] || null,
  };
  return request;
};
