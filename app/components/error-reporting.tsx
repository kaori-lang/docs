import { FunctionComponent } from "react";
import { SectionContainerComponent } from "./section-container.component";
import { Highlight, Image, Text } from "@chakra-ui/react";
import { CodeBlockComponent } from "./code-block.component";

interface ErrorReportingComponentProps {}

const errorCode = `
def main() {
	print(2 +);
}
`;
export const ErrorReportingComponent: FunctionComponent<
	ErrorReportingComponentProps
> = () => {
	return (
		<SectionContainerComponent title="Error reporting">
			<Text>
				Error reporting is a core feature of Kaori. A programming
				language without clear diagnostics misses one of the most
				important pillars of usability. In the current implementation,
				it provides detailed error messages, showing both the line and
				the column where the error occurred and pointing exactly to the
				problematic code. This makes debugging much easier and helps
				developers understand what went wrong.
			</Text>

			<Text>Let's take a look at some example:</Text>
			<CodeBlockComponent
				language="kaori"
				title="main.kaori"
				code={errorCode}
			/>

			<Text>
				<Highlight
					query={["left", "right operand", "syntax error"]}
					styles={{ fontWeight: "bold" }}
				>
					What do we expect to happen in this code? can you guess? it
					is a syntax error, an addition operation expects to have a
					left and a right operand, but right parentheses is not a
					valid operand. Here is how the error reporting for it looks
					like:
				</Highlight>
			</Text>

			<Image src="./syntax_error.png" />
		</SectionContainerComponent>
	);
};
