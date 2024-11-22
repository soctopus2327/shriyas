import self from "../img/self.png"
import amazon from "../img/amazon.png"
import history from "../img/history.png"
import ams from "../img/ams.png"
import flow from "../img/flow.png"
import captionify from "../img/captionify.png"
import safesteps from "../img/safesteps.png"
import mindmate from "../img/mindmate.png"

export let colors = ["rgb(241, 228, 53)", "rgb(251, 21, 238)"];

export const info = {
    firstName: "Shriya",
    lastName: "Sandilya",
    initials: "soctopus",
    position: "a Computer Science enthusaist",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[1],
    secColor: colors[0],
    miniBio: [
        {
            emoji: '👩‍💻',
            text: 'fueled by code'
        },
        {
            emoji: '🌎',
            text: 'based in delhi'
        },
        {
            emoji: "💼",
            text: "Computer Science Engineering with specialisation in AI"
        },
        {
            emoji: "📧",
            text: "shriyasandilya@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/soctopus2327",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/shriya-s/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "",
            icon: "fa fa-file-text",
            label: 'resume'
        },
    ],
    bio: "Hello! I'm Shriya Sandilya. I'm a CSE-AI Engineering student. I am currently studying at IDTUW, Delhi. ",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    experiences: [
        {
            label: 'Product and Development Department Intern',
            company:'Avishkaar',
            description: 'Worked on offline saving in AMS using IndexedDB. Enabled offline program creation, saving, deletion. Also conducted thorough testing and reported 10 issues',
            emoji: '💻',
        },
        {
            label: 'Research Annotation',
            company:'Freelancing',
            description: 'Annotated datasets for advanced AI model development research at IGDTUW and UPenn, by working on 500+ data points',
            emoji: '🤖',
        },
    ],
    positions: [
        {
            position: 'App Development Circle Manager',
            org:'Googe Developer Groups on Campus',
            description: 'Planned curriculum, managed mentors and organised classes for 200+ mentees under the App Development Circle',
            emoji: '📱',
            link:'https://gdg.community.dev/gdg-on-campus-indira-gandhi-delhi-technical-university-for-women-delhi-india/'
        },
        {
            position: 'Core Team',
            org:'LeanIn',
            description: 'Contributed editorial and designing expertise and helped organize events, talks and hackathons for empowerment of women in STEM',
            emoji: '👯‍♀️',
            link:'https://www.instagram.com/leanin.igdtuw/?hl=en'
        },
        {
            position: 'Head Coordinator',
            org:'AI Club',
            description: 'Headed the creation and deployment of the AI Club’s Events and Landing Page, ensuring a successful website launch with 100 visitors',
            emoji: '🚀',
            link:'https://www.aiclub-igdtuw.tech/'
        },
        {
            position: 'Monitoring and Coordination',
            org:'Centre for Sustainable Development',
            description: ' Organized and documented 4+ events promoting UN SDG Goal 16, driving awareness and impactful action for Peace, Justice, and Strong Institutions',
            emoji: '🏛️',
            link:'https://www.instagram.com/pejas_csd/'
        },
    ],
    achievements: [
        {
            achieve: 'Best Idea Award',
            loc:'Tech-Bio Ideathon, IISC Banglore',
            description: 'Received Best Idea Award for ideating a platform for CRISPR Gene Therapy Simulation and Targeting under the Precisionmedicine for Synthetic Biology Category',
            emoji: '🧬',
        },
        {
            position: 'Finalist',
            org:'Avant Garde, IIM Indore',
            description: 'Developed a business idea and plan for MakhMaid, a Makhana drinks powder company, that qualifed in top 20 teams for offline finals out of 1400+ teams',
            emoji: '💼',
        },
        {
            position: 'Head Coordinator',
            org:'AI Club',
            description: 'Headed the creation and deployment of the AI Club’s Events and Landing Page, ensuring a successful website launch with 100 visitors',
            emoji: '🚀',
            link:'https://www.aiclub-igdtuw.tech/'
        },
        {
            position: 'Monitoring and Coordination',
            org:'Centre for Sustainable Development',
            description: ' Organized and documented 4+ events promoting UN SDG Goal 16, driving awareness and impactful action for Peace, Justice, and Strong Institutions',
            emoji: '🏛️',
            link:'https://www.instagram.com/pejas_csd/'
        },
    ],
    port: [ 
        {
            title: "Offline AMS - Avishkaar",
            description: 'Downloadable offline PWA functionality added to the AMS software',
            live: "ams.avishkaar.cc", 
            image: ams
        },
        {
            title: "Flow Dataset - Annotation",
            description: 'Annotated 500+ data-points to generate dataset for ACL anthology paper',
            live: "https://flowvqa.github.io/",
            image: flow
        },
    ],
    portfolio: [ 
        {
            title: "Captionify",
            description: 'Android application using Flutter that gives descriptions for uploaded images using 3 ML models with Text-To-Speech feature to read the descriptions outloud',
            live: "disabled", 
            source: "https://github.com/soctopus2327/Captionify---Image-Voice-Describer", 
            image: captionify
        },
        {
            title: "SafeSteps",
            description: 'A website using BingMaps API to visually highlight safety levels for safe travelling. Includes a real-time story submission feature, enabling instant updates to the website.',
            live: "https://soctopus2327.github.io/SafeSteps/",
            source: "https://github.com/soctopus2327/SafeSteps",
            image: safesteps
        },
        {
            title: "MindMate",
            description: 'An AI Mental Health Companion Website that has a speak-aloud chatbot, daily journal entries, medication reminder system and emotion tracking.',
            live: "https://mindmate-frontend.vercel.app/",
            source: "https://github.com/soctopus2327/mindmate_frontend",
            image: mindmate
        },
        {
            title: "Amazon Clone",
            description: 'A built of the Amazon Shopping home page site using HTML, CSS and Javascript.',
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: amazon
        },
        {
            title: "A Day In History",
            description: 'A simple website that uses the MuffinLabs - A Day in History API to fetch details about important Events, Deaths and Births in history today and on a custom date.',
            live: "https://tfb66.csb.app/",
            source: "https://codesandbox.io/s/tfb66",
            image: history
        }
    ]
}