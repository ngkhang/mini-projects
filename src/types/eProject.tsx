interface eProject {
	Id: string;
	Title: string;
	isDone: boolean;
	Description: string;
	Keywords: string[];
	Feature: string[];
	Techs: string[];
	Image: string;
	Alt: string;
	Url: {
		Preview: string;
		Github: string;
	};
}

export default eProject;
