import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://nodestaffapi-env.eba-6xxpauhn.us-east-1.elasticbeanstalk.com",
});

export default apiClient;

//http://nodestaffapi-env.eba-6xxpauhn.us-east-1.elasticbeanstalk.com
