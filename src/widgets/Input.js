import { options } from 'sham-ui';
import Input from './Input.sht';

export default class extends Input {
    @options
    get placeholder() {
        return '';
    }

    @options
    get tabindex() {
        return 1;
    }
}