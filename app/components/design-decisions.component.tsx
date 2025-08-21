import { FunctionComponent } from "react";
import { Accordion, Span } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";

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
		answer: "I fell in love with the C-like a long ago, sorry Python",
	},
	{
		value: "2",
		question:
			"How mutual recursion is handled without forward declarations?",
		answer: "Unlike C, Kaori does not require forward declarations. All functions are declared at the top level, and their names are known before their bodies are resolved. This means mutually recursive functions can reference each other naturally, without extra boilerplate",
	},
	{
		value: "3",
		question: "Why are there no default initialized variables?",
		answer: "Enforcing variables to be declared with a value removes the extra complexity of having to confirm whether it got assigned to some actual value or it is being referenced in some place with default value and it should throw compilation error",
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
		answer: "Lexical scope resolution for nested functions adds way more complexity than what I intend to deal with right now, capturing outer scope variables when every function is on the top level is a whole different story, I didn't want to spend too much time in that topic, nested functions might be added in the future!",
	},
	{
		value: "6",
		question: "Why only a single type to represent numbers?",
		answer: "The lack of distinctions between integers and floats is the kind of simplicity that I like",
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
