const UploadFile = require("../services/file.service")

const uploadFile = (req,res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    const upload = UploadFile.uploadFile(req.files.Myfile)
    return res.status(200).json(upload)
}
module.exports= {uploadFile}