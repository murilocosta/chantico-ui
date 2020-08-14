import Axios from "axios";

const http = Axios.create({
  baseURL: 'http://localhost:3001',
  transformResponse(result) {
    const json = JSON.parse(result);
    if (!json) {
      return null;
    }

    if (json.type === 'event') {
      return json.ctx.event;
    }

    if (json.type === 'message') {
      return json.ctx.message;
    }

    return json.ctx;
  }
});

http.interceptors.response.use(function (response) {
  return response.data;
});

export default http;
