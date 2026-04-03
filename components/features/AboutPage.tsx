import { ABOUT_SECTIONS, SITE_CONFIG } from "@/lib/data";
import { PageContainer } from "@/components/primitives/PageContainer";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { AboutBlock } from "./AboutBlock";
import { QuoteBlock } from "./QuoteBlock";

export const AboutPage = () => (
	<PageContainer maxWidth={720}>
		<SectionHeader label="Bio" title="Sobre Mí" />
		{ABOUT_SECTIONS.map((section) => (
			<AboutBlock key={section.id} section={section} />
		))}
		<QuoteBlock text={SITE_CONFIG.motto} />
	</PageContainer>
);
