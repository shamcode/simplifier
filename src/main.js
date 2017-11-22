import { default as ShamUI, DI } from 'sham-ui';
import controller from './controllers/main';

DI.bind( 'widget-binder', controller );

if ( module.hot ) {
    const app = DI.resolve( 'widgets:app' );
    if ( app !== undefined ) {
        app.remove();
    }
    module.hot.accept();
}

const UI = new ShamUI();

UI.render.FORCE_ALL();

