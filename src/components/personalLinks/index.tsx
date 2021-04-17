import React from "react";

interface Props {
    allTheme: {
        primary: string,
        secondary: string,
        profilePhoto: string,
        boxTitle: string,
        bodyAboutMe: string,
        mySkills: string,
        geralBox: string,
        inferior: string,
        inferiorTitle: string
    },
    myLink: string,
    Icon: any,
    content: string
}

const PersonalLinks: React.FC<Props> = ({ allTheme, myLink, Icon, content }) => {
    return (
        <a
            className={allTheme.secondary}
            href={myLink}
            rel="noreferrer"
            target="_blank"
        >
            <Icon/> {content}
        </a>
    );
};

export default PersonalLinks;
