import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/api", (_req, res) => {
  res.send("get");
});

app.post("/api", (req, res) => {
  const { name } = req.body;
  res.json({ post: `hello ${name}` });
});

app.listen(port, () => {
  console.log(`server is running at https://localhost:${port}`);
});
