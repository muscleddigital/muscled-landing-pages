import React from "react";
import ReactPlayer from "react-player";
import PlayIcon from "./playIcon";

interface Props {
	url: string;
}

const ReactPlayerModal: React.FC<Props> = ({ url }) => {
	const [isplaying, setIsPlaying] = React.useState<boolean>(false);
	const [hover, setHover] = React.useState<boolean>(false);
	return (
		<>
			<div className="bg-gray-300 rounded-lg lg:mt-0 mt-12 lg:w-[640px] md:h-[360px] overflow-hidden h-[250px] flex items-center justify-center">
				<PlayIcon onClick={() => setIsPlaying(true)} />
			</div>
			{isplaying && (
				<div
					onClick={() => {
						setIsPlaying(false);
					}}
					className="bg-black fixed top-0 h-full cursor-pointer w-full bg-opacity-90 flex items-center justify-center px-6"
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className=" relative pr-10  overflow-visible"
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						{hover && (
							<svg
								onClick={() => setIsPlaying(false)}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className=" w-6  h-6 absolute -right-3 -top-1  cursor-pointer text-white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
						<ReactPlayer url={url} playing={true} controls={hover} />
					</div>
				</div>
			)}
		</>
	);
};

export default ReactPlayerModal;
