import { motion } from 'framer-motion';
import Image from 'next/image';
import portrait from '../assets/images/undraw_percentages_re_a1ao.svg';

type Props = {};

const About = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col relative text-center md:left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
			<motion.div
				initial={{
					x: 200,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1,
				}}
				className="relative object-cover -mb-20 md:mb-0 flex-shrink-0 w-56 h56 md:w-64 xl:w-200">
				<Image
					src={portrait}
					alt="portrait"
					// width="128"
					// height="128"
				/>
			</motion.div>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">Some things about me</h4>
				<p className="text-sm">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe rem nemo eos omnis quae
					possimus rerum, nulla sapiente impedit laborum consectetur exercitationem labore totam
					repellat deleniti placeat sunt vel consequatur?
				</p>
			</div>
		</motion.div>
	);
};

export default About;
