import './App.css';
import BlogDetails from './Pages/BlogDetails';
import Blogs from './Pages/Blogs';
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom';

const App = () =>{
	return (
		<Main>
			<Routes>
				<Route path='/' element = {<Blogs/>}/>
				<Route path='/blogs/:id' element ={<BlogDetails />} />
			</Routes>
			
		</Main>
	);
}

export default App;
