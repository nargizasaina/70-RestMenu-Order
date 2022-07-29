import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import logo from '../../assets/logo.webp';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Avatar alt="logo" src={logo} style={{margin: '0 25px'}}/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome to <b>Fresh Seafood Restaurant!</b>
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;