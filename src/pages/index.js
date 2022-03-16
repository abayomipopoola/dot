import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import Seo from 'components/seo';
import Banner from 'sections/banner';
import WhyChoose from 'sections/why-choose';
import Products from 'sections/products';
import DotPay from 'sections/dot-pay';
import DotBank from 'sections/dot-bank';
import DotInsure from 'sections/dot-insure';
import Careers from 'sections/careers';
import CallToAction from 'sections/call-to-action';
import Layout from 'components/layout';

import 'rc-drawer/assets/index.css';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <Seo
          title="Dot Financial Inclusion Technologies"
          description="We are a digital financial services platform serving the next billion in emerging markets starting with Nigeria"
        />
        <Banner />
        <WhyChoose />
        <Products />
        <DotPay />
        <DotBank />
        <DotInsure />
        <Careers/>
        <CallToAction />
      </Layout>
    </StickyProvider>
  );
}
