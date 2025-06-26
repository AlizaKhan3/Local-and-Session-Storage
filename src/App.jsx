import './App.css'
import AppLocalStorage from './components/LocalStorage/LocalStorage';
import ReactHookForm from './components/React Hook Form/ReactHookForm';
import AppSessionStorage from './components/SessionStorage/SessionStorage';
import HandleData from './components/React Hook Form/handleLocalStorage';

function App() {
  return (
    <>
      {/* <AppLocalStorage /> */}
      {/* <AppSessionStorage/> */}
      {/* <ReactHookForm/> */}
      <HandleData/>
    </>
  )
}

export default App;
