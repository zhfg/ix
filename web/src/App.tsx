import './App.css';
import { Admin, Resource } from 'react-admin';
import application from './pages/application';
import project from './pages/project';
import request from './pages/request'
import restProvider from 'ra-data-simple-rest'

const dataProvider = restProvider("http://127.0.0.1:5000");
function App() {
  return (
    <Admin dataProvider={dataProvider} >
      <Resource name="project" {...project} />
      <Resource name="application" {...application} />
      <Resource name="request" {...request} />
    </Admin>
  );
}

export default App;
