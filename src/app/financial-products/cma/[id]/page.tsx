'use client';

import React, { useEffect, useState } from 'react';
import CmaGuide from '../../_components/CmaGuide';
import CmaInfoGuide from '../../_components/CmaInfoGuide';
import { TgetCmaIdApiResponse } from '@/types/financial-productsTypes';
import { getCmaIdApi } from '@/api/cmaApi';
import { deleteBankBookmarkApi, postBankBookmarkApi } from '@/api/bookmarkApi';

const Des = ({ params }: { params: { id: number } }) => {
  const [cmaInfo, setCmaInfo] = useState<TgetCmaIdApiResponse | undefined>();
  const [isLiked, setIsLiked] = useState(false);

  const cmaFetchData = async () => {
    try {
      const data = await getCmaIdApi(params.id);
      if (data) {
        setCmaInfo(data);
        setIsLiked(data.isLiked);
      }
    } catch (error) {
      console.error('Error fetching cmaFetchData:', error);
    }
  };

  useEffect(() => {
    cmaFetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHeartClick = async (id: number, isLiked: boolean) => {
    try {
      let apiResult;
      if (isLiked) {
        apiResult = await deleteBankBookmarkApi(id);
      } else {
        apiResult = await postBankBookmarkApi(id);
      }
      if (apiResult !== undefined) {
        setIsLiked(!isLiked);
      } else {
        console.log('로그인 해주세요');
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      {cmaInfo && (
        <>
          <CmaGuide
            isLiked={isLiked}
            bankLogoUrl={cmaInfo.bankLogoUrl}
            productName={cmaInfo.productName}
            bankName={cmaInfo.bankName}
            rate={cmaInfo.maturityInterestRate}
            onHeartClick={() => onHeartClick(params.id, cmaInfo.isLiked)}
          />
          <div className='mt-25 px-15 py-17 w-342 gap-20 border rounded-8 tablet:w-438 tablet:py-22 tablet:px-20 tablet:rounded-10 tablet:mt-32 desktop:mt-63 desktop:py-44 desktop:px-40 desktop:w-855 desktop:gap-63 desktop:rounded-20 desktop:border-2 border-border02 dark:border-dark-border02 bg-secondary dark:bg-dark-secondary'>
            <CmaInfoGuide
              bankHomepageUrl={cmaInfo.bankHomepageUrl}
              maturityInterestRate={cmaInfo.maturityInterestRate}
              specialCondition={cmaInfo.specialCondition}
              joinWay={cmaInfo.joinWay}
              depositProtection={cmaInfo.depositProtection}
              etcNote={cmaInfo.etcNote}
              productUrl={cmaInfo.productUrl}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Des;
