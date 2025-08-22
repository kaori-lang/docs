import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kaori Programming Language",
	description: "Documentation and all about Kaori implementation",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
