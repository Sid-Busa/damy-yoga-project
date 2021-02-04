import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Classset = styled.div`
    h2 {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 3px;
        word-spacing: 5px;
        font-size: 2rem;
        margin: 6rem 0 3rem 0;
        @media (max-width: 933px) {
            font-size: 1.8rem;
            letter-spacing: 3px;
        }
        @media (max-width: 717px) {
            letter-spacing: 2px;
        }
        @media (max-width: 576px) {
            font-size: 1.7rem;
            letter-spacing: 1px;
        }
        @media (max-width: 530px) {
            font-size: 1.6rem;
        }
        @media (max-width: 485px) {
            width: 60%;
            margin: 0 auto;
            margin-top: 4rem;
        }
        @media (max-width: 423px) {
            width: 70%;
        }
        @media (max-width: 361px) {
            width: 80%;
        }
        @media (max-width: 317px) {
            width: 90%;
        }
        @media (max-width: 282px) {
            width: 95%;
        }
        ::after {
            content: '';
            display: block;
            background-color: #41354e;
            height: 3px;
            width: 15%;
            margin: 2.5rem auto 2rem auto;
            @media (max-width: 485px) {
                width: 30%;
            }
        }
    }
    .complete {
        display: flex;
        justify-content: center;
        @media (max-width: 1049px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .class {
            height: 40vh;
            width: 25%;
            margin: 1.2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            @media (max-width: 1049px) {
                width: 65%;
                height: 50vh;
            }
            @media (max-width: 500px) {
                width: 75%;
                height: 45vh;
            }
            @media (max-width: 350px) {
                height: 40vh;
            }
            > * {
                margin: .1rem;
            }
            :nth-child(1) {
                background-color: #f26d7d;
            }
            :nth-child(2) {
                background-color: #9bd9da;
            }  
            :nth-child(3) {
                background-color: #e09866;
            }
            h3 {
                font-size: 1.3rem;
                margin-bottom: .5rem;
                @media (max-width: 310px) {
                    font-size: 1.1rem;
                }
            }
            h5 {
                font-family: 'Rosario', sans-serif;
                font-size: 1rem;
                @media (max-width: 298px) {
                    font-size: .8rem;
                }
            }
            button {
                border: none;
                background-color: #264f66;
                color: #fff;
                width: 30%;
                padding: .5rem;
                margin-top: 1rem;
                border-radius: 2%;
                transition: 0.2s ease;
                @media (max-width: 1227px) {
                    width: 40%;
                }
                @media (max-width: 1049px) {
                    width: 25%;
                }
                @media (max-width: 578px) {
                    width: 30%;
                }
                @media (max-width: 409px) {
                    width: 50%;
                }
                @media (max-width: 246px) {
                    width: 60%;
                }
                :hover {
                    background-color: #fff;
                    color: #264f66;
                    scale: 1.08;
                }
                a {
                    text-decoration: none;
                    color: #fff;
                    padding: .5rem;
                    :hover {
                        color: #264f66;
                        scale: 1.08;
                    }
                }
            }
            div {
                display: flex;
                justify-content: space-between;
                width: 90%;
                padding: .5rem;
                border-bottom: 1px solid #41354e;
                margin: .5rem 0;
                p {
                    font-size: 1rem;
                }
            }
        }
    }

`

function Classes() {
    return (
        <div>
            <Classset>
                <h2>Choose the classes for you</h2>
                <div className="complete">
                    <div className="class">
                        <h3>Actual Price</h3>
                        <h6>January 29</h6>
                        <h5>09:30PM | Does not repeat</h5>
                        <p>For everyone</p>
                        <button><Link to="/Signup">See more</Link></button>
                    </div>
                    <div className="class">
                        <h3>Testing CAD Stripe</h3>
                        <h6>January 30</h6>
                        <h5>10:27AM | Does not repeat</h5>
                        <p>Testing CAD Stripe</p>
                        <button><Link to="/Signup">See more</Link></button>
                    </div>
                    <div className="class">
                        <h3>Working hour</h3>
                        <p>Visit us at our office some day</p>
                        <div>
                            <p>Monday - Friday:</p>
                            <span>9am-5pm</span>
                        </div>
                        <div>
                            <p>Saturday:</p>
                            <span>9am-1pm</span>
                        </div>
                        <div>
                            <p>Sunday</p>
                            <span>Closed</span>
                        </div>
                    </div>
                </div>
            </Classset>
        </div>
    )
}

export default Classes
