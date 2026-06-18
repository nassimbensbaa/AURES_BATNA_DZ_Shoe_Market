function getAPI() {
  return document.getElementById("app").dataset.api;
}

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

  try {
    await fetch(getAPI(), {
      method: "POST",
      body: JSON.stringify(data)
    });

    alert("تم إرسال الطلب بنجاح ✅");

  } catch (err) {
    console.error("Order error:", err);
    alert("خطأ في إرسال الطلب ❌");
  }
}
