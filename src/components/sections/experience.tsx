import React from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { Timeline } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import TranslatedTypography from '../TranslatedTypography/TranslatedTypography';
import TimelineComponent from '../TimelineComponent/TimelineComponent';

const ExperienceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const experiences = [
    {
      title: !isMobile
        ? t('experience.items.compulab.titleExtended')
        : t('experience.items.compulab.title'),
      period: t('experience.items.compulab.period'),
      url: 'https://www.google.com/maps/place/CompuLab/@-42.7680585,-65.0411291,17z/data=!4m8!3m7!1s0xbe023562f9d27061:0x19499cdda362e7bd!8m2!3d-42.7680585!4d-65.0411291!9m1!1b1!16s%2Fg%2F1thfgpjl?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D',
      role: t('experience.items.compulab.role'),
      description: [
        <TranslatedTypography
          key="1"
          i18nKey="experience.items.compulab.description.1"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="2"
          i18nKey="experience.items.compulab.description.2"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="3"
          i18nKey="experience.items.compulab.description.3"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="4"
          i18nKey="experience.items.compulab.description.4"
          component={'li'}
          variant="body2"
        />,
      ],
    },
    {
      title: !isMobile
        ? t('experience.items.camad.titleExtended')
        : t('experience.items.camad.title'),
      period: t('experience.items.camad.period'),
      role: t('experience.items.camad.role'),
      url: 'https://camad.org.ar/',
      description: [
        <TranslatedTypography
          key="1"
          i18nKey="experience.items.camad.description.1"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="2"
          i18nKey="experience.items.camad.description.2"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="3"
          i18nKey="experience.items.camad.description.3"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="4"
          i18nKey="experience.items.camad.description.4"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="5"
          i18nKey="experience.items.camad.description.5"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="6"
          i18nKey="experience.items.camad.description.6"
          component={'li'}
          variant="body2"
        />,
      ],
    },
    {
      title: !isMobile
        ? t('experience.items.anppv.titleExtended')
        : t('experience.items.anppv.title'),
      period: t('experience.items.anppv.period'),
      role: t('experience.items.anppv.role'),
      url: 'https://peninsulavaldes.org.ar/',
      description: [
        <TranslatedTypography
          key="1"
          i18nKey="experience.items.anppv.description.1"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="2"
          i18nKey="experience.items.anppv.description.2"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="3"
          i18nKey="experience.items.anppv.description.3"
          component={'li'}
          variant="body2"
        />,
      ],
    },
    {
      title: !isMobile
        ? t('experience.items.alimentar.titleExtended')
        : t('experience.items.alimentar.title'),
      period: t('experience.items.alimentar.period'),
      role: t('experience.items.alimentar.role'),
      url: 'https://www.unp.edu.ar/',
      description: [
        <TranslatedTypography
          key="1"
          i18nKey="experience.items.alimentar.description.1"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="2"
          i18nKey="experience.items.alimentar.description.2"
          component={'li'}
          variant="body2"
        />,
        <TranslatedTypography
          key="3"
          i18nKey="experience.items.alimentar.description.3"
          component={'li'}
          variant="body2"
        />,
      ],
    },
  ];

  return (
    <Box id="experience" my={4}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" fontFamily={'monospace'}>
        {t('experience.title')}
      </Typography>
      <Timeline position="right" style={{ padding: '0px' }}>
        {experiences.map((exp, index) => (
          <TimelineComponent
            aExperience={exp}
            index={index}
            isLast={index === experiences.length - 1}
            key={index}
          />
        ))}
      </Timeline>
    </Box>
  );
};

export default ExperienceSection;
