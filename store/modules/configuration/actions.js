import apiHelper from '../../../static/scripts/api';
import * as types from './mutations-types';

async function fetchComponents({ commit }) {
    const response = await apiHelper.fetchComponents();

    commit(types.SET_COMPONENTS_DATA, response.components);
}

export default {
    fetchComponents
}