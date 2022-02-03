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
import Banner1 from "sections/banner1";

export default function IndexPage() {
  const router = useRouter();
  const [variant, setVariant] = React.useState(0);

  React.useEffect(async () => {
    console.log("variant", variant);
    const handleRouteChange = (url) => {
      pageview(url);
    };

    if (window.dataLayer) {
      await window.dataLayer.push({ event: "optimize.activate" });
    }

    const intervalId = setInterval(() => {
      if (window.google_optimize !== undefined) {
        const variant = window.google_optimize.get("65elEA0zTVyfg-IGET3tYA");
        setVariant(variant);
        clearInterval(intervalId);
      }
    }, 100);

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
            title="Get your free CNDD link"
            description="Now claim your candid store and share product recommendations seamlessly. Earn money when people buy from your store"
          />
          {variant ? <Banner /> : <Banner1 />}
          <Features />
          {/* <FaqOne /> */}
          <ProductFeature />
          {/* <Services /> */}
          <Pricing />
          {/* <CustomerSupport />
          <Video /> */}
          <FaqTwo />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
