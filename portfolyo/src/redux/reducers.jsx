export const NavbarR = (state = 0, action) => {
    switch (action.type) {
        case "choosenav":
            return action.payload;
        default:
            return state;
    }
};
export const NavbarBg = (state = "#000", action) => {
    switch (action.type) {
        case "choosebg":
            return action.payload;
        default:
            return state;
    }
};
export const NavbarIconColor = (state = "#fff", action) => {
    switch (action.type) {
        case "chooseiconcolor":
            return action.payload;
        default:
            return state;
    }
};
export const IconColor = (state = "#fff", action) => {
    switch (action.type) {
        case "iconcolor":
            return action.payload;
        default:
            return state;
    }
};
export const onScrollBg = (state = "#000", action) => {
    switch (action.type) {
        case "onscrollbg":
            return action.payload;
        default:
            return state;
    }
};
export const NavHoverColor = (state = "#fff", action) => {
    switch (action.type) {
        case "navhovercolor":
            return action.payload;
        default:
            return state;
    }
};
export const HomeIconText = (state = "HOME", action) => {
    switch (action.type) {
        case "sethome":
            return action.payload;
        default:
            return state;
    }
};
export const ArticleIconText = (state = "Education", action) => {
    switch (action.type) {
        case "setarticle":
            return action.payload;
        default:
            return state;
    }
};
export const ProjectIconText = (state = "Projects", action) => {
    switch (action.type) {
        case "setproject":
            return action.payload;
        default:
            return state;
    }
};

export const AboutIconText = (state = "About", action) => {
    switch (action.type) {
        case "setabout":
            return action.payload;
        default:
            return state;
    }
};
export const ContactIconText = (state = "Contact", action) => {
    switch (action.type) {
        case "setcontact":
            return action.payload;
        default:
            return state;
    }
};
export const NavbarIconText = (state = "Navbar", action) => {
    switch (action.type) {
        case "setnavbar":
            return action.payload;
        default:
            return state;
    }
};

export const profileSectionBackground = (state = 2, action) => {
    switch (action.type) {
        case "setBackground":
            return action.payload;
        default:
            return state;
    }
};

export const profileSectionBackgroundColor = (state = "#000000", action) => {
    switch (action.type) {
        case "profileSectionBackgroundColor":
            return action.payload;
        default:
            return state;
    }
};

export const encryptBackgroundWords = (
    state = ["Hardworking", "Compititive", "Smart", "Intellignet"],
    action
) => {
    switch (action.type) {
        case "setencryptBackgroundWords":
            return action.payload;
        default:
            return state;
    }
};

export const AvatarCrop = (state = false, action) => {
    switch (action.type) {
        case "profileSectionBackgroundImage":
            return action.payload;
        default:
            return state;
    }
};
export const TabPointer = (state = 0, action) => {
    switch (action.type) {
        case "tabpointer":
            return action.payload;
        default:
            return state;
    }
};
export const OpenEditor = (state = false, action) => {
    switch (action.type) {
        case "openeditor":
            return action.payload;
        default:
            return state;
    }
};
export const ProfilePicture = (state = "", action) => {
    switch (action.type) {
        case "profilepicture":
            return action.payload;
        default:
            return state;
    }
};

export const UsernameP = (state = "Username", action) => {
    switch (action.type) {
        case "usernamep":
            return action.payload;
        default:
            return state;
    }
};
export const DescribeP = (state = "Description", action) => {
    switch (action.type) {
        case "describep":
            return action.payload;
        default:
            return state;
    }
};
export const AddressP = (state = "Address", action) => {
    switch (action.type) {
        case "addressp":
            return action.payload;
        default:
            return state;
    }
};
export const UsernameFontP = (state = "open sans", action) => {
    switch (action.type) {
        case "usernamefontp":
            return action.payload;
        default:
            return state;
    }
};
export const DescribeFontP = (state = "open sans", action) => {
    switch (action.type) {
        case "describefontp":
            return action.payload;
        default:
            return state;
    }
};
export const AddressFontP = (state = "open sans", action) => {
    switch (action.type) {
        case "addressfontp":
            return action.payload;
        default:
            return state;
    }
};

export const ButtonStyleP = (state = "contained", action) => {
    switch (action.type) {
        case "buttonstylep":
            return action.payload;
        default:
            return state;
    }
};

export const DButtonColorP = (state = "#f50057", action) => {
    switch (action.type) {
        case "dbuttoncolorp":
            return action.payload;
        default:
            return state;
    }
};

export const HButtonColorP = (state = "#1769aa", action) => {
    switch (action.type) {
        case "hbuttoncolorp":
            return action.payload;
        default:
            return state;
    }
};

export const DTextColorP = (state = "#fff", action) => {
    switch (action.type) {
        case "dtextcolorp":
            return action.payload;
        default:
            return state;
    }
};

export const HTextColorP = (state = "#fff", action) => {
    switch (action.type) {
        case "htextcolorp":
            return action.payload;
        default:
            return state;
    }
};

export const dpStructureP = (state = 0, action) => {
    switch (action.type) {
        case "dpstructurep":
            return action.payload;
        default:
            return state;
    }
};

export const layoutp = (state = 1, action) => {
    switch (action.type) {
        case "layoutp":
            return action.payload;
        default:
            return state;
    }
};

export const alignp = (state = 1, action) => {
    switch (action.type) {
        case "alignp":
            return action.payload;
        default:
            return state;
    }
};

export const openbackgroundp = (state = false, action) => {
    switch (action.type) {
        case "openbackgroundp":
            return action.payload;
        default:
            return state;
    }
};

export const aboutSectionBackground = (
    state = {
        backgroundType: 0,
        backgroundColor: "#ffffff",
        backgroundDesignType: 0,
        imageBorderColor: "#000000",
        backgroundTransition: "none",
        aboutSectionTitleAlignment: "middle",
        aboutSectionImageBorderColor: "#000000",
        aboutSectionTitle: {
            text: "About",
            fontStyle: "Open Sans",
            color: "#000000",
        },
        aboutSectionIntro: {
            text: "⚡ Introduce youself In a Sentance",
            fontStyle: "Abel",
            color: "#000000",
        },
        aboutSectionImageTitle: {
            text: "✨ Image Title",
            fontStyle: "open Sans",
            color: "#000000",
        },
        aboutSectionSocialMediaTitle: {
            text: "✨ Catch me On",
            fontStyle: "open Sans",
            color: "#000000",
        },
        aboutSectionPassage: {
            text: "A brief explanation about yourself Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorum velit, dignissimos incidunt nostrum repellat deserunt officia, exercitationem ad neque, quam assumenda earum alias provident atque ab similique amet fugit. Quam omnis, ipsa hic sit praesentium voluptatem veniam delectus dignissimos nam impedit itaque neque veritatis obcaecati at doloremque laboriosam enim distinctio voluptates. Autem neque doloribus culpa quae inventore dolore veniam.",
            fontStyle: "Open Sans",
            color: "#000000",
        },
        aboutSectionBasicInfo: {
            title: {
                text: "✨ Basic Information",
                fontStyle: "Open Sans",
                color: "#000000",
            },
            keys: {
                fontStyle: "Open Sans",
                color: "#000000",
            },
            values: {
                text: {
                    age: "26",
                    email: "example@gmail.com",
                    phone: "1234567890",
                    address:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi a",
                    languages: "English, Telugu",
                },
                fontStyle: "Open Sans",
                color: "#000000",
            },
        },
        aboutSectionSocialMediaLinks: {
            instagram: "https://www.instagram.com/deepesh_dragoneel/",
            gmail: "https://mail.google.com/mail/u/0/",
            linkedIn: "https://www.linkedin.com/",
            github: "https://github.com/",
        },
    },
    action
) => {
    switch (action.type) {
        case "aboutSectionBackgroundChange":
            return (state = {
                ...state,
                backgroundType: action.payload,
            });
        case "aboutSectionBackgroundColorChange":
            return (state = {
                ...state,
                backgroundColor: action.payload,
            });
        case "aboutSectionBackgroundDesignChange":
            return (state = {
                ...state,
                backgroundDesignType: action.payload,
            });
        case "aboutSectionImageBorderColor":
            return (state = {
                ...state,
                imageBorderColor: action.payload,
            });
        case "aboutSectionTransitionChanger":
            return (state = {
                ...state,
                backgroundTransition: action.payload,
            });
        case "aboutSectionTitleAlignmentChanger":
            return (state = {
                ...state,
                aboutSectionTitleAlignment: action.payload,
            });
        case "aboutSectionTitleTextChange":
            return (state = {
                ...state,
                aboutSectionTitle: {
                    ...state.aboutSectionTitle,
                    text: action.payload,
                },
            });
        case "aboutSectionTitleFontStyleChange":
            return (state = {
                ...state,
                aboutSectionTitle: {
                    ...state.aboutSectionTitle,
                    fontStyle: action.payload,
                },
            });
        case "aboutSectionTitleColorChange":
            return (state = {
                ...state,
                aboutSectionTitle: {
                    ...state.aboutSectionTitle,
                    color: action.payload,
                },
            });
        case "aboutSectionIntroTextChange":
            return (state = {
                ...state,
                aboutSectionIntro: {
                    ...state.aboutSectionIntro,
                    text: action.payload,
                },
            });
        case "aboutSectionIntroFontStyleChange":
            return (state = {
                ...state,
                aboutSectionIntro: {
                    ...state.aboutSectionIntro,
                    fontStyle: action.payload,
                },
            });
        case "aboutSectionIntroColorChange":
            return (state = {
                ...state,
                aboutSectionIntro: {
                    ...state.aboutSectionIntro,
                    color: action.payload,
                },
            });
        case "aboutSectionPassageTextChange":
            return (state = {
                ...state,
                aboutSectionPassage: {
                    ...state.aboutSectionPassage,
                    text: action.payload,
                },
            });
        case "aboutSectionPassageFontStyleChange":
            return (state = {
                ...state,
                aboutSectionPassage: {
                    ...state.aboutSectionPassage,
                    fontStyle: action.payload,
                },
            });
        case "aboutSectionPassageColorChange":
            return (state = {
                ...state,
                aboutSectionPassage: {
                    ...state.aboutSectionPassage,
                    color: action.payload,
                },
            });
        case "aboutSectionImageTitleTextChange":
            return (state = {
                ...state,
                aboutSectionImageTitle: {
                    ...state.aboutSectionImageTitle,
                    text: action.payload,
                },
            });
        case "aboutSectionImageTitleFontStyleChange":
            return (state = {
                ...state,
                aboutSectionImageTitle: {
                    ...state.aboutSectionImageTitle,
                    fontStyle: action.payload,
                },
            });
        case "aboutSectionImageTitleColorChange":
            return (state = {
                ...state,
                aboutSectionImageTitle: {
                    ...state.aboutSectionImageTitle,
                    color: action.payload,
                },
            });
        case "aboutSectionSocialMediaTitleTextChange":
            return (state = {
                ...state,
                aboutSectionSocialMediaTitle: {
                    ...state.aboutSectionSocialMediaTitle,
                    text: action.payload,
                },
            });
        case "aboutSectionSocialMediaTitleFontStyleChange":
            return (state = {
                ...state,
                aboutSectionSocialMediaTitle: {
                    ...state.aboutSectionSocialMediaTitle,
                    fontStyle: action.payload,
                },
            });
        case "aboutSectionSocialMediaTitleColorChange":
            return (state = {
                ...state,
                aboutSectionSocialMediaTitle: {
                    ...state.aboutSectionSocialMediaTitle,
                    color: action.payload,
                },
            });
        case "aboutSectionSocialMediaInstagramChange":
            return (state = {
                ...state,
                aboutSectionSocialMediaLinks: {
                    ...state.aboutSectionSocialMediaLinks,
                    instagram: action.payload,
                },
            });
        case "aboutSectionSocialMediaGmailChange":
            return (state = {
                ...state,
                aboutSectionSocialMediaLinks: {
                    ...state.aboutSectionSocialMediaLinks,
                    gmail: action.payload,
                },
            });
        case "aboutSectionSocialMediaLinkedInChange":
            return (state = {
                ...state,
                aboutSectionSocialMediaLinks: {
                    ...state.aboutSectionSocialMediaLinks,
                    linkedIn: action.payload,
                },
            });
        case "aboutSectionSocialMediaGitHubChange":
            return (state = {
                ...state,
                aboutSectionSocialMediaLinks: {
                    ...state.aboutSectionSocialMediaLinks,
                    github: action.payload,
                },
            });
        case "aboutSectionBasicInfoTitleTextChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    title: {
                        ...state.aboutSectionBasicInfo.title,
                        text: action.payload,
                    },
                },
            });
        case "aboutSectionBasicInfoTitleFontStyleChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    title: {
                        ...state.aboutSectionBasicInfo.title,
                        fontStyle: action.payload,
                    },
                },
            });
        case "aboutSectionBasicInfoTitleColorChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    title: {
                        ...state.aboutSectionBasicInfo.title,
                        color: action.payload,
                    },
                },
            });
        case "aboutSectionBasicInfoKeysFontStylesChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    keys: {
                        ...state.aboutSectionBasicInfo.keys,
                        fontStyle: action.payload,
                    },
                },
            });
        case "aboutSectionBasicInfoKeysColorChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    keys: {
                        ...state.aboutSectionBasicInfo.keys,
                        color: action.payload,
                    },
                },
            });
        case "aboutSectionBasicInfoValuesTextAgeChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    values: {
                        ...state.aboutSectionBasicInfo.values,
                        text: {
                            ...state.aboutSectionBasicInfo.values.text,
                            age: action.payload,
                        },
                    },
                },
            });
        case "aboutSectionBasicInfoValuesTextEmailChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    values: {
                        ...state.aboutSectionBasicInfo.values,
                        text: {
                            ...state.aboutSectionBasicInfo.values.text,
                            email: action.payload,
                        },
                    },
                },
            });
        case "aboutSectionBasicInfoValuesTextPhoneChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    values: {
                        ...state.aboutSectionBasicInfo.values,
                        text: {
                            ...state.aboutSectionBasicInfo.values.text,
                            phone: action.payload,
                        },
                    },
                },
            });
        case "aboutSectionBasicInfoValuesTextAddressChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    values: {
                        ...state.aboutSectionBasicInfo.values,
                        text: {
                            ...state.aboutSectionBasicInfo.values.text,
                            address: action.payload,
                        },
                    },
                },
            });
        case "aboutSectionBasicInfoValuesTextLanguagesChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    values: {
                        ...state.aboutSectionBasicInfo.values,
                        text: {
                            ...state.aboutSectionBasicInfo.values.text,
                            languages: action.payload,
                        },
                    },
                },
            });
        case "aboutSectionBasicInfoValuesFontStyleChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    values: {
                        ...state.aboutSectionBasicInfo.values,
                        fontStyle: action.payload,
                    },
                },
            });
        case "aboutSectionBasicInfoValuesColorChange":
            return (state = {
                ...state,
                aboutSectionBasicInfo: {
                    ...state.aboutSectionBasicInfo,
                    values: {
                        ...state.aboutSectionBasicInfo.values,
                        color: action.payload,
                    },
                },
            });
        default:
            return state;
    }
};
/* aboutSectionBasicInfo: {
    title: {
        text: "✨ Basic Information",
        fontStyle: "Open Sans",
        color: "#000000",
    },
    keys: {
        fontStyle: "Open Sans",
        color: "#000000",
    },
    values: {
        text: {
            age: "26",
            email: "example@gmail.com",
            phone: "1234567890",
            address:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi a",
            languages: "English, Telugu"
        },
        fontStyle: "Open Sans",
        color: "#000000"
    },
}, */
export const AboutSectionImageUploader = (state = false, action) => {
    switch (action.type) {
        case "AboutSectionImageUpload":
            return action.payload;
        default:
            return state;
    }
};
export const namee = (state = "Education", action) => {
    switch (action.type) {
        case "namee":
            return action.payload;
        default:
            return state;
    }
};

export const descriptione = (
    state = "Lorem ipsum dolor sit, quos dignissimos. Quas ratione quasi et placeat consequuntur excepturi laboriosam! Aliquid, laboriosam?",
    action
) => {
    switch (action.type) {
        case "descriptione":
            return action.payload;
        default:
            return state;
    }
};

const data = [
    {
        title: "TITLE1",
        year: "(2020-2021)",
        description:
            "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.",
        animation: "fade-right",
        animationdelay: 0,
        animationduration: 0.6,
        image: "",
        imageType: "",
    },
    {
        title: "TITLE2",
        year: "(2020-2021)",
        description:
            "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.",
        animation: "fade-right",
        animationdelay: 0,
        animationduration: 0.6,
        image: "",
        imageType: "",
    },
    {
        title: "TITLE3",
        year: "(2020-2021)",
        description:
            "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.",
        animation: "fade-right",
        animationdelay: 0,
        animationduration: 0.6,
        image: "",
        imageType: "",
    },
];

export const card1edu = (state = data, action) => {
    switch (action.type) {
        case "card1edu":
            return action.payload;
        default:
            return state;
    }
};

export const educationsectiontitle = (state = "EDUCATION", action) => {
    switch (action.type) {
        case "educationsectiontitle":
            return action.payload;
        default:
            return state;
    }
};
export const currenttabe = (state = 0, action) => {
    switch (action.type) {
        case "currenttabe":
            return action.payload;
        default:
            return state;
    }
};

export const educationhfontname = (state = "Open Sans", action) => {
    switch (action.type) {
        case "educationhfontname":
            return action.payload;
        default:
            return state;
    }
};

export const educationpfontname = (state = "Open Sans", action) => {
    switch (action.type) {
        case "educationpfontname":
            return action.payload;
        default:
            return state;
    }
};
export const fontcolore = (state = "black", action) => {
    switch (action.type) {
        case "fontcolore":
            return action.payload;
        default:
            return state;
    }
};
export const fontcolorep = (state = "#777", action) => {
    switch (action.type) {
        case "fontcolorep":
            return action.payload;
        default:
            return state;
    }
};

export const animationtypeeh = (state = "zoom-in", action) => {
    switch (action.type) {
        case "animationtypeeh":
            return action.payload;
        default:
            return state;
    }
};

export const animationtimeeh = (state = 0.3, action) => {
    switch (action.type) {
        case "animationtimeeh":
            return action.payload;
        default:
            return state;
    }
};

export const animationdelayeh = (state = 0, action) => {
    switch (action.type) {
        case "animationdelayeh":
            return action.payload;
        default:
            return state;
    }
};

export const carddetailse = (
    state = {
        title: "",
        year: "",
        description: "",
        imageType: "",
        image: "",
        animation: "fade-right",
        animationdelay: 0,
        animationduration: 0.6,
    },
    action
) => {
    switch (action.type) {
        case "carddetailse":
            return action.payload;
        default:
            return state;
    }
};

export const editcardine = (
    state = {
        index: null,
        imageType: "",
        title: "",
        year: "",
        description: "",
        animation: "fade-right",
        animationdelay: 0,
        animationduration: 0.6,
    },
    action
) => {
    switch (action.type) {
        case "editcardine":
            return action.payload;
        default:
            return state;
    }
};

export const fontsineb = (
    state = {
        title: "#000",
        year: "#bbb",
        description: "#777",
        bgcolor: "#fff",
    },
    action
) => {
    switch (action.type) {
        case "fontsineb":
            return action.payload;
        default:
            return state;
    }
};
export const fontfamilyedu = (
    state = { title: "Arial", year: "Arial", description: "Arial" },
    action
) => {
    switch (action.type) {
        case "fontfamilyedu":
            return action.payload;
        default:
            return state;
    }
};

export const imagetypeedu = (state = "", action) => {
    switch (action.type) {
        case "imagetypeedu":
            return action.payload;
        default:
            return state;
    }
};

export const newimageinedu = (state = "", action) => {
    switch (action.type) {
        case "newimageinedu":
            return action.payload;
        default:
            return state;
    }
};

export const layoutinedu = (state = "layout1", action) => {
    switch (action.type) {
        case "layoutinedu":
            return action.payload;
        default:
            return state;
    }
};

export const shadowcardedu = (
    state = "0 .5rem 1rem rgba(0,0,0,.15)",
    action
) => {
    switch (action.type) {
        case "shadowcardedu":
            return action.payload;
        default:
            return state;
    }
};

export const skillsSection = (
    state = {
        editOpenSelected: 0,
        editCardNumber: 0,
        background: {
            borderType: 0,
            color: "#ffffff",
            transition: "none",
        },
        skillsSectionHeader: {
            text: "My Skills",
            color: "#000000",
            fontStyle: "Open sans",
            alignment: "left",
        },
        skillsCards: [
            {
                image: "",
                title: "HTML",
                desc: "Hi i'm very good at HTML",
                percentage: 80,
                progressBarColor: "#0bceaf",
                titleFontStyle: "open Sans",
                descFontStyle: "open Sans",
                titleColor: "#000000",
                descColor: "#000000",
            },
            {
                image: "",
                title: "CSS",
                desc: "Hi i'm very good at HTML",
                percentage: 50,
                progressBarColor: "#123451",
                titleFontStyle: "open Sans",
                descFontStyle: "open Sans",
                titleColor: "#000000",
                descColor: "#000000",
            },
        ],
        cardsLayout: {
            layoutDesign: 2,
            borderType: 0,
        },
        skillTabPointer: 0,
        skillsEditingCardNumber: 0,
    },
    action
) => {
    switch (action.type) {
        case "skilletingSkill":
            return (state = {
                ...state,
                skillsCards: state.skillsCards.filter((ele, ind)=>(ind!==action.payload))
            });
        case "skillsAddNewSkill":
            return (state = {
                ...state,
                skillsCards: [...state.skillsCards, action.payload],
            });
        case "skillsEditingCardBarColor":
            return (state = {
                ...state,
                skillsCards: state.skillsCards.map((skill, index) =>
                    index === action.editCardIndex
                        ? { ...skill, progressBarColor: action.payload }
                        : skill
                ),
            });
        case "skillsEditingCardPercentage":
            return (state = {
                ...state,
                skillsCards: state.skillsCards.map((skill, index) =>
                    index === action.editCardIndex
                        ? { ...skill, percentage: action.payload }
                        : skill
                ),
            });
        case "skillsEditingCardTitle":
            return (state = {
                ...state,
                skillsCards: state.skillsCards.map((skill, index) =>
                    index === action.editCardIndex
                        ? { ...skill, title: action.payload }
                        : skill
                ),
            });
        case "skillsEditingCardDesc":
            return (state = {
                ...state,
                skillsCards: state.skillsCards.map((skill, index) =>
                    index === action.editCardIndex
                        ? { ...skill, desc: action.payload }
                        : skill
                ),
            });
        case "skillsEditingCardTitleFont":
            return (state = {
                ...state,
                skillsCards: state.skillsCards.map((skill, index) =>
                    index === action.editCardIndex
                        ? { ...skill, titleFontStyle: action.payload }
                        : skill
                ),
            });
        case "skillsEditingCardDescFont":
            return (state = {
                ...state,
                skillsCards: state.skillsCards.map((skill, index) =>
                    index === action.editCardIndex
                        ? { ...skill, descFontStyle: action.payload }
                        : skill
                ),
            });
        case "skillsEditingCardTitleColor":
            return (state = {
                ...state,
                skillsCards: state.skillsCards.map((skill, index) =>
                    index === action.editCardIndex
                        ? { ...skill, titleColor: action.payload }
                        : skill
                ),
            });
        case "skillsEditingCardDescColor":
            return (state = {
                ...state,
                skillsCards: state.skillsCards.map((skill, index) =>
                    index === action.editCardIndex
                        ? { ...skill, descColor: action.payload }
                        : skill
                ),
            });
        case "skillsEditingCardNumber":
            return (state = {
                ...state,
                skillsEditingCardNumber: action.payload,
            });
        case "skillsSectionChangeEditPage":
            return (state = {
                ...state,
                editOpenSelected: action.payload,
            });
        case "skillsSectionChangeEditCardNumber":
            return (state = {
                ...state,
                editCardNumber: action.payload,
            });

        case "skillsSectionCardChangeLayoutDesign":
            return (state = {
                ...state,
                cardsLayout: {
                    ...state.cardsLayout,
                    layoutDesign: action.payload,
                },
            });
        case "skillsSectionCardChangeBorderType":
            return (state = {
                ...state,
                cardsLayout: {
                    ...state.cardsLayout,
                    borderType: action.payload,
                },
            });

        case "skillsSectionBackgroundChangeBorderType":
            return (state = {
                ...state,
                background: {
                    ...state.background,
                    borderType: action.payload,
                },
            });
        case "skillsSectionBackgroundChangeBorderColor":
            return (state = {
                ...state,
                background: {
                    ...state.background,
                    color: action.payload,
                },
            });
        case "skillsSectionBackgroundChangeBorderTransition":
            return (state = {
                ...state,
                background: {
                    ...state.background,
                    transition: action.payload,
                },
            });

        case "skillsSectionHeaderChangeText":
            return (state = {
                ...state,
                skillsSectionHeader: {
                    ...state.skillsSectionHeader,
                    text: action.payload,
                },
            });
        case "skillsSectionHeaderChangeColor":
            return (state = {
                ...state,
                skillsSectionHeader: {
                    ...state.skillsSectionHeader,
                    color: action.payload,
                },
            });
        case "skillsSectionHeaderChangeFontStyle":
            return (state = {
                ...state,
                skillsSectionHeader: {
                    ...state.skillsSectionHeader,
                    fontStyle: action.payload,
                },
            });
        case "skillsSectionHeaderChangeAlignment":
            return (state = {
                ...state,
                skillsSectionHeader: {
                    ...state.skillsSectionHeader,
                    alignment: action.payload,
                },
            });
        case "skillsSectionChangeTabPointer":
            return (state = {
                ...state,
                skillTabPointer: action.payload,
            });
        default:
            return state;
    }
};