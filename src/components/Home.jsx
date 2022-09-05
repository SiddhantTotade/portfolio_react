import React from 'react'
import { NavBar } from './NavBar'
import HeroImage from '../assets/heroImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col'>
                <div>
                    <h2>I'm a Full Stack Developer</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus aliquid cumque illum impedit voluptatum expedita nemo non, atque quae aut, perspiciatis corrupti, ratione dicta sunt. Reiciendis necessitatibus tempora accusamus commodi officia vel veritatis dicta, maiores assumenda nulla aliquam voluptatem laborum nostrum explicabo aperiam illo debitis. Eius numquam fugiat natus commodi.
                    </p>
                    <div>
                        <button>
                            Portfolio <span><MdOutlineKeyboardArrowRight /></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
