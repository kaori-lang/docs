import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

export const metadata: Metadata = {
	title: "Kaori Programming Language",
	description: "Documentation and all about Kaori implementation",
	icons: "violin.svg",
};

const notoSans = Noto_Sans();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={notoSans.className} suppressHydrationWarning>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
