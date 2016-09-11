export const MOCK_HTTP = false;
export const DEFA_TOOLS = [
    {name: "Tingle", supportedAttr: {color: ['red', 'green', 'yellow']}},
    {name: "Circle", supportedAttr: {color: ['red', 'green', 'yellow']}},
    {name: "TextBox", supportedAttr: {font: ['serif', 'times'], size: [10, 20, 30]}},
];


var x =
    [{ "title": "New Sketch", "author":"user001",
    "items": [
        { "name": "Tingle", "attrs": {color: "red"}},
        { "name": "Circle", "attrs": {color: "red"}},
        { "name": "TextBox", "attrs": {font: "serif"}},
        { "name": "TextBox", "attrs": {font: "serif", size: 20}}
        ] }];

export const APP_CONFIG = {
    title:"Flight Search Engine",
    datePlaceHolder:'Please Select Date',
    maxPassengers:10
};