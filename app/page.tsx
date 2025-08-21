"use client";

import {
	CodeBlock,
	Container,
	Heading,
	Text,
	VStack,
	Box,
	Table,
} from "@chakra-ui/react";
import { shikiAdapter } from "./adapters/highlight.adapter";
import { CodeBlockComponent } from "./components/code-block.component";

const varsExample = `
b: String = "Kaori Lang";
count: number = 0;
flag: bool = true;
`;

const opsExample = `
result1: number = 943.0 / 27.54 * 12.95 / 599 / 2 * 94.323;
result2: number = 358 - 54.91 + 263.12 - 958 - 23 + 6.37;
result3: number = -24 + 94 / (3 * (12 - 34));

isGreater: bool = 12 > 7;
isEqual: bool = 5 == 5;
notEqual: bool = 5 != 6;

check: bool = !false;
`;

const ifElseExample = `
if count > 10 {
    flag = false;
} else {
    flag = true;
}
`;

const forLoopExample = `
for i: number = 0; i < 10; i++ {
    print("Iteration: ", i);
}
`;

const nestedForExample = `
for x: number = 0; x < 3; x++ {
    for y: number = 0; y < 2; y++ {
        print("x=", x, " y=", y);
    }
}
`;

const whileExample = `
while count < 5 {
    print("Count is ", count);
    count = count + 1;
}
`;

const fibExample = `
def fib(n: number) -> number {
    if n == 0 {
        return 0;
    }
    
    if n == 1 {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}
`;

const fibIterativeExample = `
def fib_iterative() {
    iterations: number = 1000;
    max_fib: number = 20;

    for i: number = 0; i < iterations; i++ {
        a: number = 0;
        b: number = 1;

        for j: number = 0; j < max_fib; j++ {
            temp: number = a + b;
            a = b;
            b = temp;
        }
    }
}
`;

const compositeExample = `
program                  -> function_declaration* EOF

type                     -> function_type | primitive_type
primitive_type           -> bool | num | str
function_type            -> ( [type [, type]*] ) -> type

variable_declaration     -> identifier : type = expression ;

parameter                -> identifier: type
function_declaration     -> def identifier ( [parameter [, parameter]*]? ) (-> type)? block_statement

block_statement          -> {
                           expression_statement
                         | print_statement
                         | if_statement
                         | while_statement
                         | for_statement
                         | block_statement
                         | variable_declaration }

expression_statement     -> expression ;

print_statement          -> print ( expression ) ;

if_statement             -> if expression block_statement [else [if_statement | block_statement]]?

while_statement          -> while expression block_statement

for_statement            -> for variable_declaration ; expression ; expression block_statement

expression               -> assignment | logic_or

assignment               -> identifier = expression

logic_or                 -> logic_and [|| logic_and]*

logic_and                -> equality [&& equality]*

equality                 -> comparison [[!= | ==] comparison]*

comparison               -> term [[> | >= | < | <=] term]*

term                     -> factor [[+ | -] factor]*

factor                   -> prefix_unary [[* | /] prefix_unary]*

prefix_unary             -> [! | -] unary | primary

primary                  -> number_literal
                         | string_literal
                         | boolean_literal
                         | postfix_unary
                         | ( expression )

postfix_unary            -> [identifier [++ | --]? | function_call]

function_call            -> callee [(expression [, expression]*)]*
`;

const operatorItems = [
	{
		id: 1,
		symbol: "+, -, *, /, %",
		category: "Arithmetic",
		desc: "Basic math operations",
	},
	{
		id: 2,
		symbol: "==, !=",
		category: "Equality",
		desc: "Compare values for equality/inequality",
	},
	{
		id: 3,
		symbol: ">, <, >=, <=",
		category: "Comparison",
		desc: "Numeric relational operators",
	},
	{ id: 4, symbol: "&&, ||, !", category: "Logical", desc: "Boolean logic" },
];

export default function Home() {
	return (
		<CodeBlock.AdapterProvider value={shikiAdapter}>
			<Container maxW="5xl" py={10}>
				<VStack spaceY={8} align="start">
					<Heading size="4xl">Kaori Programming Language</Heading>

					<Box w="full">
						<Heading size="lg" mb={2}>
							Variables & Types
						</Heading>
						<Text mb={4}>
							Kaori supports typed variable declarations using{" "}
							<b>:</b>. Example of <code>str</code>,{" "}
							<code>String</code>, <code>number</code>, and{" "}
							<code>bool</code>:
						</Text>
						<CodeBlockComponent code={varsExample} />
					</Box>
				</VStack>
			</Container>
		</CodeBlock.AdapterProvider>
	);
}
