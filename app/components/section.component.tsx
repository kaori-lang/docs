import { CodeBlock } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface SectionComponentProps {
	code: string;
}

export const SectionComponent: FunctionComponent<SectionComponentProps> = ({
	code,
}) => {
	return (
		<CodeBlock.Root
			code={code}
			language="kaori"
			meta={{ showLineNumbers: true }}
		>
			<CodeBlock.Header>
				<CodeBlock.Title>main.kaori</CodeBlock.Title>
			</CodeBlock.Header>
			<CodeBlock.Content>
				<CodeBlock.Code>
					<CodeBlock.CodeText />
				</CodeBlock.Code>
			</CodeBlock.Content>
		</CodeBlock.Root>
	);
};
