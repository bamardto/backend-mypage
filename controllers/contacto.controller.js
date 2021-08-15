const nodemailer = require('nodemailer');

var controller = {
    form: function( req, res ){
        const { nombre, email, asunto, mensaje } = req.body;

        contentHTML = ` 
            <h1>Información del contacto</h1>
            <ul class="card">
                <li>Nombre: ${nombre}</li>
                <li>Email: ${email}</li>
                <li>Asunto: ${asunto}</li>
            </ul>
            <h2>Mensaje:<br><p>${mensaje}</p></h2>
        `;
        console.log(contentHTML);

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'bamardto@gmail.com',
                pass: 'Bmardones321'
            }
        });
        let mailOptions = {
            from: 'Contacto Web',
            to: 'bamardto@gmail.com',
            subject: 'Consulta',
            html: contentHTML
        }

        transporter.sendMail( mailOptions, (error, info) => {
            if(error){
                return console.log(error);
            }else{
                 console.log('Mensaje enviado' + info.messageId)
                 res.json({
                     ok: true,
                     msg: "Salio bien"
                 })
            }
        })
        
        return false;
    }
}
module.exports = controller;