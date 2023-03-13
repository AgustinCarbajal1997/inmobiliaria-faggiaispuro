import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.JWT_SECRET;
const server_username = process.env.USERNAME;
const server_password = process.env.PASSWORD;

export default async function handler(req, res) {
  const { username, password } = req.body;
  if (username === server_username && password === server_password) {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        username,
      },
      secret
    );
    const serialized = serialize("faggiaispuroJWT", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({ message: "Success" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
