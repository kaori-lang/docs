import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { HiChartBar } from "react-icons/hi";

interface LogoComponentProps {}

export const LogoComponent: FunctionComponent<LogoComponentProps> = () => {
	return (
		<Box display="flex" alignItems="center">
			<Icon size="xl">
				<Image src="./violin.svg" alt="violin" />
			</Icon>

			<Text
				fontSize="xl"
				fontFamily="cursive"
				marginLeft={2}
				fontWeight="bold"
			>
				Kaori
			</Text>
		</Box>
	);
};
