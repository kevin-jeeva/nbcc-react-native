import client from "./client";

const endpoint = "/progress/resource";

const GetProgressValue = (staff_id) => client.get(endpoint + "/" + staff_id);

const GetSuggestion = (staff_id) =>
  client.get(endpoint + "/" + "suggest" + "/" + staff_id);

const GetMostViewed = (staff_id) =>
  client.get("/progress/most_viewed/" + staff_id);

export default {
  GetProgressValue,
  GetSuggestion,
  GetMostViewed,
};
