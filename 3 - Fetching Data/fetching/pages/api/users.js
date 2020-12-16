export default (req, res) => {
  return res.status(200).json([
    {
      id: 1,
      name: "Gabriel",
      email: "gabriel@oliveira.com",
    },
  ]);
};
