import React from 'react';

import Page from '../layouts';
import { ServerErrorExplanations } from '../components/error-explanations';

const ServerError: React.FC = () => {
  return (
    <Page title="Cette page est introuvable">
      <ServerErrorExplanations />
    </Page>
  );
};

export default ServerError;
