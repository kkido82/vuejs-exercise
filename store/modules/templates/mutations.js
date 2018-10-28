import * as types from "./mutations-types";

export default {
    [types.SET_TEMPLATES_DATA](state, templates) {
        state.templates = templates;
    },
    [types.SET_CURRENT_TEMPLATE](state, template) {
        state.currentTemplate = { ...template };
    },
    [types.SET_LAYOUT_ITEM](state, item){
        state.currentTemplate.layout[item.i] = { ...item };
    }
}
