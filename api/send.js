export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const order = req.body;

  // رقم طلب عشوائي
  const orderNumber = "ORD-" + Date.now();

  console.log("📦 New Order:", order);

  // هنا لاحقاً يمكن ربط:
  // - Google Sheets
  // - WhatsApp
  // - Email

  res.status(200).json({
    ok: true,
    orderNumber: orderNumber
  });
}
