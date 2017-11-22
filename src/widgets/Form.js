import { options } from 'sham-ui';
import Form from './Form.sht';

export default class extends Form {
    @options
    onSubmit() {}

    get formNode() {
        return this.querySelector( 'form' );
    }

    get inputNode() {
        return this.querySelector( 'input' );
    }

    bindEvents() {
        this.formNode.addEventListener(
            'submit',
            this._onSubmit.bind( this )
        );
    }

    destroy() {
        this.formNode.removeEventListener( 'submit' );
    }

    _onSubmit( evt ) {
        this.__data__.onSubmit( evt, {
            expression: this.inputNode.value
        } );
    }
}