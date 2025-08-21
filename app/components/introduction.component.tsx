import { FunctionComponent } from "react";
import { Text, Code, Stack, Highlight } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface IntroductionComponentProps {}

let introductionCode = `
def main() {
    fib_n: number = 5;
    print(fib(fib_n));
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
			<Stack spaceY={4}>
				<Text>
					<Highlight
						query={["simple", "expressive", "readable"]}
						styles={{ fontStyle: "italic" }}
					>
						Kaori is designed to be simple, expressive, and
						readable. It's syntax combines familiar ideas from
						modern languages while keeping a minimal and clean
						structure.
					</Highlight>
				</Text>

				<Text>Here is a quick look at some syntax:</Text>

				<CodeBlockComponent code={introductionCode} />
			</Stack>
		</SectionContainerComponent>
	);
};
