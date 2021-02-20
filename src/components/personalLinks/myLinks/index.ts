import {
    LinkedIn as LinkedInIcon,
    Instagram as InstagramIcon,
    Facebook as FacebookIcon,
    WhatsApp as WhatsAppIcon,
    GitHub as GitHubIcon
} from "@material-ui/icons/"

interface myDatas {
    myLink: string,
    Icon: any,
    content: string
}

export const myLinks: myDatas[] = [
    {myLink: "https://www.linkedin.com/in/how-dev/", Icon: LinkedInIcon, content: "Linkedin: @how-dev "},
    {myLink: "https://www.instagram.com/how.dev/", Icon: InstagramIcon, content: "Instagram: @how.dev"},
    {myLink: "https://www.facebook.com/howard.ricardo.9", Icon: FacebookIcon, content: "Facebook: Howard"},
    {myLink: "https://api.whatsapp.com/send?phone=5561983089950&text=Ol%C3%A1!%20Eu%20gostaria%20de%20falar%20sobre%20trabalho.", Icon: WhatsAppIcon, content: "WhatsApp: (61) 98308-9950"},
    {myLink: "https://github.com/how-dev", Icon: GitHubIcon, content: "Github: how-dev"},
]

