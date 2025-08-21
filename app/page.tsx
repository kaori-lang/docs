"use client";

import { CodeBlock, Container } from "@chakra-ui/react";
import { shikiAdapter } from "./adapters/highlight.adapter";

import { IntroductionComponent } from "./components/introduction.component";
import { DesignDecisionsComponent } from "./components/design-decisions.component";
import { HelloWorldComponent } from "./components/hello-world.component";
import { VariablesComponent } from "./components/variables.component";

export default function Home() {
	return (
		<CodeBlock.AdapterProvider value={shikiAdapter}>
			<Container maxW="5xl" py="8" spaceY="8">
				<IntroductionComponent />

				<DesignDecisionsComponent />

				<HelloWorldComponent />

				<VariablesComponent />
			</Container>
		</CodeBlock.AdapterProvider>
	);
}
