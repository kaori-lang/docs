"use client";

import { CodeBlock, Container } from "@chakra-ui/react";
import { shikiAdapter } from "./adapters/highlight.adapter";

import { IntroductionComponent } from "./components/introduction.component";
import { DesignDecisionsComponent } from "./components/design-decisions.component";
import { HelloWorldComponent } from "./components/hello-world.component";
import { VariablesComponent } from "./components/variables.component";
import { OperatorsComponent } from "./components/operators.component";
import { GrammarComponent } from "./components/grammar.component";
import { ControlFlowComponent } from "./components/control-flow.component";
import { FunctionsComponent } from "./components/functions.component";
import { NavbarComponent } from "./components/navbar.component";
import { TheFutureComponent } from "./components/the-future.component";
import { ErrorReportingComponent } from "./components/error-reporting";
import { NameInspirationComponent } from "./components/name-inspiration.component";

export default function Home() {
	return (
		<CodeBlock.AdapterProvider value={shikiAdapter}>
			<Container maxW="5xl" pt="8" pb="24" spaceY="16">
				<NavbarComponent />

				<IntroductionComponent />

				<DesignDecisionsComponent />

				<GrammarComponent />

				<HelloWorldComponent />

				<VariablesComponent />

				<OperatorsComponent />

				<ControlFlowComponent />

				<FunctionsComponent />

				<ErrorReportingComponent />

				<TheFutureComponent />

				<NameInspirationComponent />
			</Container>
		</CodeBlock.AdapterProvider>
	);
}
