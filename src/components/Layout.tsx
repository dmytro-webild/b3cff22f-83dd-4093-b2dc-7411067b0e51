import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "Product", href: "#product" },
    { name: "Workflow", href: "#how-it-works" },
    { name: "Control", href: "#security" },
    { name: "Company", href: "#company" }
  ];

  return (
    <StyleProvider buttonVariant="bubble" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
          logo="TrabyOS"
          ctaButton={{
            text: "Explore TrabyOS",
            href: "#product",
          }}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
          columns={[
            {
              title: "TrabyOS",
              items: [
                {
                  label: "Product",
                  href: "#product",
                },
                {
                  label: "Workflow",
                  href: "#how-it-works",
                },
                {
                  label: "Control",
                  href: "#security",
                },
                {
                  label: "Company",
                  href: "#company",
                },
              ],
            },
            {
              title: "Social",
              items: [
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/trabyos/",
                },
              ],
            },
          ]}
          leftText="TrabyOS — Voice trading interface."
          rightText="© 2026 TrabyOS. All rights reserved."
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
