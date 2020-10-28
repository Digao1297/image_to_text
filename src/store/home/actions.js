import * as types from "./mutations.types";
import { http } from "../../services";
import FormData from "form-data";

export const actionSetText = async ({ commit }, payload) => {
  commit(types.SET_TEXT, payload);
};

export const actionSendImage = async ({ dispatch }, payload) => {
  let data = new FormData();
  data.append("name", "image");
  data.append("file", payload);
  http
    .POST("", data)
    .then((response) => {
      console.log(response.data);
      dispatch("actionSetText", response.data);
    })
    .catch((error) => console.error(error));
};
