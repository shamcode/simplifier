import App from '../../../src/components/App.sfc';
import { ref, onsubmit } from 'sham-ui-directives';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( App, {
        result: 'a || b'
    }, {
        directives: {
            ref,
            onsubmit
        }
    } );

    meta.ctx.container.querySelector( 'input' ).value = 'a && b';
    meta.ctx.container.querySelector( 'form' ).dispatchEvent( new Event( 'submit' ) );

    const json = meta.toJSON();
    delete json.Options.onSubmit;
    expect( json ).toMatchSnapshot();
} );
