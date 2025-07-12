import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import robust from "../assets/icons/workflow.png";
import layout from "../assets/icons/layout.png";
import component from "../assets/icons/components.png";
import list from "../assets/icons/list.png";

export default function Metrics() {
    const metrics = [
        {
            icon: robust,
            metric: 10000,
            suffix: "+",
            desc: "Downloads per day",
        },
        {
            icon: layout,
            metric: 2,
            suffix: " Million",
            desc: "Users",
        },
        {
            icon: component,
            metric: 500,
            suffix: "+",
            desc: "Clients",
        },
        {
            icon: list,
            metric: 140,
            suffix: "",
            desc: "Countries",
        },
    ];

    // 🔥 Detect when section is in view
    const { ref, inView } = useInView({
        triggerOnce: true, // animate only once
        threshold: 0.3,    // start when 30% visible
    });

    return (
        <div
            ref={ref}
            className="w-full box-border flex lg:flex-row flex-col lg:gap-8 gap-12 lg:px-28 px-10 sm:py-20 py-16"
        >
            {/* Left Side Text */}
            <div className="flex flex-col gap-2 my-auto lg:max-w-[592px]">
                <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight">
                    Our 18 years of achievements
                </h1>
                <p className="text-lg text-[#111827]">
                    With our super powers we have reached this
                </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-6">
                {metrics.map((item, index) => (
                    <div key={index} className="flex flex-row gap-4">
                        <img
                            src={item.icon}
                            alt={item.desc}
                            className="w-8 my-auto"
                        />
                        <div className="flex flex-col gap-2">
                            <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold">
                                {inView ? (
                                    <CountUp
                                        end={item.metric}
                                        duration={2.5}
                                        separator=","
                                    />
                                ) : (
                                    0
                                )}
                                {item.suffix}
                            </h2>
                            <p className="text-base text-[#111827]">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
