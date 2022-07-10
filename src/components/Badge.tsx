import classNames from 'classnames';

interface BadgeProps {
  isActive: boolean;
  children: string;
}

export function Badge({ isActive, children }: BadgeProps) {
  return (
    <span
      className={classNames(
        'text-xs rounded px-2 py-[0.125rem] text-white border font-bold uppercase',
        {
          'border-white': isActive,
          'border-red-400': !isActive,
        },
      )}
    >
      {children}
    </span>
  );
}
