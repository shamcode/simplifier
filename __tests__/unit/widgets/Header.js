import Header from '../../../src/widgets/Header.sht';
import renderer from 'sham-ui-test-helpers';

it( 'renders correctly', () => {
    const meta = renderer( Header );
    meta.widget.update();
    expect( meta.toJSON() ).toMatchSnapshot();
} );
