import React from 'react';
import { gpt } from './gpt';

export function ReturnsCorrectValue() {
  return <div>{gpt()}</div>;
}
