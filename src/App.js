import Navbar from './components/Navbar/Navbar'
import Greeting from './containers/Greeting/Greeting'
import About from './containers/About/About'
import Project from './containers/Project/Project'
import Contact from './containers/Contact/Contact'
import Footer from './containers/Footer/Footer'
import Education from './containers/Education/Education'
import Coding from './containers/coding/Coding'
import {Link} from 'react-router-dom'
import './App.css';
import Experience from './containers/Experience/Experience'

function App() {
	return (
		<>
			<Navbar/>
			<Greeting/>
			<Education/>
			<About/>
			<Project/>
			<Experience/>
			<Coding/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;