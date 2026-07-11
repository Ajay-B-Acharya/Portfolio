import React, { useState } from 'react';
import MapCanvas from './components/MapCanvas';
import TopHUD from './components/TopHUD';

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden relative bg-black font-nunito select-none text-gray-200">
      <MapCanvas />
      
      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
      
      <TopHUD />
    </div>
  );
}
