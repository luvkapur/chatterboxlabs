import React from 'react';
import { render } from '@testing-library/react';
import { BasicChat } from './chat.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicChat />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
