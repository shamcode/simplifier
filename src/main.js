import ShamUI, { DI } from 'sham-ui';
import initializer from './initializers/main';

DI.bind( 'component-binder', initializer );

// Used only for dev, don't include in production build
if ( !PRODUCTION && module.hot ) {
    const UI = DI.resolve( 'sham-ui' );
    if ( undefined !== UI ) {
        UI.render.unregister( 'app' );
        DI.resolve( 'sham-ui:store' ).forEach( component => {
            try {
                UI.render.unregister( component.ID );
            } catch ( e ) {
                // eslint-disable-next-line no-empty
            }
        } );
    }
    module.hot.accept();
}

new ShamUI( true );

