import React from 'react';
import TopBar from '../topbar2';
import Footer from '../footer';
import Memoji from '../svgs/memoji/hello-emoji.PNG';
import Yahoo from '../svgs/socials/yahoo.svg'

function Contact(props) {
  return(
    <div>
      <div className='Hero mt-40 flex flex-col items-center mx-2'>
        <img className='h-24' src={Memoji} alt='hero memoji'/>
        <header className='flex mt-5'>
            <p className='text-3xl text-myblack font-bold text-center'>Say hello! </p>
         </header>
         <div className=' flex flex-col items-center'>
            <p className='text-mysecondary max-w-3xl text-left mt-4 leading-8 font-light mx-8'>Want to have a chat with me about food, movies, a project, or product design? </p>
            <div className='flex flex-wrap iphone:gap-4 items-center mt-2 mx-8'>
                <p className='text-mysecondary leading-8 font-light'>Send me a mail</p>
                <a className='email flex items-center gap-2 justify-end' href='mailto:martinstm@yahoo.com'>
                    <img src={Yahoo} alt='yahoo logo'/>
                    <p className='underline'>Martinstm@yahoo.com</p>
                </a>
            </div>
        </div>
      </div>
      <Footer/>
      <div className='TopBar flex bg-red-300 w-screen justify-center'><TopBar page='contact'/></div>

    </div>
  )
}

export default Contact