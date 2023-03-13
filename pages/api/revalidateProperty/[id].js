export default async function handler(req, res) {
    if (req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_TOKEN) {
      return res.status(401).json({ message: "Invalid token" });
    }
    try {
      await res.unstable_revalidate(`/propiedades/${req.query.id}`);
      return res.json({ revalidated: true });
    } catch (err) {
      return res.status(500).send("Error revalidating");
    }
  }
  