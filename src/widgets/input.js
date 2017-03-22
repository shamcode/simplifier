import { Widget } from 'sham-ui';

export default class Input extends Widget {
    get value() {
        return this.container.value;
    }
    set value( value ) {
        this.container.value = value;
    }
}