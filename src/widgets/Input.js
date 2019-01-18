import { options } from 'sham-ui';
import InputTemplate from './Input.sht';

export default class Input extends InputTemplate {
    @options placeholder = '';
    @options tabindex = 1;
}
