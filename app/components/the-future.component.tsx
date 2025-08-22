import { FunctionComponent } from "react";
import { Text, Code, Stack, Highlight } from "@chakra-ui/react";
import { SectionContainerComponent } from "./section-container.component";
import { CodeBlockComponent } from "./code-block.component";

interface TheFutureComponentProps {}

export const TheFutureComponent: FunctionComponent<
	TheFutureComponentProps
> = () => {
	return (
		<SectionContainerComponent title="The Future">
			<Text>
				I believe we can at least call it a turing complete programming
				language, we already added bunch of stuff and it was a fun and a
				long journey. Kaori is now 5x faster than its old Java
				implementation, since now its fully written in Rust and no
				longer uses a naive tree walker for the interpretation, in fact
				it also beats Python in hot loops with results pointing it as 2x
				faster, but PyPy beats us with 5x more speed. ☹️
			</Text>

			<Text>Here is a quick look at some syntax:</Text>
		</SectionContainerComponent>
	);
};
