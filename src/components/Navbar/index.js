import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../img/logo.png'
import './Nav.css'


const StyledNav = styled.nav`
    .Nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: .5rem 5rem;
        @media (max-width: 1149px) {
            margin: .3rem 4rem;
        }
        @media (max-width: 900px) {
            margin: .2rem 3rem;
            margin-top: .5rem;
        }
        @media (max-width: 767px) {
            margin: 0 2rem;
            margin-top: .3rem;
        }        
        img {
            height: 10vh;
            filter: brightness(500%);
            @media (max-width: 767px) {
                height: 9vh;
            }
            @media (max-width: 278px) {
                height: 8vh;
            }
            @media (max-width: 260px) {
                height: 7vh;
            }
        }
         ul {
             height: 12vh;
             display: flex;
             flex-direction: row;
             justify-content: space-between;
             width: 15%;
             align-items: center;
             @media (max-width: 1200px) {
                 width: 18%;
             }
             @media (max-width: 1044px) {
                 width: 20%;
             }
             @media (max-width: 900px) {
                 width: 25%;
             }
             @media (max-width: 690px) {
                 width: 30%;
             }
             @media (max-width: 605px) {
                 width: 35%;
             }
             @media (max-width: 457px) {
                 width: 40%;
             }
             @media (max-width: 400px) {
                 width: 45%;
             }
             @media (max-width: 319px) {
                 width: 50%;
             }
             @media (max-width: 278px) {
                 height: 10vh;
             }
             @media (max-width: 260px) {
                 height: 8vh;
             }
             li {
                 a {
                    text-decoration: none;
                    font-family: 'Rosario', sans-serif;
                    font-weight: bold;
                    text-transform: uppercase;
                    cursor: pointer;
                    color: #fff;
                    transition: 0.2s ease-in;
                    @media (max-width: 767px) {
                        font-size: .9rem;
                    }
                    @media (max-width: 485px) {
                        font-size: .8rem;
                    }
                    @media (max-width: 260px) {
                        font-size: .6rem;
                    }
                    :hover {
                        border-bottom: 1px solid #fff;
                    }
                 }
             }
         }
     }
`

export class Nav extends Component {

    render() {
        return (
            <>
            <StyledNav>
                <div className="Nav">
                    <img src={Logo} alt="Logo Img" />
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/signup">Sign up</NavLink></li>
                    </ul>
                </div>
            </StyledNav>
            </>
        )
    }
}

export default Nav
