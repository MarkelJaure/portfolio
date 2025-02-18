"use client"; // Marca este componente como un Client Component

import { useEffect, useState } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Esto se ejecutará solo en el cliente, ya que `useEffect` no se ejecuta en el servidor
    setIsMobile(window.innerWidth < 600);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
