async function order(id, name) {

  const qty = document.getElementById("q" + id).value;

  const data = {
    productId: id,
    productName: name,
    qty: Number(qty),

    fullName: prompt("الاسم الكامل"),
    phone: prompt("رقم الهاتف"),
    color: prompt("اللون"),
    size: prompt("المقاس"),
    wilaya: prompt("الولاية"),
    deliveryType: prompt("home / office"),

    productPrice: 0,
    deliveryPrice: 0,
    total: 0
  };

  await fetch(window.GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("تم إرسال الطلب ✅");
}
