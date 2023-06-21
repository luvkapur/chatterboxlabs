import React from 'react';
import { GPTClient } from './gpt';

export function ReturnsCorrectValue() {
  const [value, setValue] = React.useState('');
  React.useEffect(() => {
    const client = new GPTClient();
    client.processInput('Tell me a joke').then((res) => {
      setValue(res);
    });
  }, [])
  return <div>{value}</div>;
}
