import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import './App.css';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTemas';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import  {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import ListaTemas from './components/temas/listatema/ListaTemas';
import ListaPostagens from './components/postagens/listapostagem/ListaPostagens';


function App() {
    return (
        <Provider store={store}>
                  <ToastContainer />

        <Router>
            <Navbar />
            <div style={{ minHeight: '100vh' }}>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/home" element={<Home />} />

                    <Route path="/cadastroUsuario" element={<CadastroUsuario />} />

                    <Route path="/temas" element={<ListaTemas/>} />

                    <Route path="/posts" element={<ListaPostagens />} />
                    
                    <Route path="/formularioPostagem" element={<CadastroPost />} />

                    <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

                    <Route path="/formularioTema" element={<CadastroTema />} />

                    <Route path="/formularioTema/:id" element={<CadastroTema />} />

                    <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

                    <Route path="/deletarTema/:id" element={<DeletarTema />} />


                </Routes>
            </div>
            <Footer />
        </Router>
        
        </Provider>

    );

}

export default App;
