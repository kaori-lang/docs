import { FunctionComponent } from "react";
import { Text, Stack, Table, Highlight } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface OperatorsComponentProps {}

export const OperatorsComponent: FunctionComponent<
	OperatorsComponentProps
> = () => {
	return (
		<SectionContainerComponent title="Expressions and operators">
			<Stack spaceY={4}>
				<Text>
					<Highlight
						query={[
							"arithmetic",
							"comparison",
							"logical",
							"assignment",
							"unary",
							"precedence",
						]}
						styles={{ fontWeight: "bold" }}
					>
						Operators are the building blocks of expressions. They
						are divided into arithmetic, comparison, logical,
						assignment, and unary categories. Each operator has a
						fixed precedence, which determines the order in which
						expressions are evaluated when multiple operators appear
						together.
					</Highlight>
				</Text>

				<Text>
					For example, multiplication and division have higher
					precedence than addition and subtraction:
				</Text>

				<CodeBlockComponent
					title="main.kaori"
					language="kaori"
					code={`3 + 4 * 5; // 23
(3 + 4) * 5; // 35`}
				/>

				<Text>
					<Highlight
						query={["Comparison operators", "boolean"]}
						styles={{ fontWeight: "bold" }}
					>
						{`Comparison operators like >, <=, or ==" always evaluate to a boolean value (true or false):`}
					</Highlight>
				</Text>

				<CodeBlockComponent
					title="main.kaori"
					language="kaori"
					code={`12 > 7; // true
7 == 12; // false
95 >= 95; // true`}
				/>

				<Text>
					<Highlight
						query={["Logical operators"]}
						styles={{ fontWeight: "bold" }}
					>
						Logical operators such as && (and) and || (or) allow
						combining boolean expressions:
					</Highlight>
				</Text>

				<CodeBlockComponent
					title="main.kaori"
					language="kaori"
					code={`true && false; // false
true || false; // true
!(5 == 6); // true`}
				/>

				<Text>
					<Highlight
						query={["assignment operator"]}
						styles={{ fontWeight: "bold" }}
					>
						The assignment operator has the lowest precedence,
						ensuring that the expression on the right-hand side is
						fully evaluated before being assigned to the variable on
						the left:
					</Highlight>
				</Text>

				<CodeBlockComponent
					title="main.kaori"
					language="kaori"
					code={`a = 3 + 4 * 2; // a = 11;`}
				/>

				<Text>
					<Highlight
						query={["Parentheses", "readability"]}
						styles={{ fontWeight: "bold" }}
					>
						Parentheses can always be used to make evaluation order
						explicit, and are recommended for readability in complex
						expressions, with lack of parentheses the parsing is
						done according to operators precedence, if the
						precedence is higher then the priority is higher
					</Highlight>
				</Text>
			</Stack>
		</SectionContainerComponent>
	);
};
