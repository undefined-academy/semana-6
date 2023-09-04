import './Author.scss';

const Author = ({ author }) => {
	return (
		<div className='author'>
			<img src='https://i.pravatar.cc/300' alt='avatar de autor' />
			<span className='paragraph font-poppins-regular font-bold'>{author}</span>
		</div>
	);
};

export default Author;
