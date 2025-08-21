import { Box, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface IntroductionComponentProps {
	title: string;
	children: React.ReactNode;
}

export const IntroductionComponent: FunctionComponent<
	IntroductionComponentProps
> = ({ title, children }) => {
	return (
		<Box w="full">
			<Heading>{title}</Heading>

			<Box>{children}</Box>
		</Box>
	);
};
