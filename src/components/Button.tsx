import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
}

export function Button({ children, type = 'button', ...rest }: ButtonProps) {
  return (
    <>
      <button type={type} {...rest}>
        {children}
      </button>
    </>
  );
}
