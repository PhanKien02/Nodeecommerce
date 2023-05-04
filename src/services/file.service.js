const path  = require('path')
const uploadFile = (fileUpload) =>{
    let uploadPath;

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const myFile = `${Buffer.from(fileUpload.name).toString('base64')}${path.extname(fileUpload.name)}`;
    console.log("myFile",myFile);
    uploadPath = "./src/image/" + myFile;

    // Use the mv() method to place the file somewhere on your server
    try {
        fileUpload.mv(uploadPath)
        return{
            Message:"file upload",
            pathUpload: uploadPath,
            pathService: `http://localhost:8080/images/${myFile}`
        }
    } catch (error) {
        return {
                Error: err,
                Message: "error"
            };
    }

}

module.exports= {uploadFile}