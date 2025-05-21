import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import WaterWire from '../common/WaterWire.jsx';
import fishImg from '/hero.png';

function HeroSection() {
    const bubbleContainerRef = useRef(null);

    useEffect(() => {
        if (!bubbleContainerRef.current) return;

        const bubbles = bubbleContainerRef.current.querySelectorAll('.bubble');
        console.log('Bubbles found:', bubbles.length);

        bubbles.forEach((bubble) => {
            gsap.fromTo(
                bubble,
                {
                    y: 100,
                    scale: 0.5,
                    opacity: 0.5,
                },
                {
                    y: -400,
                    scale: 1.2,
                    opacity: 0,
                    duration: 4 + Math.random() * 2,
                    ease: 'power1.inOut',
                    repeat: -1,
                    delay: Math.random() * 2,
                }
            );
        });
    }, []);
    const renderBubbles = () => {
        return Array.from({ length: 10 }).map((_, i) => {
            const size = 10 + Math.random() * 20; // random size between 10px and 30px
            return (
                <div
                    key={i}
                    className="bubble absolute bg-blue-300 rounded-full opacity-50 border border-blue-700"
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,     // same as width for circle
                        left: `${Math.random() * 100}%`,
                        bottom: '0',
                    }}
                />
            );
        });
    };
    return (
        <>
            <div className="relative overflow-hidden min-h-[75vh]">
                <div className="flex flex-col md:flex-row w-[90%] min-h-[75vh] overflow-x-hidden mx-auto">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center items-start gap-8 px-6 md:pl-16 py-8 w-full">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Catch Only the <br /> Emails That Matter.
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-gray-400">
                                MailFishr filters your inbox for high-priority emails — like job updates,
                                applications, offers,
                                <br className="hidden md:inline" />
                                and more — and gives you a distraction-free dashboard to track them.
                            </p>
                        </div>
                        <div className="flex gap-6">
                            <button className="w-32 h-12 bg-blue-600 rounded-md text-white hover:cursor-pointer">Get Started</button>
                            <button className="w-32 h-12 bg-blue-200 rounded-md text-gray-500">Demo</button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="sm:flex hidden  justify-center items-center w-1/3 px-4 py-8">
                        <img
                            src={fishImg}
                            alt="Fishr"
                            className="w-1/2 md:w-full h-full object-contain" />
                    </div>
                </div>

                {/* Bubbles Container */}
                <div
                    ref={bubbleContainerRef}
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{ height: '100%', width: '100%' }}
                >
                    {renderBubbles()}
                </div>
            </div>

            <WaterWire />
        </>
    );
}

export default HeroSection;
