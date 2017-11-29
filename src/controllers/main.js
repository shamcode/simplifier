import { DI } from 'sham-ui';
import simplify from 'logic-expression-simplify';
import App from '../widgets/App.sht';

export default function() {
    const app = new App( 'body', 'app', {
        result: '',
        onSubmit( evt, { expression } ) {
            evt.preventDefault();

            let simplifiedExpression;
            try {
                simplifiedExpression = simplify( expression );
            } catch (e) {
                simplifiedExpression = '';
            }

            this.update( {
                result: simplifiedExpression
            } );

            return false;
        }
    } );

    DI.bind( 'widgets:app', app );
};
