import phone from "../assets/mobile_image.png";
import play from "../assets/play.png";
import Background from "./Background";

export default function Hero({ open }) {
    return (
        <div className="w-svw h-fit flex lg:flex-row flex-col box-border lg:gap-32 lg:px-28 sm:px-10 px-5">
            {/* Left Section: Text Content */}
            <div className="flex flex-col max-w-[700px] gap-4 z-10 lg:pt-24 pt-16 lg:mt-28 mt-10">
                <h1 className="font-bold lg:text-6xl sm:text-5xl text-4xl leading-tight">
                    The easiest way to manage projects
                </h1>
                <p className="text-[#374151] text-lg">
                    From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.
                </p>

                {/* Buttons */}
                <div className="flex flex-row font-semibold lg:mt-8 lg:gap-4 mt-6 gap-3">
                    <button className="w-36 h-14 rounded-lg bg-[#7C3AED] px-6 py-4 text-white">
                        Get Started
                    </button>
                    <button className="w-fit flex items-center gap-2 h-14 rounded-lg text-[#7C3AED] px-6 py-4 bg-transparent">
                        <img src={play} alt="Play Icon" className="w-6 h-auto" />
                        Watch Video
                    </button>
                </div>
            </div>

            {/* Right Section: Phone Image */}
            <img
                src={phone}
                alt="Mobile App Preview"
                className="w-[420px] mx-auto sm:mt-28 mt-16 mb-12"
            />

            {/* Background Component */}
            <div className="absolute top-0 left-0 -z-10">
                <Background />
            </div>
        </div>
    );
}
