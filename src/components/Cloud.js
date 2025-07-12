import airbnb from "../assets/partners/airbnb.png";
import hubspot from "../assets/partners/hubspot.png";
import microsoft from "../assets/partners/microsoft.png";
import google from "../assets/partners/google.png";
import walmart from "../assets/partners/walmart.png";
import fedex from "../assets/partners/fedex.png";

export default function Cloud() {
    const partners = [airbnb, hubspot, google, microsoft, walmart, fedex];

    return (
        <div className="w-full h-fit lg:px-28 px-10 box-border">
            {/* Horizontal border container */}
            <div className="border-y-2 border-[#E5E7EB] py-4 flex flex-row">
                
                {/* Partner logos grid */}
                <div className="flex flex-row flex-wrap justify-center gap-16 mx-auto my-6">
                    {partners.map((logo, index) => (
                        <img
                            key={index} // Add unique key for each item
                            src={logo}
                            alt={`Partner logo ${index + 1}`} // Accessibility: alt text
                            className="h-6 w-fit text-center"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
