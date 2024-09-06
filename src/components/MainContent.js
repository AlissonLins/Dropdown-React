import React from "react";

import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';
import hero from '../images/image-hero-desktop.png';
import mobile from '../images/image-hero-mobile.png';

function MainContent() {
    return (
        <main className="flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto">
            <div className="grid max-w-screen-lg gap-20 auto-cols-fr">
                <div className="flex flex-col justify-evenly">
                    <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">Make Remote Work</h1>
                    <p className="text-lg leading-relaxed text-gray-500 mb-5">Get your team in sync, no matter your location.
                    Streamline processes, create team rituals, and watch productivity soar.</p>
                    <button className="bg-black w-fit p-4 text-white rounded-xl cursor-pointer hover:bg-white border-solid border-2 border-black font-bold text-black">Learn more</button>
                    <div className="grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-start">
                        <img src={databiz} alt="databiz logo" className="w-16 md:w-24" />
                        <img src={audiophile} alt="audiophile logo" className="w-16 md:w-24"/>
                        <img src={meet} alt="meet logo" className="w-16 md:w-24"/>
                        <img src={maker} alt="maker" className="w-16 md:w-24"/>
                    </div>
                </div>
            </div>
                <div >
                    <picture>
                        <source media="(min-width: 768px)" srcSet={hero} />
                        <img src={mobile} alt="" className="w-full" />
                    </picture>
                </div>
        </main>
    )
}

export default MainContent;