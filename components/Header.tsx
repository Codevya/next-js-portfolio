import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {};

function Header({}: Props) {
	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 ">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.2,
				}}
				className="flex flex-row items-center">
				{/* Social Icons */}
				<SocialIcon
					url="https://www.linkedin.com/in/yabadine/"
					target={'_blank'}
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://twitter.com/codevya"
					target={'_blank'}
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>

			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.2,
				}}
				className="flex flex-row items-center text-gray-300 cursor-pointer">
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="gray"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
			</motion.div>
		</header>
	);
}

export default Header;
