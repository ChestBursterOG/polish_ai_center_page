import Script from 'next/script';

const GoogleAnalytics = () => {

  return (
    <div>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4MPYP3NRJ0"></Script>
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4MPYP3NRJ0');
        `}
      </Script>
    </div>
  );
};

export default GoogleAnalytics;