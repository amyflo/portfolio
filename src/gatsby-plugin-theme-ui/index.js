// example theme file
const theme = {
    "space": [
        0,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512
    ],
    "fonts": {
        "body": "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
        "heading": "\"meursault-variable\", serif",
        "monospace": "Menlo, monospace"
    },
    "fontSizes": [
        16,
        20,
        24,
        32,
        48,
        64,
        96,
        108
    ],
    "fontWeights": {
        "body": 400,
        "heading": 700,
        "bold": 700
    },
    "lineHeights": {
        "body": 1.5,
        "heading": 1.125
    },
    "colors": {
        "dark": "#081313",
        "white": "#fefefa",
        "text": "#081313",
        "background": "#fff",
        "blue": "#2F52E0",
        "green": "#BCED09",
        "primary": "#2F52E0",
        "secondary": "#BCED09",
        "muted": "#f6f6f6",
        "orange": "#F9CB40",
        "purple": "#C45BAA",
        "lightblue": "#5DA9E9",
        "red": "#FF715B",
    },
    "styles": {
        "root": {
            "fontFamily": "body",
            "lineHeight": "body",
            "fontWeight": "body"
        },
        "h1": {
            "color": "text",
            "fontFamily": "heading",
            "lineHeight": "heading",
            "fontWeight": "heading",
            "fontSize": 4
        },
        "h2": {
            "color": "text",
            "fontFamily": "heading",
            "lineHeight": "heading",
            "fontWeight": "heading",
            "fontSize": 3
        },
        "h3": {
            "color": "text",
            "fontFamily": "heading",
            "lineHeight": "heading",
            "fontWeight": "heading",
            "fontSize": 2
        },
        "h4": {
            "color": "text",
            "fontFamily": "heading",
            "lineHeight": "heading",
            "fontWeight": "heading",
            "fontSize": 1
        },
        "h5": {
            "color": "text",
            "fontFamily": "heading",
            "lineHeight": "heading",
            "fontWeight": "heading",
            "fontSize": 1
        },
        "h6": {
            "color": "text",
            "fontFamily": "heading",
            "lineHeight": "heading",
            "fontWeight": "heading",
            "fontSize": 0
        },
        "p": {
            "color": "text",
            "fontFamily": "body",
            "fontWeight": "body",
            "lineHeight": "body",
            "fontSize": 0
        },
        "a": {
            "color": "primary"
        },
        "pre": {
            "fontFamily": "monospace",
            "overflowX": "auto",
            "code": {
                "color": "inherit"
            }
        },
        "code": {
            "fontFamily": "monospace",
            "fontSize": "inherit"
        },
        "table": {
            "width": "100%",
            "borderCollapse": "separate",
            "borderSpacing": 0
        },
        "th": {
            "textAlign": "left",
            "borderBottomStyle": "solid"
        },
        "td": {
            "textAlign": "left",
            "borderBottomStyle": "solid"
        },
        "img": {
            "maxWidth": "100%"
        },
        buttons: {
            primary: {
                color: 'white',
                bg: 'dark',
                '&:hover': {
                    bg: 'dark',
                }
            },
        },
        badges: {
            primary: {
                color: 'white',
                bg: 'blue',
            },
            outline: {
                color: 'blue',
                bg: 'transparent',
                boxShadow: 'inset 0 0 0 1px',
            },
        },
    }
}


export default theme