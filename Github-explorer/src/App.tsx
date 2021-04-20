import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Global from './styles/global'

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <Global></Global>
  </>
);

export default App;
