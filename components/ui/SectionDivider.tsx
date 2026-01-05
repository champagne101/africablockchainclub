export default function SectionDivider() {
  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 100"
        className="w-full h-20"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="jaggedShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow 
              dx="4" 
              dy="4" 
              stdDeviation="4" 
              flood-color="rgba(0,0,0,0.4)" 
            />
          </filter>
        </defs>
        
        <path
          d="M0 100 L480 100 
             L520 80 L560 100 
             L600 60 L640 100 
             L680 40 L720 100 
             L760 60 L800 100 
             L840 20 L880 100 
             L920 40 L960 100 
             L1000 60 L1040 100 
             L1080 20 L1120 100 
             L1160 40 L1200 100 
             L1240 60 L1280 100 
             L1320 20 L1360 100 
             L1400 40 L1440 100"
          fill="none"
          stroke="#2B2B2B"
          strokeWidth="4"
          strokeLinecap="square"
          strokeLinejoin="miter"
          filter="url(#jaggedShadow)"
        />
        
        {/* Secondary shadow for depth */}
        <path
          d="M0 100 L480 100 
             L520 80 L560 100 
             L600 60 L640 100 
             L680 40 L720 100 
             L760 60 L800 100 
             L840 20 L880 100 
             L920 40 L960 100 
             L1000 60 L1040 100 
             L1080 20 L1120 100 
             L1160 40 L1200 100 
             L1240 60 L1280 100 
             L1320 20 L1360 100 
             L1400 40 L1440 100"
          fill="none"
          stroke="rgba(43,43,43,0.15)"
          strokeWidth="8"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
}