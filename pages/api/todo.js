let list = ["Item 1", "Item 2", "Item 3"];

export default async (req, res) => {
  if (req.query.add) {
    if (!list.includes(req.query.add)) {
      list.push(req.query.add);
    }
  } else if (req.query.clear) {
    list = [];
  }

  res.status(200).json(list);
};
