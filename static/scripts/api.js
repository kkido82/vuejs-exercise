var templates = [
    {
        id: 0,
        name: 'first template',
        rowNum: 8,
        verticalMargin: 5,
        layout: [
            { "x": 0, "y": 0, "w": 12, "h": 2, "i": "0" },
            { "x": 0, "y": 2, "w": 6, "h": 4, "i": "1" },
            { "x": 6, "y": 2, "w": 6, "h": 4, "i": "2" },
            { "x": 0, "y": 6, "w": 12, "h": 2, "i": "3" }
        ]
    },
    {
        id: 1,
        name: 'second template',
        rowNum: 12,
        verticalMargin: 5,
        layout: [
            { "x": 0, "y": 0, "w": 12, "h": 2, "i": "0" },
            { "x": 0, "y": 2, "w": 6, "h": 4, "i": "1" },
            { "x": 6, "y": 2, "w": 6, "h": 4, "i": "2" },
            { "x": 0, "y": 6, "w": 12, "h": 4, "i": "3" },
            { "x": 0, "y": 10, "w": 12, "h": 2, "i": "4" },
        ]
    },
    {
        id: 2,
        name: 'third template',
        rowNum: 12,
        verticalMargin: 10,
        layout: [
            { "x": 0, "y": 0, "w": 12, "h": 2, "i": "0" },
            { "x": 0, "y": 2, "w": 6, "h": 4, "i": "1" },
            { "x": 6, "y": 2, "w": 6, "h": 4, "i": "2" },
            { "x": 0, "y": 6, "w": 12, "h": 4, "i": "3" },
            { "x": 0, "y": 10, "w": 12, "h": 2, "i": "4" },
        ]
    },
    {
        id: 3,
        name: 'fourth template',
        rowNum: 8,
        verticalMargin: 10,
        layout: [
            { "x": 0, "y": 0, "w": 12, "h": 2, "i": "0" },
            { "x": 0, "y": 2, "w": 6, "h": 4, "i": "1" },
            { "x": 6, "y": 2, "w": 6, "h": 4, "i": "2" },
            { "x": 0, "y": 6, "w": 12, "h": 2, "i": "3" }
        ]
    }
];

var components = [
    {
        id: 0, 
        name: 'Red'
    },
    {
        id: 1, 
        name: 'Green'        
    },
    {
        id: 2, 
        name: 'Blue'
    }
];

const fetchTemplates = () => {
    return Promise.resolve({
        status: 'OK',
        success: true,
        templates: templates
    });
}

const fetchComponents = () => {
    return Promise.resolve({
        status: 'OK',
        success: true,
        components: components
    });
}

export default {
    fetchTemplates,
    fetchComponents,
    templates,
    components
}