import React from "react";
import { Box } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import {toast} from "react-toastify";


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }


    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense">
                <Box className='cursor'>
                    <Typography variant="h5" color="inherit">
                        BlogPessoal
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                HOME
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/post" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                POSTAGENS
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                TEMA
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                CADASTRAR TEMA
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )

}
export default Navbar;