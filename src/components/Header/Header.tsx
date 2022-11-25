import React, { useRef } from 'react';
import {
    Link,
    useLocation,
} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import './header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

const drawerWidth = 240;

function Header() {

    const location = useLocation();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const parallax = useRef<IParallax>(null);

    const scroll = (to: number) => {
        if (parallax.current) {
            parallax.current.scrollTo(to)
        }
    }

    // menu on mobile
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Link to="/">Livanart Workshop</Link>
            </Typography>
            <Divider />
            <List>
                <ListItem key="Shop" disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/shop"
                        selected={location.pathname === "/shop"}
                        sx={{ textAlign: 'center' }}
                        disabled>
                        <ListItemText primary="Shop" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="About" disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/about"
                        onClick={() => scroll(1)}
                        selected={location.pathname === "/about"}
                        sx={{ textAlign: 'center' }}>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="Workshop" disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/workshop"
                        selected={location.pathname === "/workshop"}
                        sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Workshop" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="Contact" disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/contact"
                        selected={location.pathname === "/contact"}
                        sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const [value, setValue] = React.useState<string>("");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    // <div className="navbar-blur"></div>
    return (
        <header className="navbar">

            <Box sx={{ display: 'flex' }}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <Button component={Link} to="/">Livanart Workshop</Button>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Tabs
                                value={location.pathname === "/" ? "" : value}
                                onChange={handleChange}
                                textColor="primary"
                                indicatorColor="primary"
                                aria-label="Tabs where each tab needs to be selected manually"
                                style={{ position: "relative" }}
                            >
                                <Tab className="comingsoon" value="shop" label="Shop" component={Link} to="/shop" disabled />
                                <Tab value="about" label="About me" component={Link} to="/about" />
                                <Tab value="workshop" label="Workshop" component={Link} to="/workshop" />
                                <Tab value="contact" label="Contact" component={Link} to="/contact" />
                                <IconButton aria-label="cart shop" size="large" component={Link} to="/">
                                    <ShoppingCartIcon />
                                </IconButton>
                            </Tabs>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box component="main" sx={{ p: 1 }}>
                    <Toolbar />
                </Box>
            </Box>
        </header>
    )
};

export default Header;