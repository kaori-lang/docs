import { FunctionComponent } from "react";
import { Text, Code, Stack, Highlight, Alert } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface VariablesComponentProps {}

let variablesCode = `
def main() {
    foo: number = 5;
    bar: String = "hello world";
    foo_bar: bool = true;
}
`;

let invalidVariableCode = `
foo: number = 5;

def main() {
    bar: String = "hello world";
    foo_bar: bool = true;
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
					always be initialized with their right hand side values.
				</Text>

				<Text>
					<Highlight
						query={["String", "number", "bool"]}
						styles={{ fontWeight: "bold" }}
					>
						String, number and bool are the most basic types:
					</Highlight>
				</Text>
				<CodeBlockComponent code={variablesCode} />

				<Text>
					<Highlight query={["foo"]} styles={{ fontWeight: "bold" }}>
						Notice that foo is now declared in the global scope and
						that is not allowed, all objects can only live in local
						scope.
					</Highlight>
				</Text>
				<CodeBlockComponent code={invalidVariableCode} />
			</Stack>
		</SectionContainerComponent>
	);
};
