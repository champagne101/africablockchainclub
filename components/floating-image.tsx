"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function FloatingImage(){
      const [showFloatingImage, setShowFloatingImage] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          setShowFloatingImage(scrollY > 250); 
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return(            
            <div className={`fixed bottom-[-20px] right-[-10px] z-[9999] transition-opacity duration-150 ease-out ${
                  showFloatingImage ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="w-52 h-52 relative">
                  <Image
                    src="/header/ABC.png"
                    alt="ABC Spirit Animal"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
    )
}