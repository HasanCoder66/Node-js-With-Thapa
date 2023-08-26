export  const login = (req , res) => {
   console.log('user ki registration ki api');
   console.log(req.body);
    res.status(200).send({
        status : "Success" ,
        msg : " user logged insuccessfully"
    })
}


export  const register = (req , res) => {
   
    console.log(req.body);
    res.status(200).send({
        status : 'user signup in successfully' ,
        msg : " i have the get auth Testings"
    })
}


