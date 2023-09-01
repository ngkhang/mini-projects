import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import { FiExternalLink, FiSun, FiMoon } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";

interface Prop {
	[key: string]: (className?: string) => React.ReactElement;
}
const IconsHelper: Prop = {
	Github: (className?: string) => <GrGithub className={className} />,
	Linkedin: (className?: string) => (
		<GrLinkedinOption className={className} />
	),
	Preview: (className?: string) => <FiExternalLink className={className} />,
	Sun: (className?: string) => <FiSun className={className} />,
	Moon: (className?: string) => <FiMoon className={className} />,
	Code: (className?: string) => <BiCodeAlt className={className} />,
};

export default IconsHelper;
