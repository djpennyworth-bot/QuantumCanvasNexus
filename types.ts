// Fix: Import `ReactElement` to resolve 'Cannot find namespace 'React'' error.
import type { ReactElement } from 'react';

export interface Canvas {
  id: string;
  name: string;
  description: string;
  icon: ReactElement;
}
