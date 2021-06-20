import React from 'react';

import { AppProps } from "next/app";
import Head from "next/head";

// import "../assets/style.scss";

// export default class CustomApp extends React.Component<AppProps> {
//   render() {
//     console.log('---------------------this.props', this.props);

//     return (
//       <div className="root-app">
//         <Head>
//           <title>Create Next App</title>
//           <link rel="icon" href="/favicon.ico" />
//           <link rel="stylesheet" href="/css/global.css" />
//         </Head>
//         <this.props.Component {...this.props.pageProps} />
//       </div>
//     )
//   }
// }

const CustomAppFC: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="root-app">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/global.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default CustomAppFC;