"use client";

import { CodeBlock, Container } from "@chakra-ui/react";
import { shikiAdapter } from "./adapters/highlight.adapter";

import { IntroductionComponent } from "./components/introduction.component";
import { DesignDecisionsComponent } from "./components/design-decisions.component";
import { HelloWorldComponent } from "./components/hello-world.component";

export default function Home() {
	return (
		<CodeBlock.AdapterProvider value={shikiAdapter}>
			<Container maxW="5xl" py={10} spaceY={12}>
				<IntroductionComponent />

				<DesignDecisionsComponent />

				<HelloWorldComponent />
			</Container>
		</CodeBlock.AdapterProvider>
	);
}
