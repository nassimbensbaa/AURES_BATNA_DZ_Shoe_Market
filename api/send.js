export default async function handler(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers","Content-Type");

  if(req.method==="OPTIONS")
    return res.status(200).end();

  if(req.method!=="POST")
    return res.status(405).json({ok:false});

  try{

    const response = await fetch(
      process.env.GOOGLE_SCRIPT_URL,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(req.body)
      }
    );

    const result = await response.text();

    res.status(200).json({
      ok:true,
      result
    });

  }catch(err){

    res.status(500).json({
      ok:false,
      error:err.message
    });

  }

}
