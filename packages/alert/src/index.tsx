import React from 'react';
import { Icons } from './Icons';

interface Props {
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
  variant,
  icon: Icon,
  children,
  labelProps,
}) => {
  return (
    <div className={cn('alert', variant)}>
      <div className="flex-1">
        {Icon ? <Icon /> : <Icons variant={variant} />}
        <label {...labelProps}>{children}</label>
      </div>
    </div>
  );
};
