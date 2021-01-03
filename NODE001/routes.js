const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write('<meta charset="utf-8"/>');
    res.write("<title>NODE001</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Enter a [new] message:</h1>");
    res.write(
      '<form action="/message" method="POST">Message: <input type="text" name="message"><button type="submit">Kuldes</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    // parse the request data:
    const body = [];
    req.on("data", (dataChunk) => {
      console.log(dataChunk);
      body.push(dataChunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      //console.log("parsedBody: " + parsedBody);
      const msg = parsedBody.split("=")[1];
      // Instead of sync write we use async, but in this case (of course) we need
      // a callabck as well...
      fs.writeFile("NODE001/msg.TXT", msg, (err) => {
        if (err !== null) {
          console.err("File writing FAILED.");
          res.writeHead(500, { Location: "/" });
          return res.end("<h1>HIBA</h1>");
        }
        res.writeHead(302, { Location: "/" });
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write('<meta charset="utf-8"/>');
  res.write("<title>NODE001</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>NODEjs In WORK :)</h1>");
  res.write("</body>");
  res.write("</html>");

  res.end();
};

module.exports = { handler: requestHandler, someText: "Just some messsage" };
// module.exports.handler = requestHandler;
// module.exports.someText ='Ide jon a text ...';
