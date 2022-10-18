import { motion } from 'framer-motion';
import Image from 'next/image';
import jobImage from '../assets/images/undraw_portfolio_re_qwm5.svg';

type Props = {};

const JobCard = (props: Props) => {
	return (
		<article className="flex flex-col  rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]  snap-center bg-[#292929] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.div
				initial={{ y: -100 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="relative w-32 h-32 xl:w-200 xd:h-200">
				<Image
					src={jobImage}
					alt="job image"
					layout="fill"
					className="rounded-full object-cover object-center bg-white"
				/>
			</motion.div>

			<div className="px-0 md:px-10">
				<h4 className="text-3xl font-light">FREELANCER at CODEVYA</h4>
				<p className="font-bold text-2xl mt-1">CODEVYA</p>
				<div className="flex space-x-2 my-2">
					{/* Tech stack */}
					{/* Tech stack */}
					{/* Tech stack */}
					{/* Tech stack */}
				</div>
				<p className="uppercase py-5 text-gray-300">From xx/xx/xx to xx/xx/xx</p>

				<ul className="list-disc space-y-4 ml-5 text-lg">
					<li>Summary ...Summary ...Summary ...Summary ...Summary ...Summary ...</li>
					<li>Summary ...Summary ...Summary ...Summary ...Summary ...Summary ...</li>
					
				</ul>
			</div>
		</article>
	);
};

export default JobCard;
