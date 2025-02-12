"use client"; // Marca este componente como un Client Component

import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

export function useIsMobile() {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 600); // Ejemplo: 600px como breakpoint para móviles
  }, []);

  return isMobile;
}