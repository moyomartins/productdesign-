import React from 'react';
import { useRef, useEffect } from "react";
import Button from '../button';
import TopBar from '../topbar2';
import Case from '../case';
// import ValueProp from '../valueprop';
import Footer from '../footer';
import Memoji from '../svgs/memoji/home-emoji.PNG';
// import Emoji from '../svgs/emojis/smiling.gif';
import Uneleap from '../svgs/uneleap.png';
import Coiner from '../svgs/coiner.png';
import Ticketer from '../svgs/ticketer.png';
import {gsap, ScrollTrigger, ScrollToPlugin} from 'gsap/all'

function Home(props) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)

  const ref = useRef(null)

  useEffect(() => {
    const hero = ref.current
    gsap.from(hero,{y:300, opacity:0, delay: .5});
  })
  return(
    <div>
      <div ref={ref}>
      <div className='Hero mt-40 flex flex-col items-center mx-10' >
      <img className='h-24' src={Memoji} alt='hero memoji'/>
      <header className='flex items-center gap-1 mt-5'>
        <p className='text-3xl text-myblack font-bold text-center'><span className='font-medium text-mysecondary'>Hi,</span> I'm Moyo</p>
        {/* <img className='hidden h-8 smallest:block' src={Emoji} alt='smiling emoji'/> */}
      </header>
      <p className='text-mysecondary max-w-2xl text-center lg:text-center mt-4 leading-8 font-light'>A <span className='font-medium text-black'>Product designer and Product Manager </span> from Lagos, Nigeria.
      <br/>The ideal product design sells the product/service(s) intended at a glance.</p>
      <div className='Button mt-8'>
      <Button text='Connect with me' type='int' link='/contact'/>
      </div>
      </div>
      {/* <ValueProp/> */}
      <div className='cases'>
        <header className='text-3xl text-mysecondary text-center mt-20 mb-12 font medium'>My projects</header>
        <div className='flex flex-col gap-8'>
          <Case image={Uneleap} link='https://www.behance.net/gallery/133947445/Onboarding-for-Uneleap-app' title='Uneleap' type1={true} desc='Uneleap is a platform designed to be the perfect student tool. It is a free and efficient education platform designed to improve student campus and online experience.' />
          <Case image={Ticketer} link='https://www.behance.net/gallery/134126287/Ticketer' title='Ticketer' type1={false} desc='Ticketer is a mobile app that sells tickets, from music concerts to movies and so on. It offers the luxury of obtaining tickets to events at a discount to the users and because it sells concert,movie and other types of tickets you can never run out of fun things to do.'/>
          <Case image={Coiner} link='https://www.behance.net/gallery/134159069/Coiner' title='Coiner' type1={true} desc='Coiner is a cryptocurrency web platform with a design to capture the attention of users at a glance and also sell the service/product(s) it offers. You can navigate between p2p transactions in cryptocurrency or transactions directly with coiner.' />
          
        </div>
      </div>
      </div>
      <Footer/>
      <div className='TopBar'><TopBar page='home'/></div>
      </div>
  )
}

export default Home