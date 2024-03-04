const withTM = require("next-transpile-modules")(["middleware"]);
const modifyXRobotsTag = require("./pages/api/modifyXRobotsTag").default;

module.exports = withTM({
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "" }],
      },
    ];
  },
  async middleware() {
    return [modifyXRobotsTag];
  },
});
