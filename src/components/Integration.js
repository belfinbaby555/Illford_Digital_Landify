import integration from "../assets/interation_apps.png";

export default function Integration() {
    return (
        <div className="w-full box-border flex sm:flex-row flex-col gap-8 lg:px-28 sm:px-10 px-5 py-20">
            {/* Left Text Section */}
            <div className="flex flex-col gap-2 my-auto sm:w-[488px]">
                <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight">
                    Easy integrations with 170+ tools
                </h1>
                <p className="text-lg text-[#111827]">
                    Connect Landify with your favourite tools that you use daily and keep things on track.
                </p>
            </div>

            {/* Right Image Section */}
            <img
                src={integration}
                alt="Integration apps"
                className="lg:h-72 h-40 w-auto mx-auto"
            />
        </div>
    );
}
