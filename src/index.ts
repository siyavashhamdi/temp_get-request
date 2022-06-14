import * as express from "express";

const bootstrap = async () => {
  console.log("Started!");

  const app = express();

  const safeLog = (method: string, req: any, resp: any) => {
    const rndVal = Math.random();

    try {
      console.log({ SL: 17.01, rndVal, method, req });
    } catch (err) {
      console.log({ SL: -99.01, rndVal, method, err });
    }

    try {
      console.log({ SL: 17.02, rndVal, method, resp });
    } catch (err) {
      console.log({ SL: -99.02, rndVal, method, err });
    }

    try {
      console.log({ SL: 17.03, rndVal, method, jsonReq: JSON.stringify(req) });
    } catch (err) {
      console.log({ SL: -99.03, rndVal, method, err });
    }

    try {
      console.log({
        SL: 17.04,
        rndVal,
        method,
        jsonResp: JSON.stringify(resp),
      });
    } catch (err) {
      console.log({ SL: -99.04, rndVal, method, err });
    }

    console.log("\n\n\n------------------------------------------\n\n\n");
  };

  app.get("*", function (req, resp) {
    safeLog("GET", req, resp);

    resp.end();
  });

  app.post("*", function (req, resp) {
    safeLog("POST", req, resp);

    resp.end();
  });

  const port = process.env.PORT;

  app.listen(port, () =>
    console.log(`Server is running on localhost:${port}!`)
  );
};

bootstrap();
