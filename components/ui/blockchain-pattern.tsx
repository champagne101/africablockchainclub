export default function BlockchainPattern({ className = "" }: { className?: string }) {
    return (
      <div className={`absolute inset-0 z-0 opacity-10 overflow-hidden ${className}`}>
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="blockchain-grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <path d="M 0,10 10,10" stroke="#f59e0b" strokeWidth="0.5" fill="none" strokeOpacity="0.3" />
              <path d="M 10,0 10,10" stroke="#f59e0b" strokeWidth="0.5" fill="none" strokeOpacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blockchain-grid)" />
        </svg>
      </div>
    )
  }
  