import Card from './components/Card';

function App() {
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
							<button className='button button-primary'>Join us</button>
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
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
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
