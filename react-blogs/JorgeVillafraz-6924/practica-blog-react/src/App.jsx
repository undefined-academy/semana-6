import Card from './components/Card';
import Button from './components/Button';

const articles = [
	{
		title: 'Understanding the basics of UX Design',
		unsplashId: 'DuHKoV44prg',
		unsplashAlt: 'imagen de post',
		extract:
			'User experience (UX) design is the process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction with the product.',
		author: 'Jorge Villafraz',
		readTime: '7 min',
		date: '2024-05-04',
		tags: ['Web components', 'Design'],
	},
	{
		title: 'Basic CSS Grid concepts you need to know',
		unsplashId: 'Q1p7bh3SHj8',
		unsplashAlt: 'imagen de post',
		extract:
			'CSS Grid is a two-dimensional grid system that helps you lay out elements in columns and rows. In this article we will go over the basic CSS Grid concepts.',
		author: 'Ana Villafraz',
		readTime: '5 min',
		date: '2024-05-05',
		tags: ['CSS', 'Design'],
	},
	{
		title: 'An introduction to HTML forms',
		unsplashId: 'EhTcC9sYXsw',
		unsplashAlt: 'imagen de post',
		extract:
			'HTML forms are used to collect user input in web pages. This article will explain the basics of HTML forms, form elements, and form attributes.',
		author: 'Pedro Villafraz',
		readTime: '8 min',
		date: '2024-05-06',
		tags: ['Web components', 'HTML'],
	},
	{
		title: 'A guide to CSS flexbox',
		unsplashId: '1ZZ96uESRJQ',
		unsplashAlt: 'imagen de post',
		extract:
			'CSS flexbox is a layout module that arranges elements in a flexible and responsive way. In this article we will go over the basics of CSS flexbox and how to use it.',
		author: 'Maria Villafraz',
		readTime: '10 min',
		date: '2024-05-07',
		tags: ['CSS', 'Design'],
	},
	{
		title: 'JavaScript Promises explained',
		unsplashId: 'cIX5TlQ_FgM',
		unsplashAlt: 'imagen de post',
		extract:
			'A Promise is an object that may produce a single value some time in the future either a resolved value or a reason that it',
		author: 'Sofia Villafraz',
		readTime: '15 min',
		date: '2024-05-08',
		tags: ['Logic', 'JavaScript'],
	},
	{
		title: 'Essentials of JavaScript Arrow Functions',
		unsplashId: 'FWVMhUa_wbY',
		unsplashAlt: 'imagen de post',
		extract:
			'Arrow functions are a shorter syntax for writing function expressions in JavaScript. This article covers the basics of arrow functions and when to use them.',
		author: 'Lucas Villafraz',
		readTime: '5 min',
		date: '2024-05-09',
		tags: ['Algorithm', 'JavaScript'],
	},
	{
		title: 'Getting started with Node.js',
		unsplashId: 'N6iw_SIVGVk',
		unsplashAlt: 'imagen de post',
		extract:
			'Node.js is an open-source, cross-platform, JavaScript runtime environment that allows you to run JavaScript outside of the browser. This article explains the basics of Node.js.',
		author: 'Daniela Villafraz',
		readTime: '8 min',
		date: '2024-05-10',
		tags: ['Web components', 'JavaScript'],
	},
	{
		title: 'Understanding SQL JOINS',
		unsplashId: 'OYzbqk2y26c',
		unsplashAlt: 'imagen de post',
		extract:
			'SQL JOINS are used to combine rows from two or more tables, based on a related column between them. This article explains the different types of SQL JOINS.',
		author: 'Juan Villafraz',
		readTime: '10 min',
		date: '2024-05-11',
		tags: ['SQL', 'Backend'],
	},
	{
		title: 'Understanding SQL JOINS',
		unsplashId: 'OYzbqk2y26c',
		unsplashAlt: 'imagen de post',
		extract:
			'SQL JOINS are used to combine rows from two or more tables, based on a related column between them. This article explains the different types of SQL JOINS.',
		author: 'Juan Villafraz',
		readTime: '10 min',
		date: '2024-05-11',
		tags: ['SQL', 'Backend'],
	},
	{
		title: 'Getting started with Node.js',
		unsplashId: 'N6iw_SIVGVk',
		unsplashAlt: 'imagen de post',
		extract:
			'Node.js is an open-source, cross-platform, JavaScript runtime environment that allows you to run JavaScript outside of the browser. This article explains the basics of Node.js.',
		author: 'Daniela Villafraz',
		readTime: '8 min',
		date: '2024-05-10',
		tags: ['Web components', 'JavaScript'],
	},
	{
		title: 'Understanding SQL JOINS',
		unsplashId: 'OYzbqk2y26c',
		unsplashAlt: 'imagen de post',
		extract:
			'SQL JOINS are used to combine rows from two or more tables, based on a related column between them. This article explains the different types of SQL JOINS.',
		author: 'Juan Villafraz',
		readTime: '10 min',
		date: '2024-05-11',
		tags: ['SQL', 'Backend'],
	},
	{
		title: 'Understanding SQL JOINS',
		unsplashId: 'OYzbqk2y26c',
		unsplashAlt: 'imagen de post',
		extract:
			'SQL JOINS are used to combine rows from two or more tables, based on a related column between them. This article explains the different types of SQL JOINS.',
		author: 'Juan Villafraz',
		readTime: '10 min',
		date: '2024-05-11',
		tags: ['SQL', 'Backend'],
	},
];

function App() {
	let cardColorFlag = false;
	return (
		<>
			<header className='main-navbar'>
				<img src='src/images/logos/logo.svg' alt='logo' />
				<nav>
					<ul className='nav-list'>
						<li>
							<a
								href='#'
								className='text-link text-link-md font-poppins-regular is-active'
							>
								About
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-link text-link-md font-poppins-regular'
							>
								Articles
							</a>
						</li>
						<li>
							<Button>Join us</Button>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<section className='presentation'>
					<h1 className='font-recursive-italic heading-xxl font-bold'>
						Afterlife Devs
					</h1>
					<p className='font-poppins-regular heading-lm font-bold'>
						Bla, bla, bla, bla...
					</p>
				</section>
				<section className='post-list-container'>
					<nav className='tags-filter'>
						<input className='input' type='search' placeholder='Search' />
						<button className='button button-secundary'>TAGS</button>
						<ul className='nav-list filter-list'>
							<li>
								<a
									href='#'
									className='filter paragraph font-bold font-recursive-italic'
								>
									CSS
								</a>
							</li>
							<li>
								<a
									href='#'
									className='filter paragraph font-bold font-recursive-italic'
								>
									HTML
								</a>
							</li>
							<li>
								<a
									href='#'
									className='filter paragraph font-bold font-recursive-italic'
								>
									JavaScript
								</a>
							</li>
							<li>
								<a
									href='#'
									className='filter paragraph font-bold font-recursive-italic'
								>
									Node.js
								</a>
							</li>
							<li>
								<a
									href='#'
									className='filter paragraph font-bold font-recursive-italic'
								>
									Models
								</a>
							</li>
							<li>
								<a
									href='#'
									className='filter paragraph font-bold font-recursive-italic'
								>
									Design
								</a>
							</li>
							<li className='is-active-filter'>
								<a
									href='#'
									className='filter paragraph font-bold font-recursive-italic'
								>
									All
								</a>
							</li>
						</ul>
					</nav>
					<div className='post-list'>
						{articles.map((article, index) => {
							if (index % 3 === 0) {
								cardColorFlag = !cardColorFlag;
							}

							return <Card key={index} {...article} isGray={cardColorFlag} />;
						})}

						<article className='card'>
							<section>
								<header>
									<img
										src='https://source.unsplash.com/DuHKoV44prg'
										alt='imagen de post'
									/>
									<div className='tags'>
										<span className='tag'>
											<a href='#'>Web</a>
										</span>
										<span className='tag'>
											<a href='#'>CSS</a>
										</span>
									</div>
									<h2 className='heading-sm font-poppins-regular font-bold'>
										Design tokens, una alternativa muy llamativa que no deja de
										ser tendencia
									</h2>
									<time
										className='heplp-text paragraph font-poppins-regular'
										dateTime='2022-03-20'
									>
										2022-03-20
									</time>
								</header>

								<p className='paragraph font-poppins-regular'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Impedit molestias similique officia itaque eius dicta ad
									necessitatibus fugit exercitationem praesentium ex atque
									officiis, alias aliquid ullam, blanditiis laudantium nihil
									adipisci!
								</p>
							</section>
							<footer>
								<div className='author'>
									<img src='https://i.pravatar.cc/300' alt='avatar de autor' />
									<span className='paragraph font-poppins-regular font-bold'>
										Jorge Villafraz
									</span>
								</div>
								<span className='reading-time paragraph font-poppins-regular'>
									7 min de lectura
								</span>
							</footer>
						</article>
					</div>
				</section>
				<section>Discord</section>
			</main>
			<footer>FOOTER</footer>
		</>
	);
}

export default App;
