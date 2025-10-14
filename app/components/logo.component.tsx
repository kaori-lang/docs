import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FaChevronLeft } from "react-icons/fa";

interface LogoComponentProps {}

export const LogoComponent: FunctionComponent<LogoComponentProps> = () => {
	return (
		<Box display="flex" alignItems="center">
			<Image w="28" src="logo-transparent.png"></Image>
		</Box>
	);
};
