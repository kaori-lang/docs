import { Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface FunctionsComponentProps {}

export const FunctionsComponent: FunctionComponent<
	FunctionsComponentProps
> = ({}) => {
	return (
		<SectionContainerComponent title="Functions">
			<Text>
				A function is declared with the def keyword, followed by its
				name, parameters, and an optional return type.
			</Text>

			<CodeBlockComponent
				code={`def square(n: number) -> number {
    return n * n;
}

def main() {
    var result: number = square(5);
    print(result); // 25
}`}
				language="kaori"
				title="main.kaori"
			/>

			<Text>
				Functions can also call themselves recursively, just remember to
				include a base case. :D
			</Text>

			<CodeBlockComponent
				code={`def fib(n: number) -> number {
    if n == 0 {
        return 0;
    }
    if n == 1 {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

def main() {
    print(fib(6)); 
}`}
				language="kaori"
				title="main.kaori"
			/>
		</SectionContainerComponent>
	);
};
