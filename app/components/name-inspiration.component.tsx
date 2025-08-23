import { FunctionComponent } from "react";
import { SectionContainerComponent } from "./section-container.component";
import { Text } from "@chakra-ui/react";

interface NameInspirationComponentProps {}

export const NameInspirationComponent: FunctionComponent<
	NameInspirationComponentProps
> = () => {
	return (
		<SectionContainerComponent title="Name Inspiration">
			<Text>
				The name "Kaori" is inspired by Kaori Miyazono from the anime
				"Your Lie in April". She represents inspiration, motivation, and
				the desire to create something different from the standard, the
				same spirit behind creating this programming language. 🙂
			</Text>
		</SectionContainerComponent>
	);
};
