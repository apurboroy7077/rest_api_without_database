let app = require("./App");
let envProcess = require("dotenv");
envProcess.config();
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Deployed at http://localhost:${PORT}`);
});
