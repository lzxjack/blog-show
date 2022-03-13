import { useRequest } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import TimeItem from './TimeItem';

interface Log {
  _id: string;
  date: number;
  logContent: string[];
}

const Log: React.FC = () => {
  const { data, loading } = useRequest(getData, {
    defaultParams: [{ dbName: DB.Log, sortKey: 'date' }],
    retryCount: 3,
    cacheKey: DB.Log,
    staleTime
  });

  return (
    <Layout title={Title.Log} loading={loading}>
      {data?.data.map(({ _id, date, logContent }: Log) => (
        <TimeItem key={_id} date={date} logContent={logContent} />
      ))}
    </Layout>
  );
};

export default Log;