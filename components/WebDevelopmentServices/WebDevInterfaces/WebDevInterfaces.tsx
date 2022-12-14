import { FC } from "react";

export interface Props {
  routes: string[] | undefined;
}

export interface returnServerSiderProps {
  props: Props;
}

export interface ServerProps {
  query: {
    url: string;
  };
}

export interface tableContentProps {
  tableTitle: string;
  tableIcon: JSX.Element;
  tableWidth?: string;
  subSection?: {
    title: string;
    link: string;
  };

  List: JSX.Element;
}

export interface detailGeneratorProps {
  heading: string;
  paragraphs: string[];
}

export interface WebDevCounterProps {
  num: number;
}

export interface ImportantLinkItemData {
  heading: string;
  listItems: string[];
  bgColor?: string;
}

export interface heroSectionProps {
  heroData: {
    heading: string;
    paragraph: string;
    headingWidth?: string;
  };
  serviceData?: string[];
  routesVisited: string[];
}

export interface partnersSectionProps {
  variant: string;
  heading: string;
  logos: {
    sources: string[];
    width: string;
    height: string;
  };
  headingColor?: string;
}
export interface testimonialData {
  details: string;
  owner: string;
  company: string;
}

export interface testimonialMedia {
  url: string;
}

export interface testimonialsSectionProps {
  variant: string;
  testimonialData: testimonialData;
  Media: FC;
}
