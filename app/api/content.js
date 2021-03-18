import client from "./client";

const endpoint = "/content";

const content = (resource) => {  
  return client.get(endpoint + "/" + resource);
};

const getContent = (id) => client.get(endpoint + "/id" + "/" + id);

export default {
  content,
  getContent,
};
