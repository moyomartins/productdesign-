import React from 'react';
import { useRef, useEffect } from "react";
import Button from '../button';
import TopBar from '../topbar2';
import Case from '../case';
import Footer from '../footer';
import Memoji from '../svgs/memoji/work-emoji.PNG';
import Uneleap from '../svgs/uneleap.png';
import Coiner from '../svgs/coiner.png';
import Ticketer from '../svgs/ticketer.png';
import {gsap, ScrollTrigger} from 'gsap/all'

function Work(props) {
  gsap.registerPlugin(ScrollTrigger)

  const ref = useRef(null)

  useEffect(() => {
    const hero = ref.current
    gsap.from(hero,{y:300, opacity:0, delay: .5})
  })
  return(
    <div>
    <div ref={ref}>
      <div className='Hero mt-40 flex flex-col items-center mx-10'>
      <img className='h-24' src={Memoji} alt='hero memoji'/>
      <header className='flex flex-col gap-4 mt-5'>
        <p className='text-3xl text-myblack font-bold text-center'><span className='font-medium text-myblue'></span> Moyo Martins</p>
        <p className='text-xl text-mysecondary text-center font-medium '>Product + UX designer & Web designer from Nigeria</p>
      </header>
      <p className='text-mysecondary max-w-2xl text-center mt-4 leading-8 font-light'>
      I use most design tools and applications like Figma, Adobe xd, Balsamiq, Illustrator, Photoshop, Indesign and Invision. I've got a passion for design and beautiful ui</p>
      <div className='Button mt-8'>
      <Button text='Connect with me' type='int' link='/contact'/>
      </div>
      </div>
      <div className='cases'>
        <header className='text-3xl text-mysecondary text-center my-20 font medium'>Selected projects</header>
        <Case image={Uneleap} link='https://www.behance.net/gallery/133947445/Onboarding-for-Uneleap-app' title='Uneleap' type1={true} desc='Uneleap is a platform designed to be the perfect student tool. It is a free and efficient education platform designed to improve student campus and online experience.' />
          <Case image={Coiner} link='https://www.behance.net/gallery/134159069/Coiner' title='Coiner' type1={false} desc='Coiner is a cryptocurrency web platform with a design to capture the attention of users at a glance and also sell the service/product(s) it offers. You can navigate between p2p transactions in cryptocurrency or transactions directly with coiner.' />
          <Case image={Ticketer} link='https://www.behance.net/gallery/134126287/Ticketer' title='Ticketer' type1={true} desc='Ticketer is a mobile app that sells tickets, from music concerts to movies and so on. It offers the luxury of obtaining tickets to events at a discount to the users and because it sells concert,movie and other types of tickets you can never run out of fun things to do.'/>
      </div>
      </div>
      <div className='TopBar flex bg-red-300 w-screen justify-center'><TopBar page='work'/></div>
      <Footer/>
      </div>
  )
}

export default Work