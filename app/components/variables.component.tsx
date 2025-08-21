import { FunctionComponent } from "react";
import { Text, Code, Stack, Highlight } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface VariablesComponentProps {}

let variablesCode = `
def main() {
    a: number = 5;
    b: String = "hello world";
    c: bool = true;
}
`;

export const VariablesComponent: FunctionComponent<
	VariablesComponentProps
> = () => {
	return (
		<SectionContainerComponent title="Variables and data types">
			<Stack spaceY={4}>
				<Text>
					Variable declaration needs the type annotation and they must
					always be initialized with their right hand side values
				</Text>

				<Text>
					<Highlight
						query={["String", "number", "bool"]}
						styles={{ bgColor: "gray.900" }}
					>
						String, number and bool are the most basic types:
					</Highlight>
				</Text>
				<CodeBlockComponent code={variablesCode} />
			</Stack>
		</SectionContainerComponent>
	);
};
