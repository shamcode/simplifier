import simplify from 'logic-expression-simplify';
import { ref, onsubmit } from 'sham-ui-directives';
import App from '../components/App.sht';

export default function() {
    new App( {
        ID: 'app',
        container: document.querySelector( 'body' ),
        directives: {
            ref,
            onsubmit
        },
        result: '',
        onSubmit( evt, { expression } ) {
            evt.preventDefault();

            let simplifiedExpression;
            try {
                simplifiedExpression = simplify( expression );
            } catch ( e ) {
                simplifiedExpression = '';
            }

            this.update( {
                result: simplifiedExpression
            } );

            return false;
        }
    } );
}
