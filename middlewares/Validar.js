var Userdb = require('../server/model/model')
const validar = async (req, res, next)=>{
    try {
        const userDb= await Userdb.findById(req.params.id);
        if (userDb != null) {
            next();
        } else {
            res.json({msg:"id invalido"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
    
}

module.exports = {validar}