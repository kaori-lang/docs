"use client";

import { CodeBlock, Container, Theme } from "@chakra-ui/react";
import { shikiAdapter } from "./adapters/highlight.adapter";

import { IntroductionComponent } from "./components/introduction.component";
import { DesignDecisionsComponent } from "./components/design-decisions.component";
import { HelloWorldComponent } from "./components/hello-world.component";
import { VariablesComponent } from "./components/variables.component";
import { OperatorsComponent } from "./components/operators.component";
import { GrammarComponent } from "./components/grammar.component";
import { ControlFlowComponent } from "./components/control-flow.component";
import { FunctionsComponent } from "./components/functions.component";

export default function Home() {
	return (
		<CodeBlock.AdapterProvider value={shikiAdapter}>
			<Container maxW="5xl" py="8" spaceY="16">
				<IntroductionComponent />

				<DesignDecisionsComponent />

				<GrammarComponent />

				<HelloWorldComponent />

				<VariablesComponent />

				<OperatorsComponent />

				<ControlFlowComponent />

				<FunctionsComponent />
			</Container>
		</CodeBlock.AdapterProvider>
	);
}
