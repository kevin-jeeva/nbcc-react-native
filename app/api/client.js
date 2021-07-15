import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://nbcc-staff-app.herokuapp.com",
});

export default apiClient;

//http://nodestaffapi-env.eba-6xxpauhn.us-east-1.elasticbeanstalk.com
