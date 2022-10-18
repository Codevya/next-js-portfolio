import { motion } from 'framer-motion';
import JobCard from './JobCard';

type Props = {};

const Experience = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto space-y-10 items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Experience
			</h3>

			<div className=" relative w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
			</div>
		</motion.div>
	);
};

export default Experience;
