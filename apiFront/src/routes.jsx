import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import Detail from './pages/Detail'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import GerenciarProduto from './pages/Gerenciar'
function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />}> </Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/produtos' element={<Product />}></Route>
                    <Route path='/contato' element={<Contact />}></Route>
                    <Route path='/detail/:_id' element={<Detail/>}></Route>
                    <Route path='/gerenciar' element={<GerenciarProduto />}></Route>
                    <Route path='*' element={<Page404 />}></Route>
                </Routes>
            </Container>
            <Footer />

        </BrowserRouter>
    )
}

export default AppRoutes