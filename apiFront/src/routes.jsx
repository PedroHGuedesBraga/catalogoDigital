import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Login from './pages/Login'
import Page404 from './pages/Page404'

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}> </Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/produtos' element={<Product/>}></Route>
                <Route path='/contato' element={<Contact/>}></Route>
                <Route path='*' element={<Page404/>}></Route>
            </Routes>
            
        </BrowserRouter>
    )
}

export default AppRoutes