import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import portrait from '../assets/images/undraw_percentages_re_a1ao.svg';
import BackgroundCircles from './BackgroundCircles';
type Props = {};

const Hero = (props: Props) => {
	const [text] = useTypewriter({
		words: ['Hi, my name is Yoan', 'I love making BeautifulApp.tsx', '<WelcomeToMyPortfolio />'],
		loop: true,
		delaySpeed: 350,
	});

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				src={portrait}
				alt="Yoan's portrait"
				width="128"
				height="128"
				className="relative  mx-auto object-cover"
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] z-10">
					Software Engineer
				</h2>
				<h1 className="text-4xl lg:text-5xl font-semibold px-10 z-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#a537fd " />
				</h1>

				<div className="pt-5 space-x-2">
					<Link href="#about">
						<button className="heroBtn">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroBtn">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroBtn">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroBtn">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
