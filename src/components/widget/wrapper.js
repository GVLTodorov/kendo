import React from 'react';
import { Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import KendoGrid from './kendoGrid';
import KendoButton from '../kendoButton/KendoButton';
import BootstrapButton from '../bootstrapButton/BootstrapButton';

function Wrapper() {
  const renderContent = () => {
    if (isMobile) {
      return (
        <>
          <KendoGrid />
        </>
      );
    }
    return (
      <>
        <Col xs={6}>
          <KendoGrid />
        </Col>
        <Col></Col>
        <Col>
          <KendoButton />
          <BootstrapButton />
        </Col>
      </>
    );
  };
  return renderContent();
}

export default Wrapper;
