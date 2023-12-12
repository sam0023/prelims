import Caste from '../Caste';
import Family from '../Family';
import Castesim from '../Casteism';
import Communalism from '../Communalism';
import Regionalism from '../Regionalism';
import CrimeAgainstWomen from '../CrimeAgainstWomen';

const SociologyTopics = [
	{
		topicId: 'caste',
		questions: Caste,
	},
	{
		topicId: 'family',
		questions: Family,
	},
	{
		topicId: 'casteism',
		questions: Castesim,
	},
	{
		topicId: 'communalism',
		questions: Communalism,
	},
	{
		topicId: 'regionalism',
		questions: Regionalism,
	},
	{
		topicId: 'crimeAgainstWomen',
		questions: CrimeAgainstWomen,
	},
];

export default SociologyTopics;
