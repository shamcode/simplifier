import Footer from '../../../src/components/Footer.sht';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( Footer, {} );
    expect( meta.toJSON() ).toMatchSnapshot();
} );
