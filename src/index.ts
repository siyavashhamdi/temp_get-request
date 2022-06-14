import * as express from "express";

const bootstrap = async () => {
  console.log("Started!");

  const app = express();

  app.get("*", function (req, res) {
    console.log({ msg: "get_all", url: req.url, req, res });

    res.end();
  });

  app.post("*", function (req, res) {
    console.log({ msg: "post_all", url: req.url, req, res });

    res.end();
  });

  app.listen(80, () => console.log("Server is running on localhos!"));
};

bootstrap();
