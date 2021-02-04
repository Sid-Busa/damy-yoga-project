import React from 'react'
import styled from 'styled-components'
import Logo from '../../img/logo.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaGlobe } from 'react-icons/fa'

const Footerset = styled.div`
    .element {
        margin-top: 5rem;
        background-color: #264f66;
        height: 65vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            height: 10vh;
            margin-bottom: 2rem;
            filter: brightness(500%);
            @media (max-width: 400px) {
                height: 8vh;
            }
            @media (max-width: 285px) {
                height: 7vh;
            }
        }
        h2 {
            color: #fff;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 3px;
            word-spacing: 5px;
            font-size: 2rem;
            margin-bottom: .5rem;
            @media (max-width: 420px) {
                letter-spacing: 1px;
                font-size: 1.8rem;
            }
            @media (max-width: 327px) {
                font-size: 1.5rem;
            }
            @media (max-width: 242px) {
                font-size: 1.2rem;
            }
        }
        ul {
            display: flex;

            div{
                display: flex;
                @media (max-width: 450px) {
                    flex-direction: column;
                    margin: 1rem 2rem;
                    text-align: center;
                }
                @media (max-width: 264px) {
                    margin: .8rem 1.5rem;
                }
                li {
                    font-family: 'Rosario', sans-serif;
                    color: #fff;
                    margin: 1rem;
                    list-style: none;
                    cursor: pointer;
                    margin-bottom: 1.5rem;
                    @media (max-width: 549px) {
                        margin: .5rem;
                    }
                    @media (max-width: 291px) {
                        font-size: .8rem;
                    }
                    @media (max-width: 232px) {
                        font-size: .7rem;
                    }
                }
            }
        }
        .icons {
            display: flex;
            div {
                color: #fff;
                border: 1px solid #fff;
                border-radius: 50%;
                padding: .5rem .6rem;
                font-size: 1rem;
                margin: .5rem;
                transition: 0.2s ease-in-out;
                @media (max-width: 274px) {
                    font-size: .7rem;
                }
                :hover {
                    scale: 1.1;
                    background-color: #fff;
                    color: #41354e;
                }
            }
        }
    }
`

function Footer() {
    return (
        <>
        <div>
            <Footerset>
                <div className="element">
                    <img src={Logo} alt="Logo" />
                    <h2>GoodLife Yoga</h2>
                    <ul>
                        <div>
                            <li>Home</li>
                            <li>Methods</li>
                            <li>About</li>
                        </div>
                        <div>
                            <li>Gallery</li>
                            <li>Claases</li>
                            <li>Sign In</li>
                        </div>
                    </ul>
                    <div className="icons">
                        <div><FaTwitter /></div>
                        <div><FaFacebookF /></div>
                        <div><FaInstagram /></div>
                        <div><FaGlobe /></div>
                    </div>
                </div>
            </Footerset>
        </div>
       </> 
    )
}

export default Footer
