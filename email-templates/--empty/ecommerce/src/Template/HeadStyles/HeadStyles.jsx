import React, { Fragment } from 'react';

const HeadStyles = () => (
  <Fragment>
  
  <style dangerouslySetInnerHTML={{__html: `
        @media screen {
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 400;
            src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 400;
            src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 500;
            src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 500;
            src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnZKveQhf6Xl7Gl3LX.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 700;
            src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 700;
            src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnLK3eQhf6Xl7Gl3LX.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 800;
            src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 800;
            src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
        }
      
        #outlook a {
          padding: 0;
        }
      
        .ExternalClass,
        .ReadMsgBody {
          width: 100%;
        }
      
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass td,
        .ExternalClass div,
        .ExternalClass span,
        .ExternalClass font {
          line-height: 100%;
        }
      
        div[style*="margin: 14px 0;"],
        div[style*="margin: 16px 0;"] {
          margin: 0 !important;
        }
      
        @media only screen and (min-width:621px) {
          .pc-container {
            width: 620px !important;
          }
        }
      
        @media only screen and (max-width:620px) {
          .pc-menu-logo-s2,
          .pc-menu-nav-s1 {
            padding-right: 30px !important;
            padding-left: 30px !important;
          }
          .pc-cta-box-s4 .pc-cta-box-in {
            padding: 35px 30px 30px !important;
          }
          .pc-products-box-s4 {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          .pc-heading-s2 .pc-heading-col {
            width: 100% !important;
          }
          .pc-products-row-s1 .pc-products-row-col {
            max-width: 50% !important;
          }
          .pc-footer-box-s1 {
            padding-right: 10px !important;
            padding-left: 10px !important;
          }
          .pc-footer-row-s1 .pc-footer-row-col {
            max-width: 100% !important;
          }
          .pc-spacing.pc-m-footer-h-57 td,
          .pc-spacing.pc-m-footer-h-46 td {
            height: 20px !important;
            line-height: 20px !important;
            font-size: 20px !important;
          }
        }
      
        @media only screen and (max-width:525px) {
          .pc-menu-logo-s2,
          .pc-menu-nav-s1 {
            padding-right: 20px !important;
            padding-left: 20px !important;
          }
          .pc-menu-logo-s2 {
            padding-top: 25px !important;
            padding-bottom: 25px !important;
          }
          .pc-menu-nav-s1 .pc-menu-nav-divider {
            padding: 0 !important;
          }
          .pc-cta-box-s4 .pc-cta-box-in {
            padding: 25px 20px 20px !important;
          }
          .pc-cta-s1 .pc-cta-title {
            font-size: 24px !important;
            line-height: 1.42 !important;
          }
          .pc-cta-title br,
          .pc-cta-text br {
            display: none !important;
          }
          .pc-products-box-s4 {
            padding: 15px 0 25px !important;
          }
          .pc-products-row-s1 .pc-products-row-col {
            max-width: 100% !important;
          }
          .pc-footer-box-s1 {
            padding: 5px 0 !important;
          }
          .pc-footer-text-s1 br {
            display: none !important;
          }
        }
      
      `}}></style>
 
  </Fragment>
);

export default HeadStyles;