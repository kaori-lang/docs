import { FunctionComponent } from "react";
import { Text, Code, Stack, Highlight } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface HelloWorldComponentProps {}

let helloWorldCode = `
def main() {
    print("hello world");
}
`;

export const HelloWorldComponent: FunctionComponent<
	HelloWorldComponentProps
> = () => {
	return (
		<SectionContainerComponent title="The first Hello World">
			<Text>
				<Highlight
					query={["hello world"]}
					styles={{ bgColor: "gray.900" }}
				>
					Writing your first program in Kaori is quite simple and the
					main function does not need a return type annotation,
					because the entry point of the program does not need to
					return values.
				</Highlight>
			</Text>

			<CodeBlockComponent
				title="main.kaori"
				language="kaori"
				code={helloWorldCode}
			/>
		</SectionContainerComponent>
	);
};
