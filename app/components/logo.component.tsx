import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FaChevronLeft } from "react-icons/fa";

interface LogoComponentProps {}

export const LogoComponent: FunctionComponent<LogoComponentProps> = () => {
	return (
		<Box display="flex" alignItems="center">
			<Image src="./logo.svg" sizes="md" bgColor="yellow" />
			<Text fontSize="2xl" fontWeight="bold">
				Kaori
			</Text>
		</Box>
	);
};
