export default (req, res) => {
  const { id } = req.query;

  res.status(200).json({
    id: Number(id),
    name: "Gabriel",
    email: "gabriel@oliveira.com",
  });
};
