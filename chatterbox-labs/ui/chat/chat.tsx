import React, { ReactNode } from 'react';

export type ChatProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Chat({ children }: ChatProps) {
  return (
    <div>
      {children}
    </div>
  );
}
