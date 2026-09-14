import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "Product", href: "#product" },
    { name: "Intelligence", href: "#how-it-works" },
    { name: "Risk", href: "#features" },
    { name: "Security", href: "#security" },
    { name: "Company", href: "#company" }
  ];

  return (
    <StyleProvider buttonVariant="bubble" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="TrabyOS"
        ctaButton={{
          text: "Get for Mac",
          href: "#hero",
        }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Product",
          items: [
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Security",
              href: "#security",
            },
            {
              label: "Roadmap",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#company",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "#",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/trabyos/",
            },
            {
              label: "Discord",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 TrabyOS. All rights reserved."
      rightText="Designed for active traders."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
