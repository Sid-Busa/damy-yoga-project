import React from 'react'
import styled from 'styled-components'
import AboutImage from '../../img/about.jpg'

const AboutContainer = styled.div`
    height: 80vh;
    background-image:linear-gradient(rgb(13, 50, 77, 0.85) 100%, transparent 100%), url(${AboutImage});
    background-position: bottom;
    background-size: cover;
    background-attachment: fixed;

    .About-page {
        height: 80vh;
        margin:  0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        h2 {
            color: #fff;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 3px;
            word-spacing: 5px;
            font-size: 2rem;
            @media (max-width: 627px) {
                font-size: 1.8rem;
                letter-spacing: 4px;
            }
            @media (max-width: 527px) {
                letter-spacing: 2px;
            }
            @media (max-width: 444px) {
                font-size: 1.7rem;
            }
            @media (max-width: 300px) {
                font-size: 1.6rem;
            }
            ::after {
                content: '';
                display: block;
                background-color: #fff;
                height: 2px;
                width: 55%;
                margin: 1.5rem auto 2rem auto;
            }
        }
        p {
            color: #fff;
            width: 55%;
            line-height: 1.6;
            font-size: 1.05rem;
            @media (max-width: 990px) {
                width: 65%;
            }
            @media (max-width: 767px) {
                width: 73%;
            }
            @media (max-width: 526px) {
                width: 77%;
            }
            @media (max-width: 444px) {
                width: 83%;
            }
        }
        h6 {
            color: #fff;
            font-size: 1.5rem;
            text-transform: uppercase;
            padding-top: 3rem;
            font-weight: 500;
            @media (max-width: 1026px) {
                font-size: 1.3rem;
            }
            @media (max-width: 906px) {
                font-size: 1.1rem;
            }
        }
        p {
            font-size: 1rem;
            margin: -.5px;
            @media (max-width: 1026px) {
                font-size: .92rem;
            }
            @media (max-width: 345px) {
                font-size: .9rem;
            }
        }
    }
`

function About() {
    return (
        <div>
            <AboutContainer id="about">
                <div className="About-page">
                    <h2>About</h2>
                    <p>"From a person inward yoga journey to our group yoga classes for fitness enthusiasts, the goal of every GoodLife Yoga istructor is to help all netizens live a fit and healthy good life. We are based out of Pune, MH in India. Please book our live classes from the schedule provided below."</p>
                    <h6>Puja Shah</h6>
                    <p>Yoga Trainer</p>
                </div>
            </AboutContainer>
        </div>
    )
}

export default About
