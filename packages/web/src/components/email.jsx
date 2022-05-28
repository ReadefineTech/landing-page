import {Mailer} from 'nodemailer-react'

const hostname = process.env.REACT_APP_SMTP_HOST;
const username = process.env.REACT_APP_SMTP_USER;
const pswd = process.env.REACT_APP_SMTP_PASS;
const emailPort = 465;


const email = ({firstname, task}) =>({
    subject: `Test email`,
    body:(
    <div>
        <p> Hello</p>
            <p>{`This is a test email from ${username}`}</p>
    </div>
    )
})


const transport = {
        host: hostname,
        port: emailPort,
        secure: true,
        requireTLS: true,
        auth:{user: username, pass:pswd}
}

const defaults = {
    from:username
}

// type Email = (props: object)=>({
//     subject: String,
//     body: ReactElement
// })

const EmailTemplate = () => ({
    subject: `Test email`,
    body:(
        <div>
            <p>Hi</p>
            <p>This is a test email</p>
        </div>
    )
})



const mailer = Mailer(
    {transport, defaults},
    {EmailTemplate}
)

export async function sendEmail(emailTo){

    mailer.send('EmailTemplate',{},{
        to: emailTo
    })

}

