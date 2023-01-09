import React from 'react';

type Props = {
  title?: string;
  titleIcon?: JSX.Element;
  className?: string;
  children: JSX.Element | JSX.Element[] | string | string[];
};

export const Card: React.FC<Props> = ({
  title,
  titleIcon,
  className,
  children,
}) => {
  return (
    <div
      className={`flex flex-col border border-[rgba(255,255,255,0.3)] rounded-[6px] ${className} bg-[rgba(30,30,30,0.3)]`}
    >
      {title && (
        <div className='flex items-center px-[57px] h-[71px] border-b border-[rgba(255,255,255,0.3)] space-x-2 text-[20px] font-bold'>
          <span>{title}</span> {titleIcon}
        </div>
      )}
      <div className='flex grow justify-center items-center rounded-br-[6px] rounded-bl-[6px]'>
        {children}
      </div>
    </div>
  );
};
