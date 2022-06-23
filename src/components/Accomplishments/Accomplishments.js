import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/common';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 20, text: 'Projects' },
  { number: 3, text: 'linlinkedin certifications' },
  { text: 'Performing daily tasks and activities' },
  { text: 'Learned a new programming language' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card?.number ? `${card.number}+` : ''}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;