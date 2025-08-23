import { CodeBlock } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface CodeBlockComponentProps {
	title: string;
	code: string;
	language: string;
}

export const CodeBlockComponent: FunctionComponent<CodeBlockComponentProps> = ({
	title,
	code,
	language,
}) => {
	return (
		<CodeBlock.Root
			code={code}
			language={language}
			meta={{ showLineNumbers: true }}
		>
			<CodeBlock.Header>
				<CodeBlock.Title>{title}</CodeBlock.Title>
			</CodeBlock.Header>
			<CodeBlock.Content>
				<CodeBlock.Code overflowX="auto">
					<CodeBlock.CodeText />
				</CodeBlock.Code>
			</CodeBlock.Content>
		</CodeBlock.Root>
	);
};
