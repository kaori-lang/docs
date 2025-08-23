import { FunctionComponent } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { LuCircleCheck, LuCircleDashed } from "react-icons/lu";
import { SectionContainerComponent } from "./section-container.component";
import { List } from "@chakra-ui/react";

interface TheFutureComponentProps {}

const features = [
	{ label: "Error reporting", done: true },
	{ label: "Code comments", done: true },
	{ label: "Assign operator", done: true },
	{ label: "Logical operators", done: true },
	{ label: "Arithmetic operators", done: true },
	{ label: "Comparison operators", done: true },
	{ label: "Prefix and postfix unary operators", done: true },
	{ label: "print statement", done: true },
	{ label: "Variable declaration", done: true },
	{ label: "if / else statement", done: true },
	{ label: "for loop", done: true },
	{ label: "while loop", done: true },
	{ label: "Block statement", done: true },
	{ label: "Stack based bytecode", done: true },
	{ label: "Virtual machine interpreter", done: true },
	{ label: "Functions", done: true },
	{ label: "Structs and implementation block", done: false },
	{ label: "Errors handling", done: false },
	{ label: "Modules", done: false },
	{ label: "Standard library and native data structures", done: false },
	{ label: "Register based bytecode", done: false },
	{ label: "Faster virtual machine instructions dispatch", done: false },
	{ label: "Constant folding and other optimizations", done: false },
];

export const TheFutureComponent: FunctionComponent<
	TheFutureComponentProps
> = () => {
	return (
		<SectionContainerComponent title="The Future">
			<Text>
				I believe we can now confidently call Kaori a Turing-complete
				programming language. Many core features have already been
				implemented, and the journey so far has been both fun and
				challenging. Kaori is now more than 5x faster than its original
				Java implementation, since it is fully rewritten in Rust and no
				longer relies on a naive tree-walker interpreter.
			</Text>

			<Text>
				In fact, we already outperform Python in hot loops, running
				about 2x faster. PyPy is still about 4x faster than us, but we
				have more optimizations planned for the future. Our goal is to
				get as close as possible to PyPy JIT-level performance, without
				a JIT, it sounds very unlikely, but at the same time it is going
				to be a very exciting journey, don't you think?
			</Text>

			<Stack spaceY={0}>
				<Text fontWeight="bold">Features:</Text>
				<List.Root gap="2" variant="plain" align="center" mt={4}>
					{features.map((feature, index) => (
						<List.Item key={index}>
							<List.Indicator asChild color="green.500">
								{feature.done ? (
									<LuCircleCheck />
								) : (
									<LuCircleDashed />
								)}
							</List.Indicator>
							{feature.label}
						</List.Item>
					))}
				</List.Root>
			</Stack>
		</SectionContainerComponent>
	);
};
