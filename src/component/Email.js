import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
// export default function Email(props) {
//   const { fullname } = props;

//   return `
//   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//   <html xmlns="http://www.w3.org/1999/xhtml">
//   <head>
//   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
//   <title>CRM Message</title>
//   </head>

//   <body style="margin:0; padding:0; background-color:#F1F1F1;">
//   <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" >
//               <tr>
//                   <td align="center" valign="top">

//                       <table border="0" cellpadding="0" cellspacing="0" width="600" bgcolor="#FFFFFF" style="padding: 0px 20px;">
//                           <tr>
//                             <td align="left" valign="top">
//                   <!-- Body text -->
//   <table style="position: relative; table-layout: auto;" width="100%" cellspacing="0" cellpadding="0">
//                           <tbody>
//                             <tr ><td>

//                               </td></tr>
//                             <tr><td>
//                               </td></tr>
//                             <tr>
//                               <td><font style="font-family: 'Montserrat', Arial, sans-serif; color: #00000; font-size: 20px;"><strong>Thank you for your enquiry Mr ${fullname}<br />
//   </font></td>
//                           </tr>
//                       </tbody></table>
//                           <table style="position: relative; table-layout: auto; " width="100%" cellspacing="0" cellpadding="0">
//                           <tbody>
//                       <tr>
//                               <td style="padding-top: 30px; padding-bottom:10px; width: auto; font-family: 'Montserrat', Arial, sans-serif; font-size:14px; line-height:24px; color: #666666;">
//                                 I wanted to take a moment to express our sincere gratitude for reaching out to us. Your inquiry is important to us, and we are committed to providing you with the best assistance possible.
//   <br />
//   <br />
//   Our team is currently reviewing your message and will get back to you as soon as possible. We understand the importance of your query and assure you that we will do our utmost to address it promptly and effectively.
//   <br />
//   <br />
//   In the meantime, if you have any further questions or concerns, please don't hesitate to reach out to us. We are here to help!
//   <br />
//   <br />
//   Thank you once again for choosing Visionield. We truly appreciate your business and look forward to assisting you.
//                                 <br />
//                               </td>
//                           </tr>
//                       <tr>
//                               <td valign="top" style="padding-top: 10px; padding-bottom:10px; width: auto; font-family: 'Montserrat', Arial, sans-serif; font-size: 14px; color: #666666;">
//                               Yours sincerely</td>
//                           </tr>
//                       <tr>
//                               <td valign="top" style="padding-top: 10px; padding-bottom:30px; width: auto; color: #666666; font-family: 'Montserrat', Arial, sans-serif; font-size: 14px;"><strong>Westover Kia</strong><br />
//   Sales Advisor</td>
//                           </tr>
//                       </tbody></table>
//                     <!--Body text ends -->
//                               <!--Contact Details  -->
//                       <table width="100%" style="position: relative; table-layout: auto; " cellspacing="0" cellpadding="0">
//                         <tbody><tr>
//                           <td width="100%" align="left" valign="top" style="padding: 0px; width: 20px; ">
//                           <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" bgcolor="#FFFFFF" style="border-top:1px solid #dddddd;" >
//                           <tbody><tr>
//                                <td style="padding-bottom: 25px; padding-top: 10px; width: 200px;"><p style="font-family: 'Montserrat', Arial, sans-serif; font-size:12px; line-height:18px; color:#666666; padding:0; margin:0;"><b style="line-height: 30px;">Westover Kia Ferndown</b><br />
//                                 12, Kalpana Flats,<br /> B/H Narmada Guest House, <br /> Race Course Rd,<br /> Vadodara 390007. <br />
//                                  <a href="tel:+916359429294" style="line-height: 30px;">+91 6359429294</a>
//                               </p></td>
//                       <td valign="top" style="padding-bottom: 25px; padding-top: 45px; width: 200px;">

//                                 </td>
//                       <td>
//                       <a href="https://westovergroup.co.uk" target="_blank" ></a>
//                       </td>
//                           </tr>
//                       </tbody></table></td>
//                       </tbody></table>
//                         </tr>
//                    <!--Contact details Ends -->
//                         <!--Footer Starts -->
//                         <table style="table-layout: auto; display: inline; padding-left: 5px;" width="100%" cellspacing="0" cellpadding="0">
//                           <tbody>

//                               <tr><td style="font-family: 'Montserrat', Arial, sans-serif; font-size:12px; line-height:18px; color:#666666; padding:10px; margin:0; text-align: center;">
//                                 &copy; 2024 Visionield <br />
//                             <br /></td></tr>

//                           </tbody>
//                           </table>
//                         <!--Footer Ends -->
//     </body>
//   </html>
//   `;
// }
