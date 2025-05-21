export default function PartnersSection() {
    const partnerLogos = [
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    ];

    return (
        <div className="relative overflow-hidden bg-white py-12 w-3/4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 py-7">Our Partners</h2>

            {/* Fade edges */}
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden whitespace-nowrap">
                <div className="animate-infinite-scroll flex items-center">
                    {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo}
                            alt={`Partner ${idx + 1}`}
                            className="h-16 mx-8 inline-block object-contain"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
