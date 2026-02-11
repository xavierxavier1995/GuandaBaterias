import React from 'react';

const MarqueeBanner: React.FC = () => {
  const items = [
    { text: "ENTREGA GRÁTIS", icon: "🚚" },
    { text: "ATENDIMENTO EXPRESS EM BAURU", icon: "⚡" },
    { text: "PARCELAMENTO EM 10X", icon: "💳" },
    { text: "ATENDIMENTO ESPECIALIZADO", icon: "🛠️" },
  ];

  // Repeat items to ensure the strip is long enough for any screen width
  const repeatedItems = [...items, ...items, ...items]; 

  return (
    <div className="bg-yellow-400 py-3 overflow-hidden border-y border-yellow-500 relative z-20 shadow-sm">
       {/* Inner container with width max-content to allow scrolling */}
       <div className="flex w-max animate-marquee will-change-transform">
          {/* Render two sets of content for seamless loop */}
          {[0, 1].map((setIndex) => (
             <div key={setIndex} className="flex items-center shrink-0">
                {repeatedItems.map((item, idx) => (
                   <div key={`${setIndex}-${idx}`} className="flex items-center mx-8 lg:mx-12">
                      <span className="text-xl lg:text-2xl mr-3 drop-shadow-sm filter transition-transform hover:scale-125 duration-300 cursor-default">{item.icon}</span>
                      <span className="text-blue-900 font-black uppercase tracking-wider text-xs md:text-sm font-archivo whitespace-nowrap">
                         {item.text}
                      </span>
                   </div>
                ))}
             </div>
          ))}
       </div>

       <style>{`
         .animate-marquee {
           animation: marquee 40s linear infinite;
         }
         .animate-marquee:hover {
           animation-play-state: paused;
         }
         @keyframes marquee {
           0% { transform: translateX(0) translateZ(0); }
           100% { transform: translateX(-50%) translateZ(0); }
         }
       `}</style>
    </div>
  );
};

export default MarqueeBanner;