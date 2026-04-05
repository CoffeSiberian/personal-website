import { THEME } from "@/lib/theme";

interface PageContainerProps {
	children: React.ReactNode;
	maxWidth?: number;
}

export const PageContainer = ({
	children,
	maxWidth = 1100,
}: PageContainerProps) => (
	<section
		style={{
			padding: "var(--page-padding-top) var(--page-padding-x)",
			maxWidth,
			margin: "0 auto",
		}}
	>
		{children}
	</section>
);
