export  const updateProfile = (req , res  ) => {
    res.status(200).send({
        status : " success",
        msg : " update profile successfully"
    })
}

export const getProfile = (req , res ) => {
    res.status(200).send({
        status : " success",
        message : 'user data get successfully'
    })
}
// profilecontroller