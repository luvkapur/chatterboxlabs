import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ConciergeApp } from './app';

export const ConciergeBasic = () => {
  return (
    <MemoryRouter>
      <ConciergeApp />
    </MemoryRouter>
  );
};
