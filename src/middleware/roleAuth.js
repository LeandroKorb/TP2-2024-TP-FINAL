import config from "../config.js"

export const roleAuth = (req, res, next) => {
     //console.log("HEADER: ", req.headers)
    const { role } = req.headers
    if(role == config.ROLE) {
        next()
    } else{
        res.send("Usuario no autorizado.")
    }
}