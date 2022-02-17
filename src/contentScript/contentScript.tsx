import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

const ContentScript: React.FC = (): ReactElement => {
  console.log('Hello content-script!');

  return null;
};

const root = document.createElement('div');
document.body.append(root);
ReactDOM.render(<ContentScript />, root);
