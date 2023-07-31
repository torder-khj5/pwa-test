import { requestProductLists } from '@api/products.ts';
import React, { useEffect, useState } from 'react';

interface IProduct {
  title: string;
  src: string;
  desc: string;
}

function MockingTestPage() {
  const [productList, setProductList] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await requestProductLists();
        setProductList(response.data.data);
      } catch (error) {
        console.log('error');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>MSW Mocking Test Page</div>
      {productList?.map(({ title }: IProduct) => {
        return <div key={'prod_' + title}>title is {title}</div>;
      })}
    </div>
  );
}

export default MockingTestPage;
