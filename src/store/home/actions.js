import * as types from "./mutations.types";
import { http, urls } from "../../services";
import FormData from "form-data";

export const actionSetText = async ({ commit }, payload) => {
  commit(types.SET_TEXT, payload);
};

export const actionSendImage = async ({ dispatch }, payload) => {
  let data = new FormData();
  data.append("name", "image");
  data.append("file", payload);
  http
    .POST(urls.upload, data)
    .then((response) => {
      console.log(response.data);
      dispatch("actionSetText", response.data);
    })
    .catch((error) => console.error(error));
};
