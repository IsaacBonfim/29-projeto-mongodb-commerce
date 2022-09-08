db.produtos.updateOne({
  nome: "Cheddar McMelt",
}, {
  $pop: { ingredientes: 1 },
});

use("commerce");
db.produtos.find({}, {
  _id: false,
  nome: true,
  ingredientes: true,
});
