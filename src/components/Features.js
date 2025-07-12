import robust from "../assets/icons/workflow.png";
import friendly from "../assets/icons/friendly.png";
import flexible from "../assets/icons/flexibility.png";
import layout from "../assets/icons/layout.png";
import organized from "../assets/icons/organized.png";
import components from "../assets/icons/components.png";

export default function Features() {
    // 📝 Feature items data
    const features = [
        { image: robust, title: "Robust workflow" },
        { image: flexible, title: "Flexibility" },
        { image: friendly, title: "User friendly" },
        { image: layout, title: "Multiple layouts" },
        { image: components, title: "Better components" },
        { image: organized, title: "Well organised" },
    ];

    return (
        <div className="w-full flex flex-col h-fit box-border lg:px-28 sm:px-10 px-5 lg:py-24 py-20 text-center">
            {/* Section Heading */}
            <h1 className="text-5xl font-bold mb-2">Tailor-made features</h1>
            <p className="text-lg text-[#111827] max-w-[800px] mx-auto">
                Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
            </p>

            {/* Features Grid */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-16 gap-16 box-border">
                {features.map((item, index) => (
                    <div
                        key={index} // Unique key for each feature
                        className="flex flex-col w-full gap-6"
                    >
                        <img
                            src={item.image}
                            alt={item.title} //Accessibility: alt text
                            className="w-8 h-fit mx-auto"
                        />
                        <h2 className="text-3xl font-bold text-center">
                            {item.title}
                        </h2>
                        <p className="text-[#374151] text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
