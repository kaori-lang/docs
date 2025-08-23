import { FunctionComponent } from "react";
import { SectionContainerComponent } from "./section-container.component";
import { Text } from "@chakra-ui/react";

interface ErrorReportingComponentProps {}

export const ErrorReportingComponent: FunctionComponent<
	ErrorReportingComponentProps
> = () => {
	return (
		<SectionContainerComponent title="Error reporting">
			<Text>
				Error reporting is a core feature of Kaori. A programming
				language without clear diagnostics misses one of the most
				important pillars of usability. In the current implementation,
				it provides detailed error messages, showing both the line and
				the column where the error occurred and pointing exactly to the
				problematic code. This makes debugging much easier and helps
				developers understand what went wrong.
			</Text>
		</SectionContainerComponent>
	);
};
