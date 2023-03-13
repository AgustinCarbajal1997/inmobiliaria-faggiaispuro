import { verify } from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export default async function handler(req, res) {
  const { cookies } = req;

  const jwt = cookies.faggiaispuroJWT;

  if (!jwt) {
    return res.status(400).json({ message: "Invalid tokennnn!!!" });
  }
  try {
    verify(jwt, secret);
    return res.status(200).json({ data: "Top secret data!" });
  } catch (error) {
    return res.status(401).json({ data: "Invalid tokennnn" });
  }
}
