import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './popup.scss';

const Popup: React.FC = (): ReactElement => {
  return <div>Popup!</div>;
};

const root = document.createElement('div');
document.body.append(root);
ReactDOM.render(<Popup />, root);
