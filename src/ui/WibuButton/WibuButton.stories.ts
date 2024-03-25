import type { Meta, StoryObj } from '@storybook/react';
import { WibuButton } from './WibuButton.tsx';
import { EButtonAppearance } from './WibuButton.types.ts';
import { ESize } from '../../core/assets/common/enum/size.enum.ts';

const meta: Meta<typeof WibuButton> = {
  component: WibuButton,
  argTypes: {
    appearance: {
      options: [
        EButtonAppearance.SUCCESS,
        EButtonAppearance.WARNING,
        EButtonAppearance.DANGER,
        EButtonAppearance.INFO,
      ],
      control: 'radio',
    },
    size: {
      options: [ESize.S, ESize.M, ESize.L, ESize.XL],
      control: 'radio',
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: 'Iu Ha',
    appearance: EButtonAppearance.SUCCESS,
  },
};
