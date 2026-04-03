import { Button } from "@/components/ui/button";
import { THEME } from "@/lib/theme";

interface IconProps {
	size?: number;
	color?: string;
	style?: React.CSSProperties;
}

interface IconButtonProps {
	icon: React.ComponentType<IconProps>;
	href: string;
	size?: number;
}

export const IconButton = ({
	icon: Icon,
	href,
	size = 18,
}: IconButtonProps) => (
	<a href={href} target="_blank" rel="noopener noreferrer">
		<Button
			variant="outline"
			style={{
				width: 42,
				height: 42,
				borderRadius: THEME.radius.md,
				padding: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				border: `1px solid ${THEME.colors.border.default}`,
				backgroundColor: "transparent",
				cursor: "pointer",
				color: THEME.colors.text.muted,
			}}
		>
			<Icon size={size} />
		</Button>
	</a>
);
