import { ReactNode } from "react";

// Card
export interface CardProps {
  image: ReactNode,
  title: string,
  description: string,
}

export interface CardHeaderProps {
	children: ReactNode;
	className?: string;
	title: string;
	rate: string;
	type?: "basic" | "premium" | "ultimate";
}

export interface CardContent {
	className?: string;
	children: ReactNode;
}

export interface IconProps {
	icon?: JSX.Element;
	title: string;
	className?: string;
	full?: string;
}

// Form
export interface InputProps {
	label: string;
	placeholder: string;
	className?: string;
}

export interface InputButtonProps {
  text: string,
  icon?: ReactNode,
  textColor: string,
  backgroundColor: string,
  boxShadow?: string,
	className?: string;
	rounded?: string;
}

//  Table
export interface TableProps {
	children: ReactNode;
	className?: string;
}

export interface TableHeadChildProps {
	content: string | JSX.Element;
	className?: string;
}

export interface TableBodyChildProps {
	content?: string | JSX.Element;
	className?: string;
	type: "basic" | "standard" | "premium" | "ultimate";
}

// Sections
export interface SectionProps {
	children: ReactNode;
	className?: string;
}
// testi

// footer

// hero
export interface HeroSectionProps {
	pagination?: JSX.Element;
	title: string;
	description: string;
	heroSVG?: JSX.Element;
}

// miscellaneous
export interface PartnerLogo {
	src: string;
	width: number;
	height: number;
}

export interface VideoFrameProps {
	className: string;
	sourceURL?: string;
	allowFullScreen?: boolean;
}

export interface AccordionProp {
	header: string;
	content: string;
	job_location: string,
	job_type: string;
}

export interface TestimonialCardProps {
	description: string;
	image: ReactNode;
	name: string;
}

export interface ProjectCardProps {
	description: string;
	image: ReactNode;
	name: string;
}

export interface InputProps {
	label: string;
	placeholder: string;
	className?: string;
}

export interface SliderProps {
  settings: object
} 
