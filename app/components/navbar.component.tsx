import { Box, IconButton } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { LogoComponent } from "./logo.component";
import { RiGithubLine } from "react-icons/ri";

interface NavbarComponentProps {}

export const NavbarComponent: FunctionComponent<NavbarComponentProps> = () => {
	return (
		<Box display="flex" justifyContent="space-between" alignItems="center">
			<LogoComponent />

			<IconButton
				variant="ghost"
				size="xl"
				onClick={() =>
					window.open("https://github.com/kaori-lang/kaori", "_blank")
				}
			>
				<RiGithubLine />
			</IconButton>
		</Box>
	);
};
