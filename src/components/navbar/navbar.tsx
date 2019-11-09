import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import styles from './styles.module.scss';

interface State {
    profileMenuOpen: boolean;
    anchorEle: HTMLElement | null;
    open: boolean;
}
class Navbar extends Component<{}, State> {
    
    constructor (props: any) {
        super(props);
        this.state = {
            profileMenuOpen: false,
            anchorEle: null,
            open: false,
        }
    }
    
    handleClose = () => {
        this.setState({
            anchorEle: null,
            open: false,
        });
    }
    handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            anchorEle: event.currentTarget,
            open: true,
        });
    }
    
    // classes = useStyles();
    render() {
        return (
            <div >
                <AppBar className={styles.barContainer}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={styles.menuItem}>
                            Movies
                        </Typography>
                        <Typography variant="h6" className={styles.menuItem}>
                            Music
                        </Typography>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                            className={styles.menuButton}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={this.state.anchorEle}
                            anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'center',
                                horizontal: 'right',
                            }}
                            open={this.state.open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;