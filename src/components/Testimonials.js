import comma from "../assets/comma.png";
import hubspot from "../assets/partners/hubspot.png";
import airbnb from "../assets/partners/airbnb.png";
import strapi from "../assets/partners/strapi.png";

export default function Testimonials() {
    // 📝 Testimonials data
    const testimonials = [
        {
            logo: airbnb,
            company: "Airbnb",
            text: "I used Landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
            name: "Jane Cooper",
            position: "CEO, Airbnb",
            alignment: "mr-auto lg:mt-32",
        },
        {
            logo: hubspot,
            company: "HubSpot",
            text: "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kits I have come across. It's so flexible, well organised and easily editable.",
            name: "Floyd Miles",
            position: "Vice President, GoPro",
            alignment: "ml-auto lg:-mt-52",
        },
        {
            logo: strapi,
            company: "Strapi",
            text: "Landify saved our time in designing my company page.",
            name: "Kristin Watson",
            position: "Co-Founder, Strapi",
            alignment: "mr-auto",
        },
    ];

    return (
        <div className="w-full flex flex-col gap-8 bg-[#D5FAFC] box-border lg:px-28 sm:px-10 px-5 lg:py-24 py-20">
            {/* Section Header */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                <div className="flex flex-row relative">
                    <img
                        src={comma}
                        alt="Quotation Mark"
                        className="w-36 opacity-30 h-fit z-0"
                    />
                    <div className="flex flex-col z-10 lg:-ml-8 -ml-32 mt-16">
                        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold pb-2">
                            Real Stories from Real Customers
                        </h1>
                        <p className="text-lg text-[#111827]">
                            Get inspired by these stories.
                        </p>
                    </div>
                </div>

                {/* Testimonials */}
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className={`p-8 bg-white rounded-lg flex flex-col gap-8 ${item.alignment} lg:w-[488px] w-full h-fit`}
                    >
                        <img
                            src={item.logo}
                            alt={`${item.company} Logo`}
                            className="w-28"
                        />
                        <div className="flex flex-row gap-2">
                            <img
                                src={comma}
                                alt="Quotation Mark Small"
                                className="w-4 h-fit"
                            />
                            <div className="flex flex-col">
                                <p className="text-lg">{item.text}</p>
                                <b className="text-lg mt-6">{item.name}</b>
                                <p className="text-sm text-[#6B7280]">
                                    {item.position}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
