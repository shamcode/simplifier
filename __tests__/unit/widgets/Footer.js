import Footer from '../../../src/widgets/Footer.sht';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( Footer );
    meta.widget.update();
    expect( meta.toJSON() ).toMatchSnapshot();
} );
