/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Tabs from "components/Others/Tabs.js";
import Faq from "components/Others/Faq.js";
import Draggable from 'react-draggable';
import HeaderContent from 'components/Others/HeaderContent.js';
import Player from 'components/Others/Player.js';
import ChatBot from 'react-simple-chatbot';
import Reactt, { Component } from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";
import Timer from 'components/Others/Timer.js';



 
class ChatBotV extends Component {
  state = {
    opened: false
  }

  toggleFloating = ({ opened }) => {
    this.setState({ opened }); 
  }

  render() {
    const { opened } = this.state;
    const steps = [
      {
        id: '1',
        message: 'Quelle feature devrions nous developper en priorité ? (cliquez sur une réponse pour valider)',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: '- Des évènements génériques', trigger: '4' },
          { value: 2, label: '- application IOS/ANDROID', trigger: '4' },
          { value: 3, label: '- envoyer des messages privés', trigger: '3' },
        ],
      },
      {
        id: '3',
        message: 'Tes sur ? :(',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Terrible ta réponse',
        trigger : '5',
      },
      {
        id: '5',
        message: 'bah déjà un sujet un cours, sache le',
        end: true,
      },
    ];
   


    return (
      <ChatBot
        steps={steps}
        floating={true}
        opened={opened}
        toggleFloating={this.toggleFloating}
      />
    )
  }
}


export default function Index() {
 
  
  return (
    
    <>
<IndexNavbar fixed />
<ChatBotV fixed />


        <div className="container mx-auto overflow-hidden pb-20 mb-0 rounded-lg bg-purple-100 mt-12">
          <div className="flex flex-wrap items-center ">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-0 mb-auto">
            <Tabs />
            <Faq />
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-20">
              <div className="relative flex flex-col min-w-0 w-full mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/4.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/2.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/3.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/1.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-190-px"
                />
              </div>
            </div>
          </div>
        </div>


        

        <div className="container mx-auto px6 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-6 shadow-lg rounded-full bg-white">
                <img src="https://img.icons8.com/office/80/000000/stadium.png"/>                </div>
                <h3 className="text-3xl font-semibold">
Fmr App                </h3>
<Timer />

                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                <HeaderContent />
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-130">
                        <img src="https://img.icons8.com/color/48/000000/blog.png"/>                        </span>
                      </div>
                      <div>
                        <h4 className="text-black">
                          (Nous bloguons sur le milieu du sport tout confondu !)
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150">
                        <img src="https://img.icons8.com/color/48/000000/tear-off-calendar--v1.png"/>                        </span>
                      </div>
                      <div>
                        <h4 className="text-black">
Nous organisons des events premium (photographes, buffet, vidéo, musique, solutions entreprises...)                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>                   

                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img src="https://img.icons8.com/nolan/64/new-contact.png"/></span>                      

                      </div>
                      <div>
                        <h4 className="text-black">
besoin d'aide ? n'hésitez pas à nous contacter                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/landing.png").default}
              />
            </div>
          </div>
          <Draggable  bounds='body'>       
        <div className="handle"><i className='far fa-hand-point-down' ></i> 
        <img alt="..." src={require("assets/img/foot.png").default} />
        </div>
      </Draggable>

    


      <Player />
      

      </div>

      


        <div className="container mx-auto ">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  ">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Inscrivez vous !
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/login.png").default}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
Amusez vous !                  </h5>
                  <Link to="/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://www.sortiraparis.com/images/58/74061/678130-inauguration-du-five-paris-18-le-complexe-de-foot-a-5-sur-les-toits-de-paris.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Rassemblez vous  
                  </h5>
                  <Link to="/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/ras.jpeg").default}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CookieConsent location="bottom" cookieName="myAwesomeCookieName3" expires={999} overlay buttonText="En faire une bouchée !" buttonClasses="rounded"
  cookieName="myAwesomeCookieName2"
  style={{
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(93,53,144,0.7525385154061625) 43%, rgba(143,0,255,1)",
    textShadow: "2px 2px black",
  }}
  buttonStyle={{
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(93,53,144,0.7525385154061625) 43%, rgba(143,0,255,1)",
    color: "white",
    fontWeight: "bolder",
    textShadow: "2px 2px black",
  }}>
  Afin d'améliorer votre expérience, acceptez les cookies (miam)
</CookieConsent>
    </>
  );
}
