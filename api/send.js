
const GOOGLE_SCRIPT_URL = "PUT_YOUR_SCRIPT_URL_HERE";

async function order(productId, productName) {

  const qty = document.getElementById("q" + productId).value;

  const data = {
    productId,
    productName,
    qty: Number(qty),

    fullName: prompt("الاسم الكامل"),
    phone: prompt("رقم الهاتف"),
    color: prompt("اللون"),
    size: prompt("المقاس"),
    wilaya: prompt("الولاية"),
    deliveryType: prompt("التوصيل (home / office)"),

    productPrice: 0,
    deliveryPrice: 0,
    total: 0
  };

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("تم إرسال الطلب بنجاح ✅");
}
