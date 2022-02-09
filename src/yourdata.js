// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

// about icon
import aboutIcon from './images/mel_logo.png'

//navbar
import NavbarIcon from './images/mel_logo.png'

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Melody",
  navIcon: NavbarIcon,
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, software,",
    //Line 3 For Header
    "and experience ",
  ],
  //   Header Paragraph
  headerParagraph:
    "An Open Sourcerer, aspiring Software Engineer, User Experience Designer and full stack development in fields related to Machine Learning, Deep Learning as well as application and web development",

  //Contact Email
  contactEmail: "melody_leong@mymail.sutd.edu.sg",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "MIT DigiHealth Hackathon - SafeMeals ", //Project Title - Add Your Project Title Here
      para:
        " In the works of a Food Allergy App for the US market", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://www.youtube.com/watch?v=0Wk2YOA81Pc",
    },
    {
      title: "Church Telegram Bot", //Project Title - Add Your Project Title Here
      para:
        "Telegram bot for your prayers and birthdays", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/caramelmelmel/SERANGANGBOT",
    },
    {
      title: "Backend safemeals website", //Project Title - Add Your Project Title Here
      para:
        "An express app for the backend", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/caramelmelmel/safeMealswebsitebackendrepo",
    },
    {
      title: "Digital World Social Distancing", //Project Title - Add Your Project Title Here
      para:
        "A social distancing object detection framework in python", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/melodyleong/detectance",
    },
    {
      title: "SUTD Social", //Project Title - Add Your Project Title Here
      para:
        "An award winning simple mobile one stop for everyone using matching algorithms", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/caramelmelmel/SUTD-Social",
    },
    {
      title: "More to come...", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am an open-sourcerer, aspiring software engineer who loves Deep Learning and Artificial Intelligence.",
  aboutParaTwo:
    "I dabble with App and Web dev and also other work-related to coding and hardware especially algorithms",
  aboutParaThree:
    "I love adventures and am willing explore and learn anything from anywhere and promote STEM to the community",
  aboutImage:
    aboutIcon,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML5",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "Javascript",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: designIcon,
      para:
        "UI/UX design",
    },
    {
      img: codeIcon,
      para:
        "Code anything",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Let me join you in your adventures",
  promotionPara:
    "I can join you in your next steps!",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/caramelmelmel" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
  ],

  // End Contact Section ---------------
}
