import Form from '../../../src/widgets/Form';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( Form );
    meta.widget.update();
    expect( meta.toJSON() ).toMatchSnapshot();
} );


it( 'onSubmit options', () => {
    expect.assertions( 3 );
    const fn = jest.fn();

    const meta = renderer( Form, {
        onSubmit: fn
    } );

    meta.widget.update();
    meta.widget.querySelector( 'input' ).value = 'a && b';
    meta.widget.querySelector( '[type="submit"]' ).click();

    expect( meta.toJSON() ).toMatchSnapshot();
    expect( fn.mock.calls.length ).toBe( 1 );
    expect( fn.mock.calls[0][1] ).toEqual( { expression: 'a && b' } );
} );


it( 'onSubmit props', () => {
    expect.assertions( 3 );
    const fn = jest.fn();

    const meta = renderer( Form );

    meta.widget.update( {
        onSubmit: fn
    } );
    meta.widget.querySelector( 'input' ).value = 'a && b';
    meta.widget.querySelector( '[type="submit"]' ).click();

    expect( meta.toJSON() ).toMatchSnapshot();
    expect( fn.mock.calls.length ).toBe( 1 );
    expect( fn.mock.calls[0][1] ).toEqual( { expression: 'a && b' } );
} );