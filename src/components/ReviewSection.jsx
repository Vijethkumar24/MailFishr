export default function ReviewSection() {
    const reviews = [
        {
            name: "Anna Deynah",
            role: "UX Designer",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            stars: 5,
            img: "https://avatar.iran.liara.run/public/62",
        },
        {
            name: "John Doe",
            role: "Web Developer",
            text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
            stars: 4,
            img: "https://avatar.iran.liara.run/public/22",
        },
        {
            name: "Maria Kate",
            role: "Photographer",
            text: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
            stars: 5,
            img: "https://avatar.iran.liara.run/public/64",
        },
    ];


    return (
        <div className="relative overflow-hidden py-12 bg-white w-3/4 mx-auto">
            <h2 className="text-center text-3xl sm:text-xl font-semibold mb-8">Happy Customers</h2>

            {/* Edge Fades */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Scrolling Container */}
            <div className="whitespace-nowrap animate-review-scroll flex gap-6 px-4">
                {reviews.concat(reviews).map((review, idx) => (
                    <div
                        key={idx}
                        className="inline-block bg-white shadow-xl rounded-xl px-6 py-4 w-screen  inset-2 border-2 border-gray-300"
                    >
                        <img
                            src={review.img}
                            alt={review.name}
                            className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                        />
                        <h3 className="text-center font-semibold">{review.name}</h3>
                        <p className="text-center text-sm text-gray-500">{review.role}</p>
                        <p className="text-gray-600 text-sm mt-2 italic">“{review.text}”</p>
                        <div className="flex justify-center mt-2 text-yellow-400">
                            {Array.from({ length: review.stars }).map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div >

    );
}
