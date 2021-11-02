import React from 'react';
import styled from 'styled-components';
import message1 from '../../assets/img/message_pink.svg';
import message2 from '../../assets/img/trophy.svg';
import { Fade } from 'react-reveal';

function HeaderContent() {
    return (
        <HeaderContentStyled>
            <Fade left cascade>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>FMR League</h1>
                    <p className="dark">
                        <i>Des parties classées, communautés, trophés, stats...</i>
                        Fondez une team et affrontez d'autres équipes, terrain de rue ou
                        spot sponsor, from scratch ou arbitré, casté ou rediffusé.

                        FMR c'est également des évenements en tout genre, taille humaine ou corporate,
                        contactez-nous pour des évènements custom.
                    </p>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="right-content">
                <img src={message1} alt="" className="message1" />
                <img src={message2} alt="" className="message2" />
            </div>
            </Fade>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        .white{
            color:black;
        }
        h1{
            font-size: 4rem;
            font-weight: 600;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }

        .white{
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }
    }

    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
       
        .message1{
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
            filter: invert(7%) sepia(81%) saturate(7485%) hue-rotate(298deg) brightness(98%) contrast(103%);
        }
        .message2{
            position: absolute;
            bottom: 15%;
            left: 0;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            animation-delay: .5s;
            transition: all .4s ease-in-out;
            filter: invert(7%) sepia(96%) saturate(6337%) hue-rotate(298deg) brightness(95%) contrast(103%);
    //Header Animations
    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-15px) rotate(15deg) scale(1.5) translateX(15px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.3) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
    }
`;

export default HeaderContent;
