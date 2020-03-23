const crypto = require( 'crypto' );

Object.defineProperty( global.self, 'crypto', {
    value: {
        getRandomValues: arr => crypto.randomBytes( arr.length )
    }
} );

Object.defineProperty( window, 'PRODUCTION', {
    value: true,
    configurable: true
} );
