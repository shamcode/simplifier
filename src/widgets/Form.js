import { options } from 'sham-ui';
import FormTemplate from './Form.sht';

export default class Form extends FormTemplate {
    @options onSubmit() {}

    _onSubmit( evt ) {
        const data = new FormData( this.formNode );
        this.options.onSubmit( evt, {
            expression: data.get( 'expression' )
        } );
    }
}
