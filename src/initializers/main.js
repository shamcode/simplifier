import { createRootContext } from 'sham-ui';
import { ref, onsubmit } from 'sham-ui-directives';
import App from '../components/App.sfc';

export default function( DI ) {
    new App(
        createRootContext( {
            DI,
            ID: 'app',
            container: document.querySelector( 'body' ),
            directives: {
                ref,
                onsubmit
            }
        } )
    );
}
