// page.tsx
"use client";  // Make sure this is present to treat the component as client-side
import CocaColaBackground from "@/components/background";
import dynamic from "next/dynamic";

// Dynamically import LavishBackground component with SSR disabled
// const LavishBackground = dynamic(() => import("@/components/background"), { ssr: false });

export default function Page() {
  

  return (
    <div>
      <CocaColaBackground />
      
    
    </div>
  );
}




