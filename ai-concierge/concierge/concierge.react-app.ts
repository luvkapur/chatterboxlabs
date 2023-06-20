import { ReactAppOptions } from '@teambit/react';

export const ConciergeApp: ReactAppOptions = {
  name: 'concierge',
  entry: [require.resolve('./concierge.app-root')]
};

export default ConciergeApp;
