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
def createCar() -> Car {
    myCar: Car = { model: "Tesla Model S", year: 2025, electric: true };
    return myCar;
}
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
					<Heading size="2xl">Kaori Language Documentation</Heading>

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

					<Box w="full">
						<Heading size="lg" mb={2}>
							Operators
						</Heading>
						<Text mb={4}>
							Kaori provides arithmetic, comparison, equality, and
							logical operators. Here’s a summary:
						</Text>
						<Table.Root size="md">
							<Table.Header>
								<Table.Row>
									<Table.ColumnHeader>
										Operator(s)
									</Table.ColumnHeader>
									<Table.ColumnHeader>
										Category
									</Table.ColumnHeader>
									<Table.ColumnHeader>
										Description
									</Table.ColumnHeader>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{operatorItems.map((op) => (
									<Table.Row key={op.id}>
										<Table.Cell>{op.symbol}</Table.Cell>
										<Table.Cell>{op.category}</Table.Cell>
										<Table.Cell>{op.desc}</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Root>
						<Text mt={4}>
							Operators can be used in expressions and assigned to
							variables:
						</Text>
						<CodeBlockComponent code={opsExample} />
					</Box>

					<Box w="full">
						<Heading size="lg" mb={2}>
							Conditionals
						</Heading>
						<Text mb={4}>
							Use <b>if</b> / <b>else</b> to branch logic:
						</Text>
						<CodeBlockComponent code={ifElseExample} />
					</Box>

					<Box w="full">
						<Heading size="lg" mb={2}>
							Loops
						</Heading>
						<Text mb={4}>
							Kaori supports C-style <b>for</b> loops, nested
							loops, and <b>while</b> loops:
						</Text>
						<CodeBlockComponent code={forLoopExample} />
						<CodeBlockComponent code={nestedForExample} />
						<CodeBlockComponent code={whileExample} />
					</Box>

					<Box w="full">
						<Heading size="lg" mb={2}>
							Functions
						</Heading>
						<Text mb={4}>
							Functions are defined with <b>def</b>, accept typed
							parameters, and can specify a return type:
						</Text>
						<CodeBlockComponent code={fibExample} />
						<CodeBlockComponent code={fibIterativeExample} />
					</Box>

					<Box w="full">
						<Heading size="lg" mb={2}>
							Composite Types
						</Heading>
						<Text mb={4}>
							Structured objects are declared with{" "}
							<code>&#123; ... &#125;</code> and can be returned
							from functions:
						</Text>
						<CodeBlockComponent code={compositeExample} />
					</Box>
				</VStack>
			</Container>
		</CodeBlock.AdapterProvider>
	);
}
