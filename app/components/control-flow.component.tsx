import { CodeBlock, Stack, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { SectionContainerComponent } from "./section-container.component";

interface ControlFlowComponentProps {}

export const ControlFlowComponent: FunctionComponent<
	ControlFlowComponentProps
> = ({}) => {
	return (
		<SectionContainerComponent title="Control flow">
			<Stack>
				<Text>
					We need some of way to control the flow of a code execution,
					the ability to run a block of code based on a given
					condition
				</Text>
			</Stack>
		</SectionContainerComponent>
	);
};
