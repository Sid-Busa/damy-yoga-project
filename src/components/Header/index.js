import React from 'react'
import styled from 'styled-components'
import HeaderBackgrond from '../../img/pattern-chakras-alt-color.jpeg'
import headerImg from '../../img/chermiti-mohamed-NwN-vtN0cd0-unsplash.jpg'
import Type1 from '../../img/type1.jpeg'
import Type2 from '../../img/type2.jpeg'
import Type3 from '../../img/type3.jpeg'
import Type4 from '../../img/type4.jpeg'
import Nav from '../Navbar'
import About from '../About'
import Gallery from '../Gallery'
import Classes from '../Classes'
import Footer from '../Footer'

const Headerset = styled.div`
    .header-background {
        height: 200vh;
        background-image:  linear-gradient(rgb(13, 50, 77, 0.7) 40%, transparent 40%), url(${HeaderBackgrond});
        @media (max-width: 1400px) {
            height: 210vh;
        }
        @media (max-width: 1250px) {
            height: 220vh;
        }
        @media (max-width: 1250px) {
            height: 215vh;
        }
        @media (max-width: 950px) {
            height: 250vh;
        }
        @media (max-width: 950px) {
            height: 255vh;
            background-image:  linear-gradient(rgb(13, 50, 77, 0.7) 33%, transparent 33%), url(${HeaderBackgrond});
        }
        @media (max-width: 925px) {
            height: 255vh;
            background-image:  linear-gradient(rgb(13, 50, 77, 0.7) 35%, transparent 35%), url(${HeaderBackgrond});
        }
        @media (max-width: 767px) {
            height: 360vh;
            background-image:  linear-gradient(rgb(13, 50, 77, 0.7) 25%, transparent 25%), url(${HeaderBackgrond});
        }
        @media (max-width: 600px) {
            height: 335vh;
            background-image:  linear-gradient(rgb(13, 50, 77, 0.7) 20%, transparent 20%), url(${HeaderBackgrond});
        }
        @media (max-width: 400px) {
            height: 315vh;
            background-image:  linear-gradient(rgb(13, 50, 77, 0.7) 18%, transparent 18%), url(${HeaderBackgrond});
        }
        @media (max-width: 380px) {
            height: 308vh;
        }
        @media (max-width: 333px) {
            height: 290vh;
            background-image:  linear-gradient(rgb(13, 50, 77, 0.7) 15%, transparent 15%), url(${HeaderBackgrond});
        }
        .header-img {
            height: 90vh;
            background-image: url(${headerImg});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border: 5px solid #ffda6d;
            margin: 0rem 3rem 5rem 3rem;
            position: relative;
            @media (max-width: 1175px) {
                background-position: top;
            }
            @media (max-width: 950px) {
                margin: 0rem 2rem 5rem 2rem;
            }
            @media (max-width: 850px) {
                background-image: linear-gradient(rgb(255, 255, 255, 0.8) 50%, rgb(255, 255, 255, 0.3) 90%), url(${headerImg});
            }
            @media (max-width: 600px) {
                height: 70vh;
            }
            @media (max-width: 400px) {
                height: 55vh;
            }
            @media (max-width: 333px) {
                height: 40vh;
                margin: 0 1rem;
            }
        .heading-desc {
            position: absolute;
            width: 45%;
            top: 25%;
            left: 5%;
            @media (max-width: 1042px) {
                top: 20%;
            }
            @media (max-width: 991px) {
                top: 15%;
                width: 50%;
            }
            @media (max-width: 870px) {
                top: 12%;
                width: 60%;
            }
            @media (max-width: 850px) {
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
            }
            @media (max-width: 738px) {
                width: 65%;
            }
            @media (max-width: 687px) {
                width: 80%;
            }
            @media (max-width: 571px) {
                width: 90%;
            }
            p {
                font-family: 'Monsieur La Doulaise', cursive;
                color: #fff;
                font-size: 2rem;
                font-weight: 500;
                @media (max-width: 850px) {
                    color: #41354e;
                }
                @media (max-width: 474px) {
                    font-size: 1.5rem;
                }
                @media (max-width: 409px) {
                    font-size: 1.2rem;
                }
                @media (max-width: 300px) {
                    font-size: 1rem;
                }
            }
            h1 {
                margin-top: 1rem;
                text-transform: uppercase;
                font-size: 2.5rem;
                letter-spacing: .5px;
                @media (max-width: 1290px) {
                    font-size: 2.3rem;
                }
                @media (max-width: 1125px) {
                    font-size: 2rem;
                }
                @media (max-width: 517px) {
                    font-size: 1.8rem;
                }
                @media (max-width: 474px) {
                    font-size: 1.5rem;
                }
                @media (max-width: 409px) {
                    font-size: 1.2rem;
                }
                @media (max-width: 344px) {
                    font-size: 1rem;
                }
            }
            button {
                text-transform: uppercase;
                border: none;
                width: 28%;
                margin-top: 1rem;
                padding: .8rem;
                background-color: #264f66;
                border-radius: 1px;
                color: #fff;
                font-weight: 500;
                letter-spacing: .5px;
                transition: 0.2s linear;
                @media (max-width: 1290px) {
                    padding: .7rem;
                    width: 26%;
                }
                @media (max-width: 1125px) {
                    width: 23%;
                    font-size: .7rem;
                }
                @media (max-width: 1025px) {
                    width: 30%;
                }
                @media (max-width: 474px) {
                    font-size: .7rem;
                    width: 28%;
                    padding: .6rem;
                }
                @media (max-width: 438px) {
                    font-size: .6rem;
                }
                @media (max-width: 409px) {
                    font-size: .6rem;
                    width: 35%;
                }
                @media (max-width: 335px) {
                    width: 45%;
                }
                @media (max-width: 276px) {
                    width: 60%;
                }
                :hover {
                    background-color: #fff;
                    color: #41354e;
                    scale: 1.05;
                }
            }
        }
    }
    .ways {
        h1 {
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 3px;
            word-spacing: 5px;
            font-size: 1.9rem;
            @media (max-width: 1260px) {
                letter-spacing: 2px;
            }
            @media (max-width: 1120px) {
                letter-spacing: 1.5px;
                font-size: 1.7rem;
            }
            @media (max-width: 1060px) {
                letter-spacing: 1.2px;
                font-size: 1.5rem;
            }
            @media (max-width: 767px) {
                font-size: 1.8rem;
                width: 60%;
                margin: 0 auto;
            }
            @media (max-width: 732px) {
                width: 50%;
                letter-spacing: 2px;
            }
            @media (max-width: 732px) {
                width: 70%;
            }
            @media (max-width: 652px) {
                width: 75%;
            }
            @media (max-width: 608px) {
                width: 80%;
                font-size: 1.6rem;
            }
            @media (max-width: 516px) {
                width: 90%;
            }
            @media (max-width: 460px) {
                letter-spacing: 1px;
            }
            @media (max-width: 434px) {
                letter-spacing: .5px;
                font-size: 1.4rem;
            }
            @media (max-width: 374px) {
                width: 95%;
            }
            @media (max-width: 354px) {
                letter-spacing: 0px;
                font-size: 1.2rem;
            }
            @media (max-width: 333px) {
                margin-top: 2rem;
            }
            @media (max-width: 230px) {
                font-size: 1rem;
            }
            ::after {
                content: '';
                display: block;
                background-color: #41354e;
                height: 2px;
                width: 10%;
                margin: 2rem auto .5rem auto;
                @media (max-width: 767px) {
                    width: 25%;
                }
            }
        }
        .ways-detail {
            padding: 2rem 0;
            letter-spacing: .3px;
            width: 54%;
            margin: 0 auto;
            text-align: center;
            @media (max-width: 600px) {
                width: 65%;
            }
            @media (max-width: 500px) {
                width: 80%;
            }
            @media (max-width: 310px) {
                font-size: .8rem;
            }
        }
        .types {
            display: flex;
            flex-direction: row;
            margin: 0 3rem;
            @media (max-width: 950px) {
                flex-direction: column;
            }
            @media (max-width: 425px) {
                margin: 0 2.2rem;
            }
            @media (max-width: 400px) {
                margin: 0 2rem;
            }
            @media (max-width: 323px) {
                margin: 0 1.5rem;
            }
            @media (max-width: 307px) {
                margin: 0 1rem;
            }
            @media (max-width: 291px) {
                margin: 0 0;
            }
            .types-struc {
                display: flex;
                @media (max-width: 767px) {
                    flex-direction: column;
                }
                .type {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0 1rem;
                    h3 {
                        text-align: center;
                        text-transform: uppercase;
                        font-size: 1.4rem;
                        margin-top: 2rem;
                        @media (max-width: 1260px) {
                            font-size: 1.2rem;
                        }
                        @media (max-width: 1060px) {
                            font-size: 1.1rem;
                        }
                        @media (max-width: 767px) {
                            font-size: 1.3rem;
                        }
                        @media (max-width:  608px) {
                            font-size: 1.2rem;
                        }
                        @media (max-width: 400px) {
                            font-size: 1rem;
                        }
                    }
                    img {
                        border-radius: 50%;
                        width:130px;
                        height: 130px;
                        object-fit: cover;
                        margin: 2rem 0;
                    }
                    p {
                        padding: 0 1rem;
                        text-align: center;
                        ::before {
                            content: '';
                            display: block;
                            background-color: #41354e;
                            height: 2px;
                            width: 30%;
                            margin: 0 auto 1.2rem auto;
                        }
                        @media (max-width: 1125px) {
                            font-size: 1rem;
                        }
                        @media (max-width: 1125px) {
                            font-size: .9rem;
                        }
                        @media (max-width: 1023px) {
                            font-size: .8rem;
                        }
                        @media (max-width: 767px) {
                            width: 60%;
                            font-size: .9rem;
                        }
                        @media (max-width: 732px) {
                            width: 68%;
                            font-size: .9rem;
                        }
                        @media (max-width: 670px) {
                            width: 75%;
                        }
                        @media (max-width: 600px) {
                            width: 80%;
                        }
                        @media (max-width: 517px) {
                            width: 85%;
                        }
                        @media (max-width: 495px) {
                            width: 90%;
                        }
                        @media (max-width: 473px) {
                            width: 100%;
                        }
                        @media (max-width: 440px) {
                            width: 110%;
                        }
                        @media (max-width: 410px) {
                            font-size: .8rem;
                        }
                        @media (max-width: 380px) {
                            font-size: .7rem;
                        }
                    }
                }
                .first {
                    h3 {
                        color: #f26d7d;
                    }
                    img {
                        border: 5px solid #f26d7d;
                    }
                }
                .second {
                    h3 {
                        color: #f0bd26;
                    }
                    img {
                        border: 5px solid #f0bd26;
                    }
                }
                .third {
                    h3 {
                        color: #9bd9da;
                    }
                    img {
                        border: 5px solid #9bd9da;
                    }
                }
                .forth {
                    h3 {
                        color: #e09866;
                    }
                    img {
                        border: 5px solid #e09866;
                    }
                }
            }
        }
    }
}
`

function Header() {
    return (
        <>
            <Headerset>
                <div className="header-background">
                    <Nav />
                    <div className="header-img">
                        <div className="heading-desc">
                            <p>Enternal love</p>
                            <h1>Welcome to Goodlife with Puja Shah</h1>
                            <button>Know more</button>
                        </div>
                    </div>
                    <div className="ways">
                        <h1>A brief discription about the ways of yoga</h1>
                        <p className="ways-detail">We provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.</p>
                        <div className="types">
                            <div className="types-struc">
                                <div className="type first">
                                    <h3>Astanga Yoga</h3>
                                    <img src={Type1} alt="Type 1" />
                                    <p>Nam consequat turpis vitae ultrices maximus. Phasellus ut ullamcorper nunc. Sed varius orci in lectus tincidunt malesuada. Donec vehicula porttitor viverra. Vestibulum auctor hendrerit.</p>
                                </div>
                                <div className="type second">
                                    <h3>Hatha Yoga</h3>
                                    <img src={Type2} alt="Type 1" />
                                    <p>Nam consequat turpis vitae ultrices maximus. Phasellus ut ullamcorper nunc. Sed varius orci in lectus tincidunt malesuada. Donec vehicula porttitor viverra. Vestibulum auctor hendrerit.</p>
                                </div>
                            </div>
                            <div className="types-struc">
                                <div className="type third">
                                    <h3>Iyengar Yoga</h3>
                                    <img src={Type3} alt="Type 1" />
                                    <p>Nam consequat turpis vitae ultrices maximus. Phasellus ut ullamcorper nunc. Sed varius orci in lectus tincidunt malesuada. Donec vehicula porttitor viverra. Vestibulum auctor hendrerit.</p>
                                </div>
                                <div className="type forth">
                                    <h3>Kundalini Yoga</h3>
                                    <img src={Type4} alt="Type 4" />
                                    <p>Nam consequat turpis vitae ultrices maximus. Phasellus ut ullamcorper nunc. Sed varius orci in lectus tincidunt malesuada. Donec vehicula porttitor viverra. Vestibulum auctor hendrerit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Headerset>
            <About />
            <Gallery />
            <Classes />
            <Footer />
        </>
    )
}

export default Header
