const hexToRgba = require("hex-to-rgba");

const colors = {
    'red': '#FF0000',
    'green': '#008000',
    'blue': '#0000FF',
    'yellow': '#FFFF00',
    'purple': '#800080',
    'orange': '#FFA500',
    'cyan': '#00FFFF',
    'pink': '#FFC0CB',
    'black': '#000000',
    'white': '#FFFFFF',
    'brown': '#A52A2A',
    'gray': '#808080',
    'violet': '#EE82EE',
    'navy': '#000080',
    'gold': '#FFD700',
    'silver': '#C0C0C0',
    'maroon': '#800000',
    'olive': '#808000',
    'lime': '#00FF00',
    'teal': '#008080',
    'indigo': '#4B0082',
    'salmon': '#FA8072',
    'turquoise': '#40E0D0',
    'khaki': '#F0E68C',
    'coral': '#FF7F50',
    'sienna': '#A0522D',
};

exports.convertToRgba = (color) => hexToRgba(colors[color])

exports.convertToString = (rgba) => Object.entries(colors).find(([key,value]) => hexToRgba(value) === rgba)[0]



