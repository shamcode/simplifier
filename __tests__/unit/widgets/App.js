import App from '../../../src/widgets/App.sht';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    expect.assertions( 3 );
    const fn = jest.fn();

    const meta = renderer( App, {
        result: 'a || b',
        onSubmit: fn
    } );

    meta.widget.container.querySelector( 'input' ).value = 'a && b';
    meta.widget.container.querySelector( '[type="submit"]' ).click();

    expect( meta.toJSON() ).toMatchSnapshot();
    expect( fn.mock.calls.length ).toBe( 1 );
    expect( fn.mock.calls[ 0 ][ 1 ] ).toEqual( { expression: 'a && b' } );
} );
