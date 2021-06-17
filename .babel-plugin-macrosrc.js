module.exports = {
    'ref': {
        'enabled': [ 'enabled', 'uniq' ].includes( process.env.MACRO_REF_REPLACE ),
        'uniq': 'uniq' === process.env.MACRO_REF_REPLACE
    }
};
