import { DI, start } from 'sham-ui';
import mainInitializer from './initializers/main';

// Used only for dev, don't include in production build
if ( !PRODUCTION && module.hot ) {
    const store = DI.resolve( 'sham-ui:store' );
    const app = store.findById( 'app' );
    if ( undefined !== app ) {
        app.remove();
        store.forEach( component => {
            try {
                component.remove();
            } catch ( e ) {
                // eslint-disable-next-line no-empty
            }
        } );
    }
    module.hot.accept();
}

mainInitializer();
start();

