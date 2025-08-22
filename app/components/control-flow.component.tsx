import { Stack, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface ControlFlowComponentProps {}

export const ControlFlowComponent: FunctionComponent<
	ControlFlowComponentProps
> = ({}) => {
	return (
		<SectionContainerComponent title="Control flow">
			<Text>
				Control flow allows you to decide how the code executes: you can
				branch into different paths or repeat code with loops.
			</Text>

			<Text>
				An if statement runs a block of code only if its condition is
				true.
			</Text>

			<CodeBlockComponent
				code={`def main() {
    if 10 > 5 {
        print("10 is bigger");
    } else if 2 < 3 {
        print("2 is smaller");
    } else {
        print("all the other branches condition were false");
    }
}`}
				language="kaori"
				title="main.kaori"
			/>

			<Text>
				A while loop runs a block of code repeatedly as long as the
				condition remains true.
			</Text>

			<CodeBlockComponent
				code={`def main() {
    i: num = 0;
    while i < 3 {
        print(i);
        i = i + 1;
    }
}`}
				language="kaori"
				title="main.kaori"
			/>

			<Text>
				A for loop is just a syntax sugar for the while loop and also
				runs a block of code as long as the condition remains true. It
				has a variable declaration, a condition, and an expression
				statement that increments the variable.
			</Text>

			<CodeBlockComponent
				code={`def main() {
    for i: num = 0; i < 3; i++ {
        print(i);
    }
}`}
				language="kaori"
				title="main.kaori"
			/>

			<Text>
				Loops can be nested, which is useful for iterating over multiple
				dimensions.
			</Text>

			<CodeBlockComponent
				code={`def main() {
    for x: num = 0; x < 2; x++ {
        for y: num = 0; y < 2; y++ {
            print(x + y);
        }
    }
}`}
				language="kaori"
				title="main.kaori"
			/>
		</SectionContainerComponent>
	);
};
