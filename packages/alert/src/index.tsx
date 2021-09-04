import React from 'react';
import { Icons } from './Icons';

export interface Props {
  variant?: 'info' | 'success' | 'warning' | 'error';
  icon?: React.ComponentType;
  children: React.ReactNode | string;
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
}

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const Alert: React.FC<Props> = ({
  variant = 'info',
  icon: Icon,
  children,
  labelProps,
}) => {
  let currentVariant = 'alert-info';
  switch (variant) {
    case 'success':
      currentVariant = 'alert-success';
      break;
    case 'warning':
      currentVariant = 'alert-warning';
      break;
    case 'error':
      currentVariant = 'alert-error';
      break;
    default:
      currentVariant = 'alert-info';
      break;
  }

  return (
    <div className={cn('alert', currentVariant)}>
      <div className="flex-1">
        {Icon ? <Icon /> : <Icons variant={variant} />}
        <label {...labelProps}>{children}</label>
      </div>
    </div>
  );
};
