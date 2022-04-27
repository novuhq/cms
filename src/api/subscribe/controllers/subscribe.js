const Mailchimp = require("mailchimp-api-v3");

module.exports = {
  create: async (ctx) => {
    const { email } = ctx.request.body;

    if (!email) {
      ctx.status = 400;
      ctx.body = "Email is required";
      return;
    }

    try {
      const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

      const response = await mailchimp.request({
        method: "post",
        path: "/lists/2f2adc30e0/members",
        body: {
          email_address: email,
          status: "subscribed",
        },
      });

      const { _links, ...res } = response;

      ctx.status = res.statusCode;
      ctx.body = JSON.stringify(res);
    } catch (err) {
      ctx.status = err.status;
      ctx.body = err.detail;
    }
  },
};
