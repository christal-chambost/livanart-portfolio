import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';

import { useSpring, animated } from '@react-spring/web';

import Logo from './../../assets/images/livanart-logo.png';
import './homepage.scss';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function Homepage() {

    const headerContent = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
      })
    
    return (
        <section className="homepage">
            <animated.div style={headerContent} className="homepage-header">
                <div className="homepage-header-part1">
                    <div className="homepage-header-part1-content">
                        <div><img src={Logo} alt="logo livanart homepage" className="homepage-header-part1-content-logo" /></div>
                        <div className="homepage-header-part1-content-social">
                            <span>You can find me on:</span>
                            <ul>
                                <li><a href="https://www.instagram.com/livanart.workshop/" target="_blank">Instagram</a></li>
                                <li><a href="https://www.facebook.com/livanart/" target="_blank">Facebook</a></li>
                                <li><a href="https://twitter.com/Livianart" target="_blank">Twitter</a></li>
                                <li><a href="https://www.twitch.tv/livanart" target="_blank">Twitch</a></li>
                                <li><a href="https://www.tiktok.com/@livanart" target="_blank">Tiktok</a></li>
                                <li><a href="https://www.linkedin.com/in/alice-h%C3%A9rault-aa008b116/" target="_blank">Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="homepage-header-part2">
                    <h1>Livanart workshop</h1>
                    <div><ArrowForwardIosIcon sx={{ fontSize: "4em" }} className="homepage-header-part2-arrow" /></div>
                </div>
            </animated.div>
            <div className="homepage-intro">
                <div className="homepage-intro-content">
                    <h2>Lorem ipsum dolor sit amet consectetur</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus illo sint odio, rerum culpa ipsa, perspiciatis similique vero nostrum eligendi magnam dolores provident porro reiciendis nobis eveniet consectetur voluptatem sed!</p>
                </div>
                <div className="homepage-intro-background"></div>
            </div>
            <div className="homepage-menu">
                <div className="homepage-menu-about">
                    <div className="homepage-menu-link">About me</div>
                    <div className="homepage-menu-about-img"></div>
                </div>
                <div className="homepage-menu-workshop">
                <div className="homepage-menu-link">Workshop</div>
                    <div className="homepage-menu-workshop-img"></div>
                </div>
                <div className="homepage-menu-shop">
                <div className="homepage-menu-link">Shop</div>
                    <div className="homepage-menu-shop-img"></div>
                </div>
                <div className ="homepage-menu-commission">
                <div className="homepage-menu-link">Commission</div>
                    <div className="homepage-menu-commission-img"></div>
                </div>
                <div className ="homepage-menu-agenda">
                <div className="homepage-menu-link">Agenda/guesting</div>
                    <div className="homepage-menu-agenda-img"></div>
                </div>
                <div className ="homepage-menu-gallery">
                <div className="homepage-menu-link">gallery</div>
                    <div className="homepage-menu-gallery-img"></div>
                </div>
                <div className ="homepage-menu-media">
                <div className="homepage-menu-link">Media</div>
                    <div className="homepage-menu-media-img"></div>
                </div>
            </div>
            <div className="homepage-footer">
                <div className="homepage-footer-social">
                    <ul>
                        <li><a href="https://www.facebook.com/livanart/" target="_blank"><FacebookIcon /></a></li>
                        <li><a href="https://www.instagram.com/livanart.workshop/" target="_blank"><InstagramIcon /></a></li>
                        <li><a href="https://twitter.com/Livianart" target="_blank"><TwitterIcon /></a></li>
                        <li><a href="https://www.linkedin.com/in/alice-h%C3%A9rault-aa008b116/" target="_blank"><LinkedInIcon /></a></li>        
                    </ul>
                </div>
                <div className="homepage-footer-links">
                        <ul>
                            <li>Contact</li>
                            <li>Sitemap</li>
                            <li>Presse</li>
                        </ul>
                        <ul>
                            <li>Mentions légales</li>
                            <li>Conditions générales de vente</li>
                        </ul>
                        <div className="homepage-footer-links-searchbar">
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Homepage;