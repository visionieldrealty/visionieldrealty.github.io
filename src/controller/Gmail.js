// import nodemailer from "nodemailer";
// import Email from "../component/Email";
// import { render } from "@testing-library/react";

// // const transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   host: "smtp.gmail.net",
// //   port: 587,
// //   secure: false,
// //   auth: {
// //     user: `aadeyshah55@gmail.com`,
// //     pass: `cmxx zuzb mfxs sbho`,
// //   },
// // });

// export const sendMailCustomer = async (props) => {
//   // try {
//   //   const { fullname, email, message, contact } = props;
//   //   // const emailHtml = Email({ fullname });
//   //   const options = {
//   //     from: `aadeyshah55@gmail.com`,
//   //     to: `aadeyshah55@gmail.com`,
//   //     subject: "Thank you for contacting Visionield",
//   //     html: render(<Email />),
//   //   };
//   //   transporter.sendMail(options);
//   // } catch (error) {
//   //   console.log(`something went wrong`);
//   // }
// };

// import { render } from "@react-email/render";
// import nodemailer from "nodemailer";
// import { Email } from "../component/Email";

// const sendMailCustomer = async (props) => {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.net",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "aadeyshah55@gmail.com",
//       pass: "cmxx zuzb mfxs sbho",
//     },
//   });

//   const emailHtml = render(<Email url="https://example.com" />);

//   const options = {
//     from: "aadeyshah55@gmail.com",
//     to: "aadeyshah55@gmail.com",
//     subject: "hello world",
//     html: emailHtml,
//   };

//   await transporter.sendMail(options);
// };
