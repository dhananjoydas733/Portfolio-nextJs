//next image
import Image from "next/image";

//components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

// framer motion
import {motion} from 'framer-motion'

//varients
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-o-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/*Tittle */}
          <h1 className="h1">Transforming Ideas <br /> Into{''} <span className="text-accent">Digital Reality</span></h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Consider using bg-fixed for parallax-like effects on larger screens. Combine background images with gradients for unique designs. Use the bg-blend-* utilities to blend background images with colors. By following this guide
          </p>
          {/* Button */}
          <div className="flex justify-center xl:hidden relative"></div>
        </div>
      </div>
    </div>
  )
};

export default Home;
