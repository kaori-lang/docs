import { FunctionComponent } from "react";
import { Text, Stack, Table, Highlight } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface OperatorsComponentProps {}

const operators = [
	{
		id: 1,
		symbol: "()",
		name: "Function call",
		precedence: 9,
		category: "Call",
	},
	{ id: 2, symbol: "!", name: "Not", precedence: 8, category: "Logical" },
	{
		id: 3,
		symbol: "-",
		name: "Negate",
		precedence: 8,
		category: "Arithmetic",
	},
	{
		id: 4,
		symbol: "**",
		name: "Power",
		precedence: 7,
		category: "Arithmetic",
	},
	{
		id: 5,
		symbol: "*",
		name: "Multiply",
		precedence: 6,
		category: "Arithmetic",
	},
	{
		id: 6,
		symbol: "/",
		name: "Divide",
		precedence: 6,
		category: "Arithmetic",
	},
	{
		id: 7,
		symbol: "%",
		name: "Modulo",
		precedence: 6,
		category: "Arithmetic",
	},
	{ id: 8, symbol: "+", name: "Add", precedence: 5, category: "Arithmetic" },
	{
		id: 9,
		symbol: "-",
		name: "Subtract",
		precedence: 5,
		category: "Arithmetic",
	},
	{
		id: 10,
		symbol: ">",
		name: "Greater",
		precedence: 4,
		category: "Comparison",
	},
	{
		id: 11,
		symbol: "<",
		name: "Less",
		precedence: 4,
		category: "Comparison",
	},
	{
		id: 12,
		symbol: ">=",
		name: "GreaterEqual",
		precedence: 4,
		category: "Comparison",
	},
	{
		id: 13,
		symbol: "<=",
		name: "LessEqual",
		precedence: 4,
		category: "Comparison",
	},
	{
		id: 14,
		symbol: "==",
		name: "Equal",
		precedence: 3,
		category: "Equality",
	},
	{
		id: 15,
		symbol: "!=",
		name: "NotEqual",
		precedence: 3,
		category: "Equality",
	},
	{ id: 16, symbol: "&&", name: "And", precedence: 2, category: "Logical" },
	{ id: 17, symbol: "||", name: "Or", precedence: 1, category: "Logical" },
	{
		id: 18,
		symbol: "=",
		name: "Assign",
		precedence: 0,
		category: "Assignment",
	},
];

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
						Operators are the building blocks of expressions. In
						Kaori, they are divided into arithmetic, comparison,
						logical, assignment, and unary categories. Each operator
						has a fixed precedence, which determines the order in
						which expressions are evaluated when multiple operators
						appear together.
					</Highlight>
				</Text>

				<Text>
					For example, multiplication and division have higher
					precedence than addition and subtraction:
				</Text>

				<CodeBlockComponent
					code={`3 + 4 * 5; //  23
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
					code={`true && false; // false
true || false; // true
!(5 == 6); // true`}
				/>

				<Text>
					<Highlight
						query={["assignment operator", "lowest precedence"]}
						styles={{ fontWeight: "bold" }}
					>
						The assignment operator = has the lowest precedence,
						ensuring that the expression on the right-hand side is
						fully evaluated before being assigned to the variable on
						the left:
					</Highlight>
				</Text>

				<CodeBlockComponent code={`a = 3 + 4 * 2; // a = 11;`} />

				<Text>
					<Highlight
						query={["Parentheses", "readability"]}
						styles={{ fontWeight: "bold" }}
					>
						Parentheses can always be used to make evaluation order
						explicit, and are recommended for readability in complex
						expressions, with lack of parentheses the parsing is
						done according to operators precedence:
					</Highlight>
				</Text>

				<Table.Root
					size="sm"
					w="fit"
					variant="outline"
					showColumnBorder
				>
					<Table.Header>
						<Table.Row>
							<Table.ColumnHeader>Symbol</Table.ColumnHeader>
							<Table.ColumnHeader>Name</Table.ColumnHeader>
							<Table.ColumnHeader>Category</Table.ColumnHeader>
							<Table.ColumnHeader textAlign="end">
								Precedence
							</Table.ColumnHeader>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{operators.map((op) => (
							<Table.Row key={op.id}>
								<Table.Cell>{op.symbol}</Table.Cell>
								<Table.Cell>{op.name}</Table.Cell>
								<Table.Cell>{op.category}</Table.Cell>
								<Table.Cell textAlign="end">
									{op.precedence}
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</Stack>
		</SectionContainerComponent>
	);
};
