import { FunctionComponent } from "react";
import { Accordion, Span } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";

interface DesignDecisionsComponentProps {}

const questions = [
	{
		value: "0",
		question: "Why static types instead of dynamic?",
		answer: "Types make the code easier to reason about. There are no runtime type checks, which improves performance significantly because the compiler catches the type errors early",
	},
	{
		value: "1",
		question: "Why braces instead of indentation for blocks?",
		answer: "I fell in love with C-like syntax a long time ago, sorry Python </3",
	},
	{
		value: "2",
		question:
			"How is mutual recursion handled without forward declarations?",
		answer: "All functions are declared at the top level, and their names are known before their bodies are resolved. This allows mutually recursive functions to reference each other naturally, without extra boilerplate",
	},
	{
		value: "3",
		question: "Why are there no default-initialized variables?",
		answer: "Requiring variables to be declared with a value removes the need of resolving whether a variable had a value actually assigned or is it just holding a default initialized value",
	},
	{
		value: "4",
		question:
			"Why is there no creation of objects for functions at runtime?",
		answer: "By not creating runtime objects for functions, Kaori reduces indirection and overhead. Function calls translate directly to bytecode jumps, improving execution speed compared to languages where functions are first-class objects",
	},
	{
		value: "5",
		question: "Why are nested functions not allowed?",
		answer: "Lexical scope resolution for nested functions adds much more complexity than I want to handle right now. Capturing outer scope variables while keeping every function at the top level is a completely different challenge. Nested functions might be added in the future!",
	},
	{
		value: "6",
		question: "Why only a single type to represent numbers?",
		answer: "Not distinguishing between integers and floats is the kind of simplicity that I like",
	},
	{
		value: "7",
		question:
			"Why a stack-based virtual machine instead of a register-based one?",
		answer: "Generating bytecode for a stack-based VM is an easier yet efficient approach compared to a naïve tree walker. It is a temporary solution to get things running",
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
