import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FaChevronLeft } from "react-icons/fa";

interface LogoComponentProps {}

export const LogoComponent: FunctionComponent<LogoComponentProps> = () => {
	return (
		<Box display="flex" alignItems="center">
			<Text
				color="red.500"
				fontWeight="bold"
				fontSize="4xl"
				mb="2"
			>{`{`}</Text>

			<Icon as={FaChevronLeft} boxSize={8} color="blue.600" ml={-2} />
			<Text fontSize="2xl" fontWeight="bold">
				Kaori
			</Text>
		</Box>
	);
};
