import React from 'react'
function Navbar (){
	return (
		<nav className="navbar navbar-dark bg-info">
			<div className="container">
				<a  className="navbar-brand"> NYTimes</a>
				<ul class="nav ml-auto">
		  			<li class="nav-item">
	        			<a class="nav-link text-dark " href="/">HOME</a>
	     			 </li>
	     			 <li class="nav-item">
	        			<a class="nav-link text-dark " href="/about">About</a>
	     			 </li>
	     			 <li class="nav-item">
	        			<a class="nav-link text-dark " href="/contact">Contact</a>
	     			 </li>
	     		</ul>
	     			 
				
			</div>
			
		</nav>
		)
}
export default Navbar;