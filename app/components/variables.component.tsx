import { FunctionComponent } from "react";
import { Text, Highlight } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface VariablesComponentProps {}

const variablesCode = `
def main() {
    var foo: number = 5;
    var bar: String = "hello world";
    var foo_bar: bool = true;
}
`;

const invalidVariableCode = `
var foo: number = 5;

def main() {
    var bar: String = "hello world";
    var foo_bar: bool = true;
}
`;

export const VariablesComponent: FunctionComponent<
	VariablesComponentProps
> = () => {
	return (
		<SectionContainerComponent title="Variables and data types">
			<Text>
				Variable declaration require type annotation, and must always be
				initialized with a value on the right-hand side.
			</Text>

			<Text>
				<Highlight
					query={["String", "number", "bool"]}
					styles={{ fontWeight: "bold" }}
				>
					String, number and bool are the most basic types:
				</Highlight>
			</Text>
			<CodeBlockComponent
				title="main.kaori"
				language="kaori"
				code={variablesCode}
			/>

			<Text>
				<Highlight query={["foo"]} styles={{ fontWeight: "bold" }}>
					Notice that foo is now declared in the global scope and that
					is not allowed, all objects can only live in the local
					scope.
				</Highlight>
			</Text>
			<CodeBlockComponent
				title="main.kaori"
				language="kaori"
				code={invalidVariableCode}
			/>
		</SectionContainerComponent>
	);
};
