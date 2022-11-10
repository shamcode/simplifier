import Form from '../../../src/components/Form.sfc';
import { ref, onsubmit } from 'sham-ui-directives';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( Form, {}, {
        directives: {
            ref,
            onsubmit
        }
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

it( 'onSubmit options', () => {
    expect.assertions( 3 );
    const fn = jest.fn();

    const meta = renderer( Form, {
        onSubmit: fn
    }, {
        directives: {
            ref,
            onsubmit
        }
    } );

    meta.component.update();
    meta.ctx.container.querySelector( 'input' ).value = 'a && b';
    meta.ctx.container.querySelector( 'form' ).dispatchEvent( new Event( 'submit' ) );

    const json = meta.toJSON();
    delete json.Options.onSubmit;
    expect( json ).toMatchSnapshot();
    expect( fn.mock.calls ).toHaveLength( 1 );
    expect( fn.mock.calls[ 0 ][ 1 ] ).toEqual( { expression: 'a && b' } );
} );


it( 'onSubmit props', () => {
    expect.assertions( 3 );
    const fn = jest.fn();

    const meta = renderer( Form, {}, {
        directives: {
            ref,
            onsubmit
        }
    } );

    meta.component.update( {
        onSubmit: fn
    } );
    meta.ctx.container.querySelector( 'input' ).value = 'a && b';
    meta.ctx.container.querySelector( 'form' ).dispatchEvent( new Event( 'submit' ) );

    const json = meta.toJSON();
    delete json.Options.onSubmit;
    expect( json ).toMatchSnapshot();
    expect( fn.mock.calls ).toHaveLength( 1 );
    expect( fn.mock.calls[ 0 ][ 1 ] ).toEqual( { expression: 'a && b' } );
} );
