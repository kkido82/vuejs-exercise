import apiHelper from '../../../static/scripts/api';
import * as types from './mutations-types';

async function fetchTemplates({ commit }) {
    const response = await apiHelper.fetchTemplates();
    // try{
    //     response = await get('apiUrl/getLayouts'); 
    // } catch(e) {
    //     throw new Error(e);
    // }
    
    commit(types.SET_TEMPLATES_DATA, response.templates);
}

async function getTemplateById({ commit }, id) {
    const template = apiHelper.templates.find(t => t.id === parseInt(id));

    commit(types.SET_CURRENT_TEMPLATE, template);

    return template;
}

const setCurrentTemplate = ({ commit }, template) => {
    commit(types.SET_CURRENT_TEMPLATE, template);
}

const setLayoutItem = ({ commit }, item) => {
    commit(types.SET_LAYOUT_ITEM, item);
}


export default {
    fetchTemplates,
    setCurrentTemplate,
    setLayoutItem,
    getTemplateById
}