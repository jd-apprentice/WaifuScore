const enlace = "https://api.waifu.pics/sfw/waifu";

const config = {
  method: "GET",
  mode: "cors",
};

const FetchAPI = async () => {
  const response = await fetch(enlace, config);
  const json = await response.json();
  return json.url;
};

export default FetchAPI;
