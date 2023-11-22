import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
	const subjects = [

		{id: 1, name: 'Science and Technology', code: 'st'},
		{id: 2, name: 'Sociology', code: 'sociology'},
	];

	return (
		<div>
			<h1>Quiz App</h1>
			<h2>Subjects</h2>
			<ul>
				{subjects.map(subject => (
					<li key={subject.id}>
						<Link to={`/${subject.code}`}>{subject.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Home;
