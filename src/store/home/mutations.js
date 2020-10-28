import * as types from "./mutations.types";

export default {
  [types.SET_TEXT](state, payload) {
    state.text = payload;
  },
};
