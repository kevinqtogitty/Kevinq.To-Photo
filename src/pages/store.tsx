import React from 'react';
import { MainWrapper } from '../stylesheets/styled_components/component_styles/formStyles';
import PrintStore from '../components/PrintStore';

const Store: React.FC = () => {
  return (
    <MainWrapper>
      <PrintStore />
    </MainWrapper>
  );
};

export default Store;
