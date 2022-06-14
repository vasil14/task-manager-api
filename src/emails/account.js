const mailgun = require("mailgun-js");
const { default: isEmail } = require("validator/lib/isEmail");

const api_key = process.env.SENDMAILGUN_API_KEY;
const DOMAIN = "sandboxbda8e7ee059a4ca1a7caf5bffb445a12.mailgun.org";
const mg = mailgun({ apiKey: api_key, domain: DOMAIN });

// TEST
// const data = {
//   from: "Excited User <jhiuhpij@srv1.mail-tester.com>",
//   to: "vasil_v@hotmail.com",
//   subject: "Hello",
//   text: "Testing some Mailgun awesomness!",
// };
// mg.messages().send(data, function (error, body) {
//   console.log(body);
//   console.log(error);
// });

const sendWelcomeEmail = (email, name) =>{
  mg.messages().send(
    {
      from: "<jfg@example.com>",
      to: email,
      subject: "Welcome!",
      text: `Thanks for joining in, ${name}. Let me know how you get along with the app.`,
    },
    function (error, body) {
      console.log(body);
      console.log(error);
    }
  );
}

const sendGoodbyeEmail = (email,name) => {
  mg.messages().send(
    {
      from: "<jfg@example.com>",
      to: email,
      subject: "Goodbye!",
      text: `Goodbye ${name}. Is there anything we could have done to keep you on board?`
    },
    function (error, body) {
      console.log(body);
      console.log(error);
    }
  );
}


module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail,
};