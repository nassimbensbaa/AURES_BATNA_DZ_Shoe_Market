export default async function handler(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");

  const url = process.env.GOOGLE_SCRIPT_URL + "?action=delivery";

  const r = await fetch(url);
  const data = await r.json();

  res.status(200).json(data);
}
