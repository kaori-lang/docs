import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

export const metadata: Metadata = {
	title: "Kaori Programming Language",
	description: "Documentation and all about Kaori implementation",
	icons: "logo.jpg",
};

const notoSans = Noto_Sans({ preload: false });

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
