import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface LogoComponentProps {}

export const LogoComponent: FunctionComponent<LogoComponentProps> = () => {
	return (
		<Box display="flex" alignItems="center">
			<Icon boxSize="8">
				<Image src="./violin.svg" alt="violin" />
			</Icon>

			<Text
				fontSize="xl"
				fontFamily="cursive"
				marginLeft={2}
				fontWeight="bold"
			>
				Kaori Programming Language
			</Text>
		</Box>
	);
};
