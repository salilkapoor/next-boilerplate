import React from 'react';
import Head from 'next/head';

import RenderApp from '../src';

export const Index = () => (
  <>
    <Head>
      <title>Next js App</title>
      <meta
        name="description"
        content="next js boilerplate"
      />
    </Head>
    <RenderApp />
  </>
);

export default Index;
