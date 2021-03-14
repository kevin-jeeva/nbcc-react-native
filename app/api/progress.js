import client from './client';

const endpoint = "/progress/resource";

const GetProgressValue = (staff_id) => client.get(endpoint + "/" + staff_id);

export default {
    GetProgressValue,
}