import { THEME } from "@/lib/theme";

interface PageContainerProps {
	children: React.ReactNode;
	maxWidth?: number;
}

export const PageContainer = ({
	children,
	maxWidth = 1100,
}: PageContainerProps) => (
	<section style={{ padding: "80px 24px", maxWidth, margin: "0 auto" }}>
		{children}
	</section>
);
