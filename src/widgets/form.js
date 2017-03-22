import { Widget, options } from 'sham-ui';

export default class Form extends Widget {
    @options
    onSubmit() {}

    bindEvents() {
        document
            .querySelector( this.containerSelector )
            .addEventListener(
                'submit',
                this.options.onSubmit.bind( this )
            );
    }

    destroy() {
        this.container.removeEventListener( 'submit' );
    }
}