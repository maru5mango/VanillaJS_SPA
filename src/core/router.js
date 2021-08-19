export const parseCurrentUrl = () => {
  const url = location.href.toLowerCase().split("/");
  const params = url.slice(2);

  const request = {
    resource: params[0] || null,
    routes: params[1] || null,
    id: params[2] || null,
  };
  return request;
};
