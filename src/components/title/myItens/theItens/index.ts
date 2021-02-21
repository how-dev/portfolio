import ContactsIcon from "@material-ui/icons/Contacts";
import FaceIcon from "@material-ui/icons/Face";
import PersonIcon from "@material-ui/icons/Person";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import WorkIcon from "@material-ui/icons/Work";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";

export const theItems: {myTo: string, myPrimary: string, MyIcon: any}[] = [
    {myTo: "contacts", myPrimary: "Contatos", MyIcon: ContactsIcon},
    {myTo: "aboutMe", myPrimary: "Quem sou eu", MyIcon: FaceIcon},
    {myTo: "hardskills", myPrimary: "HardSkills", MyIcon: PersonIcon},
    {myTo: "softskills", myPrimary: "SoftSkills", MyIcon: NaturePeopleIcon},
    {myTo: "works", myPrimary: "Trabalhos", MyIcon: WorkIcon},
    {myTo: "top", myPrimary: "Ir ao topo", MyIcon: VerticalAlignTopIcon},
]