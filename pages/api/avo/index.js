import DB from "../../../database/db"

const allAvos = async (req, res) => {
  const db = new DB()
  const allEntires = await db.getAll()
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ data: allEntires }));
};

export default allAvos;
