import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './options.scss';

const Options: React.FC = (): ReactElement => {
  return <div>Options page</div>;
};

const root = document.createElement('div');
document.body.append(root);
ReactDOM.render(<Options />, root);
