import React from "react";
import SideImage from "@/assets/Image.png";
import Image from "next/image";
import Rectangle20 from "@/assets/Rectangle 20.png";
import Rectangle21 from "@/assets/Rectangle 21.png";
import Rectangle22 from "@/assets/Rectangle 22.png";

const Hero = () => {
  return (
    <div className="p-6">
      <div>
        <div className="mt-20">
          <h1 className="text-5xl font-bold text-gray-900">Water Damage</h1>
          <h1 className="text-5xl font-bold text-gray-900 mt-6">
            Restoration Company
          </h1>
          <div className="space-y-3 mt-7">
            <div className="flex items-center gap-2">
              <Image
                src={Rectangle20}
                alt="Hero Image 1"
                width={30}
                height={30}
              />
              <p className="font-bold text-sm mt-2">24/7 Emergency Service</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={Rectangle21}
                alt="Hero Image 1"
                width={30}
                height={30}
              />
              <p className="font-bold text-sm mt-2">
                45 Minute On-site Guarantee
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={Rectangle22}
                alt="Hero Image 1"
                width={30}
                height={30}
              />
              <p className="font-bold text-sm mt-2">
                Work directly with your insurance Company
              </p>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-8">
            <button className="flex items-center p-3 px-5 bg-blue-500 text-white rounded-lg text-xs font-normal">
              GET A FAST QOUTE
            </button>
            <button className="flex items-center p-3 px-5 bg-purple-600 text-white rounded-lg text-xs font-normal">
              CONTACT US
            </button>
          </div>
        </div>
        <Image
          src={SideImage}
          alt="Hero Image"
          width={750}
          height={750}
          className="fixed top-0 right-0 -z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
