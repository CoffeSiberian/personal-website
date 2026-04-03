import { SectionLabel } from "./SectionLabel";
import { SectionTitle } from "./SectionTitle";

interface SectionHeaderProps {
	label: string;
	title: string;
	size?: number;
}

export const SectionHeader = ({ label, title, size }: SectionHeaderProps) => (
	<div style={{ marginBottom: 40 }}>
		<SectionLabel>{label}</SectionLabel>
		<div style={{ height: 6 }} />
		<SectionTitle size={size}>{title}</SectionTitle>
	</div>
);
