/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = { 
  title: "Hi! its Masood",
  logo_name: "Masood Tariq",
  nickname: "sudi",
  subTitle:
    "Computer Scientist💻-Fitness Freak🏋️‍♂️-Public Speaker🎤",
  resumeLink:
    "https://drive.google.com/file/d/1E1k8wzJhPUKmFiS-xNQtwMWq4OY8crH3/view?usp=sharing",
  portfolio_repository: "https://github.com/masoodtariq",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/masoodtariq",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/masood-tariq-64b311177/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:masoodtariq075@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MasoodTariq_",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/masood.tariq.524/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_masoodtariq/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];
const socialMediaLinksHome = [
  {
    name: "Github",
    link: "https://github.com/masoodtariq",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/masood-tariq-64b311177/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MasoodTariq_",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Gmail",
    link: "mailto:masoodtariq075@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/masood.tariq.524/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_masoodtariq/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Java Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using React.js | HTML/CSS | Wordpress",
        "⚡ Creating Single page applications using Angular.js and Springboot",
        // "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating optimized application backends in Springboot, and PHP",
        "⚡ Experience in usage of Rest APIs in modern programming practices",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sprinboot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "mongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#13AA52",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "black",
          },
        },
      ],
    },
    {
      title: "Social Media Marketing",
      fileName: "DesignImg",
      skills: [
        "⚡ Developing and implementing a comprehensive social media marketing strategy aligning with company's objectives",
        "⚡ Creating engaging and relevant content for social media platforms",
        "⚡ Interacting with the audience, responding to comments, and inquiries",
        "⚡ Planning and executing paid social media advertising campaigns to reach targeted audiences,increasing brand visibility",
      ],
      softwareSkills: [
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#7393B3",
          },
        },
        {
          skillName: "Adobe Lightroom",
          fontAwesomeClassname: "simple-icons:adobelightroom",
          style: {
            color: "#36454F",
          },
        },
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            backgroundColor: "#31A8FF",
            borderRadius: "9px",
            padding: "1px 2px",
            color: "#001E36",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#3A67AE",
      },
      profileLink: "",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "#E65050",
      },
      profileLink: "",
    },
    {
      siteName: "AWS",
      iconifyClassname: "logos:aws",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "#",
    },
    {
      siteName: "Qwiklabs",
      iconifyClassname: "simple-icons:qwiklabs",
      style: {
        color: "#EDC70E",
      },
      profileLink:
        "https://www.cloudskillsboost.google/public_profiles/e1ff0c2a-6ad9-45ba-995f-6e6f75d63d86",
    },
    {
      siteName: "Microsoft",
      iconifyClassname: "logos:microsoft-windows",
      style: {
        color: "#fda",
      },
      profileLink: "#",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University of Sciences and Technology, Islamabad",
      subtitle: "Bachelor's in Computer Sciences",
      logo_path: "nust-logo.png",
      alt_name: "NUST - Islamabad",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Gained deep insights of fundamental software engineering courses like DS, Algorithms, DBMS, OS, Advanced Programming, Open Source Systems etc.",
        "⚡ The transparent methodology of providing diversity and building confidence by NUST has helped to develop me as a person not to forget mentioning the community bonding techniques that talks about growth",
        "⚡ Apart from this, I have done courses on Machine Learning and Ai, Cloud Computing, IT infrastructure, and  Digital Marketing",
        "⚡ My favorite co-curricular hobby has been to manage student boddies since I have been a part of many clubs and societies including NUST ACM,NUST Dramatics Club and NUST Debating Club etc.",
      ],
      website_link: "https://nust.edu.pk/",
    },
    {
      title: "Punjab Group of Colleges, Sialkot",
      subtitle: "Intermediate",
      logo_path: "pgclogo.png",
      alt_name: "pgc_sialkot",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ Awarded  with fully funded merit-based Scholarship",
        "⚡ Swiftly participated in sports and other extra-curricular events in college",
        "⚡ Won College Debate Competition for two consective years",
      ],
      website_link: "https://pgc.edu/campus/sialkot/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft Innovative Educator",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/18EpoNprPpxSRaLvAkKjEGaCBRNlAGjgx/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#E48564",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/13FLmLsAbbl9wuBU1EoHbvAADgXsDOIr4/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#222E3C",
    },
    {
      title: "Data Science on Google Cloud: Machine Learning",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/e1ff0c2a-6ad9-45ba-995f-6e6f75d63d86",
      alt_name: "Qwiklabs",
      color_code: "#8AB2F4",
    },
    {
      title: "HCIA-AI",
      subtitle: "- Huawei",
      logo_path: "huawei.png",
      certificate_link:
        "https://drive.google.com/file/d/1OemA17fPu1GV8sFheyvXtKJ-f6B_kbRQ/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Intro to ML: image Processing",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/e1ff0c2a-6ad9-45ba-995f-6e6f75d63d86",
      alt_name: "Qwiklabs",
      color_code: "#1F70C199",
    },
    {
      title: "Excel Skills for Business: Essentials",
      subtitle: "- Macquarie University Sydney",
      logo_path: "macquarie.png",
      certificate_link:
      "https://coursera.org/share/8fce4e359bffe2e9cc8b8c2d2e81172f",
      alt_name: "GCP",
      color_code: "#0C9D5899",
    },
    {
      title: "Design Thinking",
      subtitle: "- Telenor",
      logo_path: "telenor.png",
      certificate_link:
        "https://drive.google.com/file/d/1A2gKm2Q024mb37_UY6rWpabhyvOi1o3g/view?usp=sharing",
      alt_name: "Telenor",
      color_code: "#E9E9E7",
    },
    {
      title: "Intermediate ML: TensorFlow on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/e1ff0c2a-6ad9-45ba-995f-6e6f75d63d86",
      alt_name: "Qwiklabs",
      color_code: "#6AC097",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/e1ff0c2a-6ad9-45ba-995f-6e6f75d63d86",
      alt_name: "Google",
      color_code: "#4285F499",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      subtitle: "- Coursera",
      logo_path: "coursera-Logo.png",
      certificate_link:
        "https://coursera.org/share/44687683669b18d0e9fc985fbc5413f8",
      alt_name: "Coursera",
      color_code: "#E9E9E7",
    },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    {
      title: "Machine Learning APIs",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/e1ff0c2a-6ad9-45ba-995f-6e6f75d63d86",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "MS Office Specialist",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/a4bb62df-ed35-488b-a062-df589f841300/linked_in",
      alt_name: "Microsoft",
      color_code: "#E48564",
    },
    {
      title: "Data Science on Google Cloud",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/e1ff0c2a-6ad9-45ba-995f-6e6f75d63d86",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "The Fundamentals of Digital Marketing",
      subtitle: "- Google Digital Garage",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZgBpxWNxZtAmbkCeqpLUnNVTV-85q9o0/view?usp=sharing",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Ai for Everyone",
      subtitle: "- Coursera",
      logo_path: "coursera-Logo.png",
      certificate_link:
        "https://coursera.org/share/5e03498ca177e7319cdc8653f169f4c4",
      alt_name: "AWS",
      color_code: "#E9E9E7",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked in IT team with some well-established companies in Pakistan. I am also giving my services as a Freelancer. The best part is that I love giving back to the people what I have learned so far. Below is a list of my industrial expeiences, internships and volunteerships:",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Freelancer: Content-Writing, Java Developer",
          company: "Fiverr",
          company_url:
            "https://www.upwork.com/o/profiles/users/~01d6588c289ac050a4/",
          logo_path: "fiverr.png",
          duration: "Mar 2021 - present",
          location: "Remote Work",
          description:
            "Selling services of Java full stack, Ecommerce web development using SAP CX, Wordpress + Woopress and Shopify. One of the fatest growing freelancers on Upwork with 5 star feedback. Retaining almost every client that I have worked with so far. Further selling the art of search engine optimization (SEO) and content writing including business writing, software specifications, academic writing and blogs writing.",
          color: "#0879bf",
        },
        {
          title: "Freelancer: Ecommerce Web Developer, Java Developer, Content Writer",
          company: "Upwork",
          company_url:
            "https://www.upwork.com/freelancers/~011b440e889e4d9f19",
          logo_path: "upwork.png",
          duration: "Mar 2023 - present",
          location: "Remote Work",
          description:
            "Selling services of Java full stack, Ecommerce web development using SAP CX, Wordpress + Woopress and Shopify. One of the fatest growing freelancers on Upwork with 5 star feedback. Retaining almost every client that I have worked with so far. Further selling the art of search engine optimization (SEO) and content writing including business writing, software specifications, academic writing and blogs writing.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer SAP Hybris",
          company: "Royal Cyber Inc.",
          company_url: "https://www.royalcyber.com/",
          logo_path: "royalcyber.png",
          duration: "July 2022 - Present",
          location: "Lahore",
          description:
            "Royal Cyber is a trusted IT system integrator and managed services provider, delivering next-generation digital solutions and exceptional business value. I am currently working on hybris related applications. Hybris is an ecommerce product platform that is used to address a family of products involving Customer Experience and Management.",
          color: "#0879bf",
        },
        
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "IT Intern",
          company: "Fatima Group",
          company_url: "https://fatima-group.com/",
          logo_path: "fatima-group.png",
          duration: "July 2021 - September 2021",
          location: "Sadiqabad, Punjab",
          description:
            "Worked on a plant-implemented Safety Management information System(SMIS) which was developed using sharepoint, First of all I got an in-depth knowledge on plant safety, Drew workflows for the existing application which were not initially available, identified the errors in existing UI and proposed the most suitable solution.",
          color: "#ee3c26",
        },
        {
          title: "IT Intern",
          company: "PTCL",
          company_url: "https://ptcl.com.pk/",
          logo_path: "ptcl.png",
          duration: "July 2021 - September 2021",
          location: "Sialkot, Punjab",
          description:
            "I closely collaborated with network engineers and IT professionals to support, maintain, and enhance the organization's computer networks. By participating in tasks such as network maintenance, monitoring network performance, and assisting in troubleshooting network issues I ensured smooth operations. l also contributed to network security measures, learned to configure and manage network devices, and created and updated network documentation",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Learn Student Ambassador Islamabad Chapter",
          company: "Microsoft",
          company_url: "https://studentambassadors.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2020 - present",
          location: "NUST, Islamabad",
          description:
            "Microsoft Student Ambassador is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I worked as a social media executive and handled the digital campaign of various successful events.",
          color: "#D83B01",
        },
        {
          title: "Millennium Fellow",
          company: "Millennium Fellowship Network",
          company_url:
            "https://www.millenniumfellows.org/fellow/2020/nust-pk/masood-tariq",
          logo_path: "mcn-logo.png",
          duration: "Jul 2020 - December 2020",
          location: "NUST, Islamabad",
          description:
            'Leadership development program presented by the United Nations Academic Impact and MCN. Only 6% of campuses in 16 nations selected based on the calibre of applications. Over the semester, led the "Aas" project, to train the people especially those who were unemployed because of a sudden crisis, women who were the victims of the acid attack, or any other domestic violence and physically paralyzed people. Engaged in webinars with Katie Strock, Gates Foundation, Eric Knee, Stanford Social Innovation Review, Sam Vaghar. Mainly targeted SDG#4: Quality Education, SDG#5: Gender Equality. Engaged in sessions to cultivate core values of empathy, humility, inclusion in leadership and social impact. Honed skills including how to write a budget and set and meet strategic goals. Helped build a community of practice - sharing best practices across organizations.',
          color: "#181717",
        },
        {
          title: "Executive Committee Member",
          company: "Orientation of NUST",
          company_url: "https://www.facebook.com/ON.NUST",
          logo_path: "orientation of nust.png",
          duration: "June 2019 - Sep 2019",
          location: "NUST, Islamabad",
          description: `Lead Social Responsibility program by NIMUN. Collaborated NIMUN with MCN in order to attain the common goal of making a difference in the lives of the people in need. \nStrived for: \nSDG# 3: Good Health and Well Being – Lives Impacted 20+. \nSDG#4: Quality Education – Lives Impacted 50+. \nSDG#5: Gender Equality – Lives Impacted 30+. \nSDG#12 Responsible Consumption and Production – Lives Impacted 100+.`,
          color: "#181717",
        },
        {
          title: "Chair ASWAN",
          company: "Association of Computing and Machinery, NUST",
          company_url: "https://www.facebook.com/NUST.ACM",
          logo_path: "acmnust.png",
          duration: "Nov 2018 - Sep 2020",
          location: "SEECS, NUST, Islamabad",
          description: `Conducted more than 20 events throughout the tenure including HackACM, Github workshops, and exclusive programming events. Engaged more than 100K people across all social media handles of ACM-NUST. Headed major events like: Redbulll University Outreach, Media Week, Facebook Developer's Workshop, MLH Local Hack Day`,
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects involve use of various tech architectures and tools including ReactJs, NextJs, Redux, Hooks, Nodejs, ExpressJs, MongoDB, HTML/CSS, C/C++, Android Apps in Java, and Python. My best experience is to create Full stack applications and deploy them using an efficient cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const blogs = {
  title: "Blogs",
  subtitle:
    "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character. This part is coming soon feel free to reach out again for follow up 😉",
  link: "/",
  avatar_image_path: "blogs_image.svg",
  section: [
    {
      title: "My first ever blog",
      date: "20-09-2020",
      text: "abc",
      image:
        "https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg",
    },
    {
      title: "My second ever blog",
      date: "20-09-2020",
      text: "abc",
      image:
        "https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg",
    },
    {
      title: "My third ever blog",
      date: "20-09-2020",
      text: "abc",
      image:
        "https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "address_image.svg",
    description:
      "I am available on almost every social media. And here is the fun part, I'm very responsive, so feel free to reach me out if you want any tech related advice or need a speaker for your tech talk. I can help you with ML, Java, C, Content Writing and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Mohallah West, V.P.O & Village Sahowala, Tehsil Sambrial, District Sialkot, Punjab, Pakistan",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/6ydxv9nxtAr6Qmjp9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+92 3038298530",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  socialMediaLinksHome,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  blogs,
};
