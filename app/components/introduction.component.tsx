import { FunctionComponent } from "react";
import { Text, Highlight } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface IntroductionComponentProps {}

const introductionCode = `
def main() {
    $n: number = 5;
    print(fib(n));
}

def fib(n: number) -> number {
    if n == 0 {
        return 0;
    }
    if n == 1 {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}`;

export const IntroductionComponent: FunctionComponent<
	IntroductionComponentProps
> = () => {
	return (
		<SectionContainerComponent title="Introduction">
			<Text>
				<Highlight
					query={["simple", "expressive", "readable"]}
					styles={{ fontWeight: "bold" }}
				>
					Kaori is a statically typed programming language. Designed
					to be simple, expressive, and readable. Its syntax combines
					familiar ideas from modern languages such as Python and
					Rust, while keeping a minimal and clean structure.
				</Highlight>
			</Text>

			<Text>Here is a quick look at some syntax:</Text>

			<CodeBlockComponent
				title="main.kaori"
				language="kaori"
				code={introductionCode}
			/>
		</SectionContainerComponent>
	);
};
