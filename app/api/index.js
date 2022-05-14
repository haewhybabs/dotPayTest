import { request } from "./request";
import * as URLS from "./urls";
export const API = {
    getBallotData: (onResponse, data) => {
      request(onResponse, data, "GET", URLS.GET_BALLOT_DATA);
    },
};