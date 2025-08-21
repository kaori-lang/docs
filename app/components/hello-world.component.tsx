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
			<Stack spaceY={4}>
				<Text>
					<Highlight
						query={["hello world"]}
						styles={{ bgColor: "gray.900" }}
					>
						Creating your first program in Kaori is quite simple and
						main function does not need an explicit return type
						annotation, because it is only the entry point of our
						program
					</Highlight>
				</Text>

				<CodeBlockComponent code={helloWorldCode} />
			</Stack>
		</SectionContainerComponent>
	);
};
