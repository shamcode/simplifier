import DisplayResult from '../../../src/widgets/DisplayResult.sht';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( DisplayResult );
    meta.widget.update( {
        result: 'a && b'
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );
