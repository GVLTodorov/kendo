import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

function KendoButton() {
  return (
    <Button icon="folder" primary={true} look="flat">
      My Button with KendoReact styles
    </Button>
  );
}

export default KendoButton;
