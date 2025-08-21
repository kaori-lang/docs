import { Box, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface SectionContainerComponentProps {
	title: string;
	children: React.ReactNode;
}

export const SectionContainerComponent: FunctionComponent<
	SectionContainerComponentProps
> = ({ title, children }) => {
	return (
		<Box w="full">
			<Heading>{title}</Heading>

			<Box>{children}</Box>
		</Box>
	);
};
