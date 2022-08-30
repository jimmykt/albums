import axios from "axios";

export default axios.create({
  baseURL: `https://api.pexels.com`,
  headers: {
    Authorization: "563492ad6f917000010000011df1555975dd42f5b395c05503c3df67",
  },
});
