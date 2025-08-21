import { FunctionComponent } from "react";
import { Text, Stack, Highlight, Accordion, Span } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface DesignDecisionsComponentProps {}

const questions = [
	{
		value: "0",
		question: "Why static types instead of dynamic?",
		answer: "Types makes the code easier reason about, there is no runtime type check and that improves the performance significantly, because the compiler catch the errors early before the runtime happens",
	},
	{
		value: "1",
		question: "Why braces instead of indentation for blocks?",
		answer: "Kaori uses braces to explicitly mark the beginning and end of code blocks. This avoids ambiguity, makes nesting clear, and allows the language to support more complex expressions and statements without relying on whitespace sensitivity.",
	},
	{
		value: "2",
		question:
			"How mutual recursion is handled without forward declarations?",
		answer: "Unlike C, Kaori does not require forward declarations. All functions are declared at the top level, and their names are known before their bodies are resolved. This means mutually recursive functions can reference each other naturally, without extra boilerplate",
	},
	{
		value: "3",
		question: "Why there is no null value?",
		answer: "Having explicit null values and uninitialized variables adds more runtime checks and more overhead",
	},
	{
		value: "4",
		question:
			"Why there is no creation of objects for functions at runtime?",
		answer: "By not creating runtime objects for functions, Kaori reduces indirection and overhead. Function calls translate directly to bytecode jumps, improving execution speed compared to languages where functions are first-class objects.",
	},
	{
		value: "5",
		question: "Why nested functions are not allowed?",
		answer: "Kaori does not allow nested functions to keep the function resolution and bytecode layout simple. All functions exist at the top level, which avoids capturing outer scopes, reduces runtime overhead",
	},
	{
		value: "6",
		question: "Why only a single type to represent numbers?",
		answer: "The lack of distinctions between integers and floats keeps it simple",
	},
	{
		value: "7",
		question: "Why stack based virtual machine instead of register?",
		answer: "Generating bytecode for stack based vm is an easier and temporary solution to be able to get things running",
	},
];

export const DesignDecisionsComponent: FunctionComponent<
	DesignDecisionsComponentProps
> = () => {
	return (
		<SectionContainerComponent title="Design decisions">
			<Accordion.Root collapsible defaultValue={["b"]}>
				{questions.map((question, index) => (
					<Accordion.Item key={index} value={question.value}>
						<Accordion.ItemTrigger>
							<Span flex="1">{question.question}</Span>
							<Accordion.ItemIndicator />
						</Accordion.ItemTrigger>
						<Accordion.ItemContent>
							<Accordion.ItemBody>
								{question.answer}
							</Accordion.ItemBody>
						</Accordion.ItemContent>
					</Accordion.Item>
				))}
			</Accordion.Root>
		</SectionContainerComponent>
	);
};
