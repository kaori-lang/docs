import { FunctionComponent } from "react";
import { Accordion, Span } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";

interface DesignDecisionsComponentProps {}

const questions = [
	{
		value: "0",
		question: "Why static types instead of dynamic?",
		answer: "Types make the code easier to reason about. There are no runtime type checks, which improves performance significantly because the compiler catches the type errors early.",
	},
	{
		value: "1",
		question:
			"How is mutual recursion handled without forward declarations?",
		answer: "All functions are declared at the top level, and their names are known before their bodies are resolved. This allows mutually recursive functions to reference each other naturally, without extra boilerplate.",
	},
	{
		value: "2",
		question: "Why are there no default-initialized variables?",
		answer: "Requiring variables to be declared with a value removes the need of resolving whether a variable had a value actually assigned or is it just holding a default initialized value.",
	},
	{
		value: "3",
		question: "Why are nested functions not allowed?",
		answer: "Lexical scope resolution for nested functions adds much more complexity than I want to handle right now. Nested functions might be added in the future!",
	},
	{
		value: "4",
		question: "Why only a single type to represent numbers?",
		answer: "Not distinguishing between integers and floats is the kind of simplicity that I like.",
	},
	{
		value: "5",
		question: "Why braces instead of indentation for blocks?",
		answer: "I fell in love with C-like syntax a long time ago, sorry Python. </3",
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
