const GOOGLE_SCRIPT_URL = "PUT_YOUR_SCRIPT_URL_HERE";

async function order(productId, productName) {

  const qty = document.getElementById("q" + productId).value;

  const fullName = prompt("الاسم الكامل");
  const phone = prompt("رقم الهاتف");
  const color = prompt("اللون");
  const size = prompt("المقاس");
  const wilaya = prompt("الولاية");
  const deliveryType = prompt("نوع التوصيل (home / office)");

  const data = {
    productId,
    productName,
    qty: Number(qty),

    fullName,
    phone,
    color,
    size,
    wilaya,
    deliveryType,

    productPrice: 0,
    deliveryPrice: 0,
    total: 0
  };

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    const result = await res.json();
    alert("تم إرسال الطلب بنجاح ✅");

  } catch (err) {
    console.error("خطأ في الإرسال:", err);
    alert("حدث خطأ في إرسال الطلب ❌");
  }
}
