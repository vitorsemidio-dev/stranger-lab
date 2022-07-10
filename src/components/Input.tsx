import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ name, ...rest }: InputProps) {
  return (
    <>
      <input name={name} {...rest} />
    </>
  );
}
