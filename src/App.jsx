import { Link ,BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import AuthLayout from './layout/AuthLayout'
import Verbs from './pages/Verbs'
import Modals from './pages/Modals'

function App() {
  
  return (

      <BrowserRouter>
        <Routes>
           <Route path="/" element={<AuthLayout/>}>
               <Route index element= { <Verbs /> } />
               <Route path='/modals' element= { <Modals /> } />
           </Route>
        </Routes>
      </BrowserRouter>  
  
  )
}

export default App
