import Input from '../widgets/input';
import Form from '../widgets/form';
import Label from 'sham-ui-label-widget';

export default function() {

    let simplifiedExpresion = '';

    const input = new Input( '#input-text', 'input' );

    function simplify( expression ) {
        var result = '', // Result for calculation expression
            value = [ false, true ],
            expressionInLowerCase = expression.toLowerCase(),
            localResult;

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
                localResult = eval(expressionInLowerCase.replace(/a(?!lse)/g, value[i]).replace(/b/g, value[j]));
                result += !!localResult ? '1' : '0';
            }
        }

        return {
            '0000': 'false',
            '0001': 'a && b',
            '0010': 'a && !b',
            '0011': 'a',
            '0100': '!a && b',
            '0101': 'b',
            '0110': 'a != b',
            '0111': 'a || b',
            '1000': '!(a && b)',
            '1001': 'a == b',
            '1010': '!b',
            '1011': 'a || !b',
            '1100': '!a',
            '1101': '!a || b',
            '1110': '!(a && b)',
            '1111': 'true'
        }[result];
    };

    new Form( 'main > form', 'form', {
        onSubmit( evt ) {
            evt.preventDefault();
            const expression = input.value;
            try {
                simplifiedExpresion = simplify( expression );
            } catch (e) {
                simplifiedExpresion = '';
            }
            this.UI.render.ALL();
            return false;
        }
    } );

    new Label( '#result', 'result', {
        text() {
            return simplifiedExpresion;
        }
    } )
};
