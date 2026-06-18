
export default async function handler(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");

  const r = await fetch(process.env.GOOGLE_SCRIPT_URL,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(req.body)
  });

  const result = await r.text();

  res.status(200).json({ok:true,result});
}
