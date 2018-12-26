import React from 'react';

import { Main, Card } from './styles';
import ChartWrapper from '../chart/index';

const MainSection = () => {
  return (
    <Main>
      <Card>
        <ChartWrapper />
      </Card>
    </Main>
  )
}

export default MainSection;