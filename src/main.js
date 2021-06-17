import { createDI, start } from 'sham-ui';
import './styles/main.scss';
import mainInitializer from './initializers/main';

const DI = createDI();

mainInitializer( DI );
start( DI );
