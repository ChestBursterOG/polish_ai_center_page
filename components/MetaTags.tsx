import React from 'react';
import Head from 'next/head';

interface MetaTagsProps {
  title: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({title}) => {


    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/CPU-lightnings.gif" type="image/x-icon" />
            <meta charSet="UTF-8" />
            <meta name="description" content="PCSI - Polskie Centrum Sztucznej Inteligencji" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="PCSI" />
            <meta name="keywords" content="Sztuczna inteligencja, AI, innowacje iechnologiczne, technologie przyszłości, automatyzacja, świadomość, edukacja, rozwój" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="PCSI" />
            <meta property="og:description" content="PCSI - Polskie Centrum Sztucznej Inteligencji" />
            <meta property="og:image" content="/PCSI - logo.png" />
            <meta property="og:url" content="https://www.polskiecentrumsi.pl" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="PCSI" />
            <meta name="twitter:description" content="Technology driving your future" />
            <meta name="twitter:image" content="/PCSI - logo.png" />
        </Head>
    );
}

export default MetaTags;
