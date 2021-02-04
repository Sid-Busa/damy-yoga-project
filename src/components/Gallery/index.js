import React from 'react'
import styled from 'styled-components';
import Image1 from '../../img/image1.jpg';
import Image2 from '../../img/image2.jpg';
import Image3 from '../../img/image3.jpeg';
import Image4 from '../../img/image4.jpeg';
import Image5 from '../../img/image5.jpg';

const GallerySet = styled.div`
    h2 {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 3px;
        word-spacing: 5px;
        font-size: 2rem;
        margin: 6rem 0 3rem 0;
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
            background-color: #41354e;
            height: 3px;
            width: 6%;
            margin: 1.5rem auto 2rem auto;
            @media (max-width: 1084px) {
                width: 7%;
            }
            @media (max-width: 1000px) {
                width: 8%;
            }
            @media (max-width: 814px) {
                width: 9%;
            }
            @media (max-width: 627px) {
                width: 11%;
            }
            @media (max-width: 558px) {
                width: 12%;
            }
            @media (max-width: 490px) {
                width: 15%;
            }
            @media (max-width: 412px) {
                width: 18%;
            }
            @media (max-width: 320px) {
                width: 22%;
            }
        }
    }
    .grid {
        display: grid;
        grid-template-rows: repeat(4, 140px);
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5px;
        width: 100%;
        @media (max-width: 627px) {
            grid-template-rows: repeat(4, 110px);
        }
        @media (max-width: 453px) {
            grid-template-rows: repeat(4, 90px);
        }
        @media (max-width: 358px) {
            grid-template-rows: repeat(4, 80px);
        }
        @media (max-width: 317px) {
            grid-template-rows: repeat(4, 70px);
        }
        @media (max-width: 297px) {
            grid-template-rows: repeat(4, 60px);
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
            transition: 0.2s linear;
            :nth-child(1) {
                grid-row: 1 / 4;
                @media (max-width: 627px) {
                    grid-row: 1/3;
                }
            }
            :nth-child(2) {
                grid-column: 2 / 4;
                grid-row: 1 / 3;
            }
            :nth-child(3) {
                grid-column: 3 / 4;
                grid-row: 3 / 5;
                @media (max-width: 627px) {
                    grid-column: 1 / 3;
                    grid-row: 3 / 5;
                }
            }
            :nth-child(4) {
                grid-column: 2 / 3;
                grid-row: 3 / 4;
                @media (max-width: 627px) {
                    grid-column: 3 / 4;
                    grid-row: 3 / 4;
                }
            }
            :nth-child(5) {
                grid-column: 1 / 3;
                grid-row: 4 / 5;
                @media (max-width: 627px) {
                    grid-column: 3 / 4;
                    grid-row: 4 / 5;
                }
            }
            :hover {
                opacity: 0.4;
                width: 100%;
                cursor: pointer;
            }
        }
    }
`

function Gallery() {
    return (
        <div>
            <GallerySet>
                <h2>Gallery</h2>
                <div className="grid">
                    <img src={Image1} alt="Gallery Image" />
                    <img src={Image2} alt="Gallery Image" />
                    <img src={Image3} alt="Gallery Image" />
                    <img src={Image4} alt="Gallery Image" />
                    <img src={Image5} alt="Gallery Image" />
                </div>
            </GallerySet>
        </div>
    )
}

export default Gallery
