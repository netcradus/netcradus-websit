import React from 'react';

export default function OrbitDiagram() {
  return (
    <section
      id="acis-architecture"
      className="relative w-full h-screen min-h-[100dvh] bg-[#04060c] overflow-hidden flex items-center justify-center p-0 m-0 select-none"
      aria-label="ACIS Autonomous Defense Architecture"
    >
      <img
        src="/assets/ACIS HOME IMAGE.png"
        alt="ACIS Autonomous Defense Architecture"
        className="w-full h-full object-cover object-center block"
        loading="eager"
      />
    </section>
  );
}
