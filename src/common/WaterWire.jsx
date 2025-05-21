import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function WaterWire() {
    const containerRef = useRef();
    const [wavePosition, setWavePosition] = useState(0);
    const waveRef = useRef({ value: 0 });
    const animationFrame = useRef(null);

    // Track scroll and apply wave movement via GSAP
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const onScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY;

            // Scroll direction: delta positive = down, negative = up
            const directionFactor = delta > 0 ? 1 : -1;

            // Animate wave position with GSAP
            gsap.to(waveRef.current, {
                value: waveRef.current.value + directionFactor * 5,
                duration: 0.5,
                ease: "power2.out",
                overwrite: "auto",
                onUpdate: () => {
                    setWavePosition(waveRef.current.value);
                }
            });

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const generateWave = (baseY, amplitude, frequency, phase) => {
        let path = "";
        const width = 100;
        const points = [];

        for (let x = -20; x <= width; x += 1) {
            const y = baseY +
                amplitude * Math.sin((x * frequency + phase + wavePosition) * 0.1) +
                amplitude * 0.5 * Math.sin((x * frequency * 1.5 + phase + wavePosition) * 0.1) +
                amplitude * 0.25 * Math.sin((x * frequency * 2.2 + phase - wavePosition) * 0.05);

            points.push([x, y]);
        }

        path += `M ${points[0][0]} ${points[0][1]} `;

        for (let i = 0; i < points.length - 1; i++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[i + 1];

            if (i % 3 === 0 && i < points.length - 2) {
                const [x3, y3] = points[i + 2];
                path += `Q ${x2} ${y2}, ${x3} ${y3} `;
                i++;
            } else {
                path += `L ${x2} ${y2} `;
            }
        }

        return path;
    };

    return (
        <div
            ref={containerRef}
            className="bg-clip-content block"
        >
            <svg
                viewBox="0 0 100 50"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 overflow-x-hidden"
                preserveAspectRatio="none"
            >
                <path
                    d={`${generateWave(40, 1, 1, 0)} L 120 50 L -20 50 Z`}
                    fill="#3B82F6"
                    style={{
                        filter: "drop-shadow(0 -2px 4px rgba(96, 165, 250, 0.5))"
                    }}
                />
                <path
                    d={generateWave(39.5, 0.8, 1.5, 20)}
                    stroke="#60A5FA"
                    strokeWidth="0.3"
                    fill="none"
                />
                <path
                    d={generateWave(39.2, 0.6, 2, 50)}
                    stroke="white"
                    strokeWidth="0.2"
                    strokeOpacity="0.6"
                    fill="none"
                />
                <path
                    d={generateWave(39, 0.3, 3, 70)}
                    stroke="white"
                    strokeWidth="0.1"
                    strokeOpacity="0.4"
                    fill="none"
                />
            </svg>
        </div>
    );
}
