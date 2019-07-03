import App from '../../../src/components/App.sht';
import { ref, onsubmit } from 'sham-ui-directives';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    expect.assertions( 3 );
    const fn = jest.fn();

    const meta = renderer( App, {
        directives: {
            ref,
            onsubmit
        },
        result: 'a || b',
        onSubmit: fn
    } );

    meta.component.container.querySelector( 'input' ).value = 'a && b';
    meta.component.container.querySelector( 'form' ).dispatchEvent( new Event( 'submit' ) );

    const json = meta.toJSON();
    delete json.Options.onSubmit;
    expect( json ).toMatchSnapshot();
    expect( fn.mock.calls ).toHaveLength( 1 );
    expect( fn.mock.calls[ 0 ][ 1 ] ).toEqual( { expression: 'a && b' } );
} );
