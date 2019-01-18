import Input from '../../../src/widgets/Input';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( Input );

    expect( meta.widget.container.innerHTML ).toEqual( '<input placeholder="" tabindex="1">' );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

it( 'with props', () => {
    const meta = renderer( Input, {
        id: 'expression-input',
        placeholder: 'a && b',
        tabindex: 2,
        name: 'expression'
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );
