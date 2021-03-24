import client from "./client";

const endpoint = "/progress/resource";

const GetProgressValue = (staff_id) => client.get(endpoint + "/" + staff_id);

const GetSuggestion = (staff_id) =>
  client.get(endpoint + "/" + "suggest" + "/" + staff_id);

const GetMostViewed = (staff_id) =>
  client.get("/progress/most_viewed/" + staff_id);

const GetResolution = (staff_id) =>
  client.get("/progress" + "/resolution/" + staff_id);

const ReadResolution = (resId, staff_id) =>
  client.post("/progress" + "/resolution/user/" + staff_id + "/res/" + resId);

export default {
  GetProgressValue,
  GetSuggestion,
  GetMostViewed,
  GetResolution,
  ReadResolution,
};
