import React from 'react';
import {Link} from 'react-router-dom';

import {useParams} from 'react-router-dom';

const st = [
	{
		id: 1, topicId: 'energy', topicName: 'Energy',
	},

];
const sociology = [
	{
		id: 1, topicId: 'caste', topicName: 'Caste',
	},
	{
		id: 2, topicId: 'family', topicName: 'Family',
	},
	{
		id: 3, topicId: 'casteism', topicName: 'Casteism',
	},
	{
		id: 4, topicId: 'communalism', topicName: 'Communalism',
	},
	{id: 5, topicId: 'regionalism', topicName: 'regionalism'},
	{id: 6, topicId: 'crimeAgainstWomen', topicName: 'Crime Against Women'},
];

const History = [
	{
		id: 1, topicId: 'tribalmovements', topicName: 'Tribal Movements',
	},
	{
		id: 2, topicId: 'kisanmovements', topicName: 'Kisan Movements',
	},
	{
		id: 3, topicId: 'socialreforms', topicName: 'Social Reforms',
	},
];

const subjects = [

	{
		id: 'st',
		data: st,
	},
	{
		id: 'sociology',
		data: sociology,
	},
	{
		id: 'history',
		data: History,
	},
];

const SubtopicList = props => {
	// Replace with your subtopic data
	console.log(props);
	const {subjectId} = useParams();
	console.log('subjectId', subjectId);

	const subtopicObject = subjects.find(subject => subject.id === subjectId);
	console.log(subtopicObject);
	const subtopic = subtopicObject.data;
	// Get subjectId from route parameters

	// Filter subtopics based on the subjectId

	return (
		<div>
			<h2>Subtopics for Subject ID {subjectId}</h2>
			<ul>
				{subtopic.map(subtopic => (
					<li key={subtopic.id}>
						<Link to={`/${subjectId}/${subtopic.topicId}`}>
							{subtopic.topicName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SubtopicList;
