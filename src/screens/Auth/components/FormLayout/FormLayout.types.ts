import { ReactNode } from 'react';
import { EAuthStatus } from '../../Auth.types.ts';

export interface IFormLayoutProps {
  children: ReactNode;
  status: EAuthStatus;
}
