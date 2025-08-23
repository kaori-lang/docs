import { Box, Heading, Stack } from "@chakra-ui/react";
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
			<Heading size="3xl" marginBottom={4}>
				{title}
			</Heading>

			<Stack spaceY={4}>{children}</Stack>
		</Box>
	);
};
