'use client';

import Marquee from 'react-marquee-slider';
import { v4 as uuidv4 } from 'uuid';
import { 
  FaApple, FaGoogle, FaMicrosoft, FaAmazon, FaFacebook, FaTwitter, FaGithub, FaLinkedin, 
  FaSlack, FaSpotify, FaDropbox, FaSalesforce, FaReddit, FaSnapchat, FaYoutube, FaTwitch 
} from 'react-icons/fa';

const images = [
  { icon: <FaApple />, alt: 'Apple' },
  { icon: <FaGoogle />, alt: 'Google' },
  { icon: <FaMicrosoft />, alt: 'Microsoft' },
  { icon: <FaAmazon />, alt: 'Amazon' },
  { icon: <FaFacebook />, alt: 'Facebook' },
  { icon: <FaTwitter />, alt: 'Twitter' },
  { icon: <FaGithub />, alt: 'Github' },
  { icon: <FaLinkedin />, alt: 'LinkedIn' },
  { icon: <FaSlack />, alt: 'Slack' },
  { icon: <FaSpotify />, alt: 'Spotify' },
  { icon: <FaDropbox />, alt: 'Dropbox' },
  { icon: <FaSalesforce />, alt: 'Salesforce' },
  { icon: <FaReddit />, alt: 'Reddit' },
  { icon: <FaSnapchat />, alt: 'Snapchat' },
  { icon: <FaYoutube />, alt: 'YouTube' },
  { icon: <FaTwitch />, alt: 'Twitch' },
  // Add more icons as needed
];

const Camp = () => {
  return (
    <section className="bg-black border-t border-white border-opacity-50 text-white bg-cover bg-center py-10" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="container mx-auto lg:px-8 px-4">
        <div className="flex justify-center">
          <Marquee velocity={100} minScale={0.7} resetAfterTries={200}>
            {images.map((image) => (
              <div key={uuidv4()} className="mx-3 md:mx-6 flex justify-center items-center">
                <div className="text-white text-2xl md:text-3xl lg:text-4xl">{image.icon}</div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Camp;