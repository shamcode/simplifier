import { Widget } from 'sham-ui';

export default class Input extends Widget {
    render() {
        this.container = document.querySelector( this.containerSelector );
    }

    get value() {
        return this.container.value;
    }
    set value( value ) {
        this.container.value = value;
    }
}