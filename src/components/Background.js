import Navbar from "./Navbar";
import left_band from "../assets/left_bands.png";
import right_band from "../assets/right_bnad.png";
import "../index.css";
import Hero from "./Hero";

export default function Background() {
    return (
        <div className="relative overflow-x-hidden">
            {/* Top section with background color, blur effect, and slanted bottom */}
            <div className="bg-[#F2F7FFB2] flex flex-col z-10 overflow-visible backdrop-blur-3xl w-svw h-screen slant">
                <Navbar />
            </div>

            {/* Decorative bands positioned left and right */}
            <div className="flex w-svw justify-between relative z-50 lg:-mt-32 -mt-12">
                <img
                    src={left_band}
                    alt="Left Band"
                    className="lg:w-[420px] w-56 lg:h-fit h-36 relative bottom-0"
                />
                <img
                    src={right_band}
                    alt="Right Band"
                    className="lg:w-[612px] w-56 lg:h-fit h-36 relative lg:-top-48 -top-28"
                />
            </div>

            {/* Background circular accents */}
            <div className="absolute -top-8 -right-10 w-1/4 h-[402px] -z-10 bg-[#7C3AED] rounded-full" />
            <div className="absolute right-1/3 top-1/2 w-40 aspect-square lg:block hidden -z-10 bg-[#1DB5BE] rounded-full" />
        </div>
    );
}
