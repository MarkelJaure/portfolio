'use client';
import { useEffect, useRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import RecomendarionCard from '../RecomendationCard.tsx/RecomendationCard';

// Sample data - replace with your actual data

export default function RecommendationsSection() {
  const { t, i18n } = useTranslation();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const recommendationsData = [
    {
      id: 1,
      avatar: '/recomendadores/demian.webp',
      name: 'Demian Barry',
      role: t('recommendations.demian.role'),
      text: t('recommendations.demian.text'),
    },
    {
      id: 2,
      avatar: '/recomendadores/diego.webp',
      name: 'Diego Perez',
      role: t('recommendations.diego.role'),
      text: t('recommendations.diego.text'),
    },
    {
      id: 3,
      avatar: 'recomendadores/lautaro.webp',
      name: 'Lautaro Verdi',
      role: t('recommendations.laurato.role'),
      text: t('recommendations.laurato.text'),
    },
    {
      id: 4,
      avatar: 'recomendadores/martin.webp',
      name: 'Martín Rouede',
      role: t('recommendations.martin.role'),
      text: t('recommendations.martin.text'),
    },
    {
      id: 5,
      avatar: 'recomendadores/leonardo.webp',
      name: 'Leonardo Ordinez',
      role: t('recommendations.leonardo.role'),
      text: t('recommendations.leonardo.text'),
    },
  ];

  // Effect to duplicate content for infinite scroll
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (scrollerRef.current && scrollerInnerRef.current) {
        scrollerRef.current.setAttribute('data-animated', 'true');

        // Eliminar duplicados anteriores antes de volver a crear
        const existingDuplicates = Array.from(
          scrollerInnerRef.current.querySelectorAll('[aria-hidden="true"]')
        );
        existingDuplicates.forEach(duplicate => duplicate.remove());

        const scrollerContent = Array.from(scrollerInnerRef.current.children);
        let duplicatedWidth = 0;

        while (duplicatedWidth < window.innerWidth * 2) {
          scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute('aria-hidden', 'true');
            scrollerInnerRef.current?.appendChild(duplicatedItem);
            duplicatedWidth += duplicatedItem.scrollWidth;
          });
        }
      }
    }
    // Dependencia en el tema para refrescar los componentes duplicados
  }, [theme, i18n.language]);

  return (
    <Box component="section" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" fontFamily="monospace">
        {t('recommendations.title', 'Recomendaciones')}
      </Typography>

      <Box
        ref={scrollerRef}
        className="scroller"
        sx={{
          maxWidth: '100%',
          overflow: 'hidden',
          position: 'relative',
          '&[data-animated="true"]': {
            WebkitMask: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent)',
            mask: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent)',
          },
          '&[data-animated="true"] .scroller__inner': {
            display: 'flex',
            width: 'max-content',
            animation: 'scroll var(--_animation-duration, 40s) linear infinite',
          },
          '@keyframes scroll': {
            to: {
              transform: 'translate(calc(-50% - 1rem))',
            },
          },
        }}
      >
        <Box
          ref={scrollerInnerRef}
          className="scroller__inner"
          sx={{
            display: 'flex',
            gap: 4,
            padding: '1rem 0',
          }}
        >
          {recommendationsData.map((recommendation, index) => (
            <RecomendarionCard
              key={`${recommendation.id}-${index}-${theme.palette.mode}`} // El key incluye el modo de tema
              recommendation={recommendation}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
