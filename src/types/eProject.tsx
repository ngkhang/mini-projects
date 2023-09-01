interface eProject {
	Id: string;
	Title: string;
	isDone: boolean;
	Description: string[];
	Keywords: string[];
	Feature: string[];
	Techs: string[];
	Image: string;
	Alt: string;
	Link: {
		Id: number,
		Name: string,
		Url: string
	}[];
}

export default eProject;
