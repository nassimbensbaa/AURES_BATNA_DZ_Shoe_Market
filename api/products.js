export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const data = {
    products: [
      {
        id: 1,
        name: "Nike Air",
        price: 2500,
        color: "أبيض",
        size: 42,
        qty: 10,
        image: "nassim01.png"
      },
      {
        id: 2,
        name: "Nike Air",
        price: 2600,
        color: "أبيض",
        size: 43,
        qty: 5,
        image: "nassim02.png"
      },
      {
        id: 3,
        name: "Nike Air",
        price: 2700,
        color: "أسود",
        size: 42,
        qty: 8,
        image: "nassim03.png"
      }
    ],

    delivery: [
      { wilaya: "الجزائر", home: 400, office: 250 },
      { wilaya: "البليدة", home: 350, office: 200 },
      { wilaya: "وهران", home: 500, office: 300 }
    ]
  };

  res.status(200).json(data);
}
