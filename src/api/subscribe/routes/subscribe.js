module.exports = {
  routes: [
    {
      method: "POST",
      path: "/subscribe",
      handler: "subscribe.create",
      config: {
        policies: [],
      },
    },
  ],
};
