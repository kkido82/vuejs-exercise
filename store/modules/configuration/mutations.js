import * as types from "./mutations-types";

export default {
    [types.SET_COMPONENTS_DATA](state, components) {
        state.components = components;
    }
}
