import React from 'react'
import styled from 'styled-components'
import headerImg from '../../img/chermiti-mohamed-NwN-vtN0cd0-unsplash.jpg'
import Footer from '../Footer'
import Nav from '../Navbar'

const SignUpElelment = styled.div`
    height: 100vh;
    background-image:linear-gradient(rgb(13, 50, 77, 0.8) 100%, transparent 100%), url(${headerImg});
    background-position: center;
    background-size: cover;
    position: relative;
    margin-bottom: -5rem;
    .setUp {
        width: 40%;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media (max-width: 1026px) {
            width: 50%;
        }
        @media (max-width: 880px) {
            width: 60%;
        }
        @media (max-width: 700px) {
            width: 70%;
        }
        @media (max-width: 686px) {
            width: 80%;
        }
        @media (max-width: 442px) {
            width: 85%;
        }
        h2 {
            color: #fff;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 3px;
            word-spacing: 5px;
            font-size: 2rem;
            @media (max-width: 629px) {
                letter-spacing: 1px;
            }
            @media (max-width: 420px) {
                font-size: 1.8rem;
            }
            @media (max-width: 395px) {
                font-size: 1.5rem;
            }
            ::after {
                content: '';
                display: block;
                background-color: #fff;
                height: 2px;
                width: 20%;
                margin: 1.5rem auto 2rem auto;
            }
        }
        form {
            display: flex;
            flex-direction: column;
            width: 100%;
            input[type=text] {
                width: 100%;
                font-family: 'Rosario', sans-serif;
                padding: 12px 20px 12px 12px;
                margin: 10px 0;
                border: 1px solid #cccccc9a;
                border-radius: 5px;
                font-weight: 400;
                color: #fff;
                background-color: transparent;
            }
            label {
                color: #fff;
                font-family: 'Rosario', sans-serif;
            }
            input::placeholder {
                color: #fff;
                font-family: 'Rosario', sans-serif;
            }
            textarea {
                height: 130px;
                background-color: transparent;
                border: 1px solid #cccccc9a;
                font-family: 'Rosario', sans-serif;
                width: 100%;
                padding: 12px 20px 12px 12px;
                margin: 10px 0;
                border-radius: 5px;
                color: #fff;
                margin-bottom: 1rem;
            }
            input[type=submit] {
                width: 30%;
                background-color: #fff;
                border: none;
                border-radius: 2px;
                color: #41354e;
                padding: .8rem 0;
                margin: 0 auto;
                transition: 0.2s ease-in;
                @media (max-width: 440px) {
                    width: 40%;
                }
                @media (max-width: 440px) {
                    padding: .7rem 0;
                }
                @media (max-width: 300px) {
                    width: 50%;
                    padding: .6rem 0;
                }
                :hover {
                    background-color: #264f66;
                    color: #fff;
                    scale: 1.05;
                }
            }
        }
    }
`

function SignUp() {
    return (
        <>
            <SignUpElelment>
                <Nav />
                <div className="setUp">
                    <h2>Sign in</h2>
                    <div>
                        <form action="/action_page.php">
                            <label>First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            <label>Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            <label>Message</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </SignUpElelment>
            <Footer />
        </>
    )
}

export default SignUp
