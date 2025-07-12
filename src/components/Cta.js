import phone_1 from "../assets/phone_2.png";
import phone_2 from "../assets/phone_3.png";
import google_play from "../assets/google_play.png";
import app_store from "../assets/app_store.png";

export default function Cta() {
    return (
        <div className="w-full box-border bg-[#1DB5BE] flex lg:flex-row flex-col gap-8 lg:px-28 sm:px-10 px-5">
            {/* Left Section: Text & Buttons */}
            <div className="flex flex-col gap-2 my-auto lg:max-w-[592px] sm:py-20 pt-16">
                <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight">
                    Manage all projects from your mobile
                </h1>
                <p className="text-lg text-[#111827]">
                    Download the app to manage your projects, keep track of the progress, and complete tasks without procrastinating. Stay on track and complete on time!
                </p>

                {/* App Download Buttons */}
                <div className="mt-12 w-fit flex flex-col gap-2">
                    <p className="text-lg text-[#111827] font-semibold">Get the App</p>
                    <div className="pr-28 flex sm:flex-row-reverse sm:gap-8 gap-4">
                        <img
                            src={app_store}
                            alt="Download on the App Store"
                            className="h-10 object-contain"
                        />
                        <img
                            src={google_play}
                            alt="Get it on Google Play"
                            className="h-10 object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Right Section: Phone Images */}
            <div className="flex sm:flex-row flex-col justify-between lg:mx-auto sm:mx-0 mx-auto">
                <img
                    src={phone_1}
                    alt="Mobile app preview 1"
                    className="w-72 h-auto"
                />
                <img
                    src={phone_2}
                    alt="Mobile app preview 2"
                    className="w-72 h-auto mt-auto"
                />
            </div>
        </div>
    );
}
