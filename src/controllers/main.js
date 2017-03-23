import simplify from 'logic-expression-simplify';
import Input from '../widgets/input';
import Form from '../widgets/form';
import Label from 'sham-ui-label-widget';

export default function() {

    let simplifiedExpression = '';

    const input = new Input( '#input-text', 'input' );

    new Form( 'main > form', 'form', {
        onSubmit( evt ) {
            evt.preventDefault();
            const expression = input.value;
            try {
                simplifiedExpression = simplify( expression );
            } catch (e) {
                simplifiedExpression = '';
            }
            this.UI.render.ALL();
            return false;
        }
    } );

    new Label( '#result', 'result', {
        text() {
            return simplifiedExpression;
        }
    } )
};
