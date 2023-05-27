const greeting = {
    display: true,
    username: 'Ritesh Sajwan',
    title: "Hi I'm",
    subTitle: '',
};

const aboutMe = {
	display: true,
    title: 'About Me',
    subTitle: 'An aspiring Software Developer / Full Stack Web Developer 🚀 having an experience of building Web with JavaScript / Reactjs and some other  libraries and frameworks .',
	skills: [
		'⚡ Proficient in programming languages such as C++,Java(OOPS) and Python(Basics)',
		'⚡ Familiarity with web development technologies such as HTML, CSS,React.js,JavaScript, MERN stack',
		'⚡ Familiarity with RESTful APIs,Redux, React Hooks and working of modern authorization mechanisms, such as JSON Web Token',
		'⚡ Ability to work in a collaborative team environment and adapt to chainging environment',
		'⚡ Good analytical and problem-solving skills',
		'⚡ Experience working with version control systems such as Git/Github and dataBases like MongoDb,MySql/Oracle',
		'⚡ Knowledge of cloud platforms e. g. AWS and Big Data technologies',
		'⚡ Experience in software development life cycle (SDLC) and agile methodologies',
	],
};


const projects = {
	display: true,
	title: 'Projects 🏆  ',
	subtitle: ' Note -  API(Projects) might take a bit longer time to load as hosted on free web services',
	projectCards: [
		{
			title: 'Blood Donation Web Application',
			subtitle: `The web application is made using MERN stack styled with CSS, font-awesome.
			The web application included features such as users registration and functionality to find compatible donors.
			The project was built using a combination of front-end and back-end technologies such as HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, and MongoDB.
			Application Hosted on Render.com`,
			image: require('./images/bld.png'),
			direction: 'left',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/Ritesh9211',
				},
				{
					name: 'Live Demo',
					url: 'https://blddonnerwebapp.onrender.com',
				},
			],
		},
		{
			title: 'Personal Task Manager',
			subtitle: `Web application is made using ReactJs and styled using material-ui
			Features of the app are create, update, edit and delete goals. Add labels to goal, Start a timer to track the time spent for goal, timer keeps running even when the window is closed.
			Filter goals by hashtag and/or text, and sort goals by time spent per goal
			View a Bar graph that displays the amount of time spent per goal.`,
			image: require('./images/task.png'),
			direction: 'right',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/Ritesh9211/Personal-task-manager',
				},
				{
					name: 'Live Demo',
					url: 'https://imaginative-haupia-00def5.netlify.app/',
				},
			],
		},
		{
			title: 'Bank Management System',
			subtitle: ` The project aimed to simulate a basic bank management system that would streamline banking operations like sending and receiving money.
			The bank management system included features such as viewing all customers bank balance , sending and receiving money with some special checks 
			The project was developed using modern web development technologies such as React.js,Express.js,MongoDb,Node.js.`,
			image: require('./images/bank.png'),
			direction: 'left',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/Ritesh9211/bankmanagement',
				},
				{
					name: 'Live Demo',
					url: 'https://bankfrontend.onrender.com',
				},
			],
		},{
			title: 'React Blog Application',
			subtitle: `The project aimed to develop a modern blog application using ReactJS, a popular JavaScript library for building user interfaces, to create an interactive and dynamic blogging platform.
			The blog application included features such as user authentication and authorization, blog post by the registered users with image , creation , editing/deleting of blog , Changing of username passoword etc.
			The project was developed using ReactJS for front-end development, along with other related technologies such as Redux for state management, Axios for API communication, and MongoDb for user authentication and data storage.
			The project showcased strong technical skills in ReactJS and related technologies, demonstrating the ability to create interactive web applications with modern UI/UX design. It could be highlighted as a successful project that showcases proficiency in front-end development and user-centric design. `,
			image: require('./images/blog.png'),
			direction: 'right',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/Ritesh9211/reactblog',
				},
				{
					name: 'Live Demo',
					url: 'https://blogfrontend-p3q6.onrender.com/',
				},
			],
		},
	],
};

const CodingSection ={
	display:true,
	heading:"Coding Profile",
	codingPlatform:[
		{
			name:"CodeChef",
			desc:"Solved 160+ Questions in this particular Platform.Max Contest Rating 3*",
			link:"https://www.codechef.com/users/ritesh_8958"
		},
		{
			name:"LeetCode",
			desc:"Solved 280+ Questions in this particular Platform.",
			link:"https://leetcode.com/ritesh9211/"
		},
		
		{
			name:"Geeks For Geeks",
			desc:"Solve 100+ Question on Gfg platform",
			link:"https://auth.geeksforgeeks.org/user/riteshsaj8958/practice"
		},
		{
			name:"Coding Ninja",
			desc:"",
			link:"https://www.codingninjas.com/codestudio/profile/e8c6ac2d-9450-45ea-a6d0-245df25f8819"
		},

	]
}

const skillsSection = {
    display: true,
    title: 'Skills & Proficiency',
    subTitle: 'Good Problem solver and a fine web Developer',

	softwareSkills1: {
		
		languages : [
			{
				skillName: 'C / C++',
				imgSrc: 'https://img.icons8.com/color/50/000000/c-plus-plus-logo.png'
			},
			{
				skillName: 'Java (OOPS)',
				imgSrc: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-java-computer-programming-flaticons-flat-flat-icons.png'
			},
			{
				skillName: 'Python(Basics)',
				imgSrc: "https://img.icons8.com/color/48/null/python--v1.png"
			},
		],

		webDev: [
			{
				skillName: 'HTML5',
				imgSrc: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png'
			},
			{
				skillName: 'CSS3',
				imgSrc: 'https://img.icons8.com/color/55/000000/css3.png',
			},
			{
				skillName: 'Bootstrap5',
				imgSrc: 'https://img.icons8.com/color/50/000000/bootstrap.png',
			},
			{
				skillName: 'Material-UI',
				imgSrc: "https://img.icons8.com/color/48/null/material-ui.png",
			},
			{
				skillName: 'Javascript',
				imgSrc: 'https://img.icons8.com/color/50/000000/javascript--v1.png'
			},
			{
				skillName: 'React.Js',
				imgSrc: 'https://img.icons8.com/plasticine/50/000000/react.png',
			},
			{
				skillName: 'NodeJs',
				imgSrc: 'https://img.icons8.com/color/50/000000/nodejs.png',
			},			{
				skillName: 'MongoDB',
				imgSrc: 'https://img.icons8.com/color/50/000000/mongodb.png',
			},
			{
				skillName: 'MySql',
				imgSrc: 'https://img.icons8.com/color/48/null/mysql-logo.png',
			},
			{
			 	skillName: 'Firebase',
			 	imgSrc: 'https://img.icons8.com/color/50/000000/firebase.png',
			},
			{
			 	skillName: 'Redux',
			 	imgSrc: "https://img.icons8.com/color/48/null/redux.png",
			},
		],
		
		toolsAndPlatforms: [
			{
				skillName: 'Git/GitHub',
				imgSrc: 'https://img.icons8.com/color/50/000000/git.png',
			},
			{
				skillName: 'VS-Code',
				imgSrc: 'https://img.icons8.com/color/48/000000/visual-studio--v1.png'
			},
			{
				skillName: 'Heroku',
				imgSrc: 'https://img.icons8.com/color/50/000000/heroku.png',
			},
			{
				skillName: 'Netlify',
				imgSrc: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png',
			},
			{
				skillName: 'Linux',
				imgSrc: "https://img.icons8.com/ios-glyphs/30/null/linux.png"
			},
		],
	},
};


const techStack = {
	viewSkillBars: true,
	experience: [
		{
			Stack: 'Frontend / Design',
			progressPercentage: '80%',
		},
		{
			Stack: 'Backend',
			progressPercentage: '70%',
		},
		{
			Stack: 'Programming',
			progressPercentage: '60%',
		},
	],
};


const educationInfo = {
	display: true,
	schools: [
		{
			schoolName: 'Hemvati Nandan Bahuguna Garhwal University ( A Central University )',
			logo: require('./images/hnbgu_logo.jpeg'),
			subHeader: 'B.Tech in Information Technology',
			duration: 'August 2019 - Present',
			desc: '',
		},
		{
			schoolName: `St.Theresa'S Convent School Srinagar Garhwal(Uttarakhand)`,
			logo: require('./images/schoollogo.png'),
			subHeader: 'PCM with Computer Science Percentage- 80% in XII and 85% in X',
			duration: 'April 2018 - April 2019 (XII)',
			desc: '',
		},
	],
};

const experienceInfo = {
	display:true,
	experiences:[
		{
			companyName:"Behere Elite Private Limited (Delhi)",
			start:"12/07/2020",
			end:"12/10/2020",
			role:"Web Developer Inter(MERN)",
			desc: [  "Collaborated with a 5-member team to develop the front end of an e-commerce application, connecting it with the backend, and rendering dynamic content from the database","Made the web application responsive which will be helpful to attract 60% of customers through mobile phones.",
		"Breaking pages into components in order to make efficient and reusable code","Testing of backend API's of the web application using postman.","TechStack used - ReactJs, MongoDB, NodeJs, ExpressJs, RestApi, and Github."]
		},
		{
			companyName:"Sparks Foundation GRIP (Remote)",
			start:"12/07/2020",
			end:"12/10/2020",
			role:"Web Developer Inter(MERN)",
			desc:["Simulated a Full stack Basic Bank application using MERN stack with functionality like sending and receiving data and displaying the user's balance."]
		}
	]
}

const contactMe = {
	display: true,
	title: 'Get in Touch 😄',
	subTitle: '',
	contact : [
		{
			contactField: 'Name',
			value: 'Ritesh Sajwan',
			icon: 'https://img.icons8.com/fluency/50/000000/change-user-male.png',
		},
		{
			contactField: 'Address',
			value: 'Srinagar Garhwal, Uttarakhand',
			icon: 'https://img.icons8.com/external-flatart-icons-flat-flatarticons/50/000000/external-address-user-interface-flatart-icons-flat-flatarticons.png',
		},
		{
			contactField: 'Mail',
			value: 'riteshsaj8958@gmail.com',
			icon: 'https://img.icons8.com/fluency/50/000000/gmail-new.png',
		},
		{
			contactField: 'Mobile / WhatsApp',
			value: '+91 8445054398',
			icon: 'https://img.icons8.com/color/50/000000/phone.png',
		},
	],
	username: 'Ritesh Sajwan',
	address: 'Srinagar Garhwal, Uttarakhand',
	email: 'riteshsaj8958@gmail.com',
	mobile: '+91 8445054398',
};


export {
    greeting,
    aboutMe,
	contactMe,
    skillsSection,
	techStack,
	educationInfo,
	projects,
	CodingSection,
	experienceInfo,
}
