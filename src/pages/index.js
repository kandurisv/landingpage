import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Features from "sections/features";
import FaqOne from "sections/faq-one";
import FaqTwo from "sections/faq-two";
import Video from "sections/video";
import Pricing from "sections/pricing";
import Services from "sections/services";
import ProductFeature from "sections/product-feature";
import CustomerSupport from "sections/customer-support";
import { pageview, event } from "analytics/ga";

export default function IndexPage() {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            title="Startup Hosting Classic Landing"
            description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
          />
          <Banner />
          <Features />
          <FaqOne />
          <ProductFeature />
          <Services />
          <Pricing />
          <CustomerSupport />
          <Video />
          <FaqTwo />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
