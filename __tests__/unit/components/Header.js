import Header from '../../../src/components/Header.sht';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( Header, {} );
    expect( meta.toJSON() ).toMatchSnapshot();
} );
