import { useRef, useLayoutEffect } from "react";
import { FaUserGraduate, FaBriefcase, FaLaptopCode, FaCalendarAlt } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function UseCaseSection() {
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        cardsRef.current.forEach((card, index) => {
            if (!card) return;
            console.log("Animating card", index);

            gsap.fromTo(
                card,
                { opacity: 0, y: 60, scale: 0.85 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    const useCases = [
        {
            title: "Students",
            desc: "Track college mails, placement updates, scholarship alerts.",
            icon: <FaUserGraduate className="text-blue-500 text-5xl mb-4" />,
        },
        {
            title: "Job Seekers",
            desc: "Never miss an HR reply or application receipt.",
            icon: <FaBriefcase className="text-green-500 text-5xl mb-4" />,
        },
        {
            title: "Freelancers",
            desc: "Isolate client emails and invoices.",
            icon: <FaLaptopCode className="text-purple-500 text-5xl mb-4" />,
        },
        {
            title: "Event-Goers",
            desc: "Stay on top of conference and interview invites.",
            icon: <FaCalendarAlt className="text-red-500 text-5xl mb-4" />,
        },
    ];

    return (
        <div className="feature_container mt-10 w-3/4 mx-auto">
            <h2 className="text-center text-3xl font-semibold ">Use Cases</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-6">
                {useCases.map((feature, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="bg-white border-2 border-gray-300 rounded-2xl shadow-xl hover:shadow-md hover:border-blue-400 transition-all duration-300 p-6 min-h-[250px] flex flex-col justify-start items-start text-gray-800"
                    >
                        {feature.icon}
                        <h3 className="text-xl font-semibold mb-2 text-blue-700">{feature.title}</h3>
                        <p className="text-gray-600">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UseCaseSection;
