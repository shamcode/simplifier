module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:jest/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": [ "jest" ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-negated-in-lhs": "error",
        "no-cond-assign": [
            "error",
            "except-parens"
        ],
        "curly": [
            "error",
            "all"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "computed-property-spacing": [
            "error",
            "always"
        ],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
        "no-unused-expressions": "error",
        "no-sequences": "error",
        "no-nested-ternary": "error",
        "no-unreachable": "error",
        "wrap-iife": [
            "error",
            "inside"
        ],
        "no-caller": "error",
        "no-undef": "error",
        "no-unused-vars": "error",
        "operator-linebreak": [
            "error",
            "after"
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "camelcase": [
            "error",
            {
                "properties": "never"
            }
        ],
        "dot-notation": [
            "error",
            {
                "allowPattern": "^[a-z]+(_[a-z]+)+$"
            }
        ],
        "max-len": [
            "error",
            {
                "code": 100,
                "ignoreComments": true,
                "ignoreTemplateLiterals": true
            }
        ],
        "no-mixed-spaces-and-tabs": "error",
        "no-trailing-spaces": "error",
        "no-multi-str": "error",
        "comma-dangle": [
            "error",
            "never"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-in-parens": [
            "error",
            "always"
        ],
        "keyword-spacing": [
            2
        ],
        "semi-spacing": [
            "error",
            {
                // Because of the `for ( ; ...)` requirement
                // "before": true,
                "after": true
            }
        ],
        "space-infix-ops": "error",
        "eol-last": "error",
        "lines-around-comment": [
            "error",
            {
                "beforeLineComment": true,
                "ignorePattern": "type"
            }
        ],
        "no-with": "error",
        "brace-style": "error",
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "no-loop-func": "error",
        "no-spaced-func": "error",
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true,
                "mode": "minimum"
            }
        ],
        "space-unary-ops": [
            "error",
            {
                "words": false,
                "nonwords": false
            }
        ],
        "no-multiple-empty-lines": 2,
    }
};