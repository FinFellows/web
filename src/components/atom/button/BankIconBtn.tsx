import React from 'react';
import { cls } from '@/utils/cls';

type TBankIconBtnProps = {
  isOn: boolean;
  text: string;
  size: 'Large' | 'Small';
};

const BankIconBtn: React.FC<TBankIconBtnProps & React.HTMLAttributes<HTMLDivElement>> = ({
  isOn,
  text,
  size,
  ...props
}) => {
  return size === 'Large' ? (
    <div
      {...props}
      className={cls(
        'flex flex-col items-center min-w-91 h-91 bg-secondary rounded-15 border cursor-pointer',
        isOn ? 'border-main' : 'border-border04',
      )}
    >
      <div className='w-44 h-44 rounded-7 mt-10 bg-imageBase'></div>
      <p
        style={{
          textOverflow: 'ellipsis',
        }}
        className={cls(
          'mt-5 w-87 text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap label-medium',
          isOn ? 'text-main' : 'text-typoPrimary',
        )}
      >
        {text}
      </p>
    </div>
  ) : (
    <div
      {...props}
      className={cls(
        'flex flex-col items-center min-w-68 h-68 bg-secondary rounded-11 border cursor-pointer tablet:min-w-156 tablet:h-156 tablet:rounded-30 tablet:border-2',
        isOn ? 'border-main' : 'border-border04',
      )}
    >
      <div className='w-34 h-34 rounded-5 mt-7 bg-imageBase tablet:w-80 tablet:h-80 tablet:rounded-13 tablet:mt-15'></div>
      <p
        style={{
          textOverflow: 'ellipsis',
        }}
        className={cls(
          'mt-3 w-65 text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap label-small tablet:mt-5 tablet:w-145 tablet:label-xl',
          isOn ? 'text-main' : 'text-typoPrimary',
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default BankIconBtn;
