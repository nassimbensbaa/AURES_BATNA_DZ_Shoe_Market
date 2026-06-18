export default async function handler(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");

  const r = await fetch(process.env.GOOGLE_SCRIPT_URL + "?action=products");
  const data = await r.json();

  res.status(200).json(data);
}
