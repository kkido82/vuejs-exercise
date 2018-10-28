import _ from 'lodash';

export default {
    getTemplates: state => state.templates,
    getCurrentTemplate: state => state.currentTemplate,
    getLayoutItems: state => state.currentTemplate.layout,
}