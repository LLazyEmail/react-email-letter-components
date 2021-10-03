import React, { Fragment } from 'react';

const HeadStyles = () => (
  <Fragment>
  
  <style dangerouslySetInnerHTML={{__html: `
      /* CLIENT-SPECIFIC STYLES */
      #outlook a{padding:0;} /* Force Outlook to provide a "view in browser" message */
      .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */
      .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */
      body, table, td, a{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */
      table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */
      img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */
      /* RESET STYLES */
      body{margin:0; padding:0;}
      img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
      table{border-collapse:collapse !important;}
      body{height:100% !important; margin:0; padding:0; width:100% !important;}
      /* iOS BLUE LINKS */
      .appleBody a {color:#68440a; text-decoration: none;}
      .appleFooter a {color:#999999; text-decoration: none;}
      /* MOBILE STYLES */
      @media screen and (max-width: 666px) {
      /* ALLOWS FOR FLUID TABLES */
      /*table[class="wrapper"]*/
      /* ADJUSTS LAYOUT OF LOGO IMAGE */
      td[class="logo"]{
      text-align: left;
      padding: 20px 0 20px 0 !important;
      }
      td[class="logo"] img{
      margin:0 auto!important;
      }
      /* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */
      td[class="mobile-hide"]{
      display:none;}
      img[class="mobile-hide"]{
      display: none !important;
      }
      /*img[class="img-max"]*/
      /* FULL-WIDTH TABLES */
      /*table[class="responsive-table"]*/
      /* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */
      td[class="padding"]{
      padding: 10px 5% 15px 5% !important;
      }
      /*td[class="padding-copy"]*/
      td[class="padding-meta"]{
      padding: 30px 5% 0px 5% !important;
      text-align: center;
      }
      td[class="no-pad"]{
      padding: 0 0 20px 0 !important;
      }
      td[class="no-padding"]{
      padding: 0 !important;
      }
      /*td[class="section-padding"]*/
      td[class="section-padding-bottom-image"]{
      padding: 50px 15px 0 15px !important;
      }
      /* ADJUST BUTTONS ON MOBILE */
      /*td[class="mobile-wrapper"]*/
      table[class="mobile-button-container"]{
      margin:0 auto;
      width:100% !important;
      }
      a[class="mobile-button"]{
      width:80% !important;
      padding: 15px !important;
      border: 0 !important;
      font-size: 16px !important;
      }
      }
      `}}></style>
 
  </Fragment>>
);

export default HeadStyles;