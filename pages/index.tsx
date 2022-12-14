import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
	return (
		<div className="bg-[#2f2f2f] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
			<Head>
				<title>Codevya</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<Header />
			{/* Hero */}
			<section id="hero" className="snap-start">
				<Hero />
			</section>
			{/* About */}
			<section id="about" className="snap-center">
				<About />
			</section>
			{/* Experiences */}
			<section id="experience" className="snap-center">
				<Experience />
			</section>
			{/* Skills */}

			{/* Projects */}

			{/* Contact */}
		</div>
	);
};

export default Home;
