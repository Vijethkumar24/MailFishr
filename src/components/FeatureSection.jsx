import { useRef, useLayoutEffect } from "react";
import { FaFilter, FaInbox, FaBell, FaCogs, FaThumbtack } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeatureSection() {
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const animations = [];

        cardsRef.current.forEach((card) => {
            if (!card) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                    // markers: true, // Uncomment for debugging
                },
            });

            tl.fromTo(
                card,
                { opacity: 0, y: 60, scale: 0.85 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                }
            );

            animations.push(tl);
        });

        return () => {
            animations.forEach(anim => anim.kill());
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const features = [
        {
            title: "Smart Filter",
            desc: "Automatically detects emails related to jobs, admissions, payments, events, and more.",
            icon: <FaFilter className="text-blue-500 text-5xl mb-4" />,
        },
        {
            title: "Central Inbox",
            desc: "View all important filtered mails in one neat dashboard — sorted by category.",
            icon: <FaInbox className="text-green-500 text-5xl mb-4" />,
        },
        {
            title: "Real-Time Alert",
            desc: "Get notified instantly for key emails — job offers, college results, invoices, etc.",
            icon: <FaBell className="text-red-500 text-5xl mb-4" />,
        },
        {
            title: "Custom Rules",
            desc: "Set your own filters with keywords, senders, or subject logic (like mini-Gmail rules, but smarter).",
            icon: <FaCogs className="text-purple-500 text-5xl mb-4" />,
        },
        {
            title: "Pin & Track",
            desc: "Mark emails as “to follow up,” “replied,” or “important” — just like a task manager.",
            icon: <FaThumbtack className="text-yellow-500 text-5xl mb-4" />,
        },
    ];

    // Clear refs before rendering
    cardsRef.current = [];

    return (
        <div className="feature_container mt-36 w-3/4 mx-auto">
            <h2 className="text-center sm:text-2xl text-xl font-semibold ">Our Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-6">
                {features.map((feature, index) => (
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

export default FeatureSection;
