"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

interface MenuItem {
  title: string;
  links: { text: string; url: string }[];
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Footer2Props {
  logo?: { url: string; src: string; alt: string; title: string };
  tagline?: string;
  menuItems?: MenuItem[];
  socials?: SocialLink[];
  copyright?: string;
  bottomLinks?: { text: string; url: string }[];
}
const TwitterXIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>X</title>
    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
  </svg>
);

const defaultMenus: MenuItem[] = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "/" },
      { text: "Services", url: "/" },
      { text: "About Us", url: "/" },
      { text: "Contact Us", url: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms & Conditions", url: "#" },
    ],
  },
  {
    title: "Address",
    links: [
      {
        text: "Smart Launch 425 Market Street, Suite 2100San Francisco, CA 94105USA",
        url: "https://www.google.com/maps?q=245+Park+Avenue,+39th+Floor,+New+York,+NY+10167,+USA",
      },
      {
        text: "info@smartlaunch-360.com",
        url: "mailto:info@smartlaunch-360.com",
      },
    ],
  },
];

const defaultSocials: SocialLink[] = [
  { name: "Twitter", url: "#", icon: TwitterXIcon },
  { name: "Instagram", url: "#", icon: Instagram },
  { name: "facebook", url: "#", icon: Facebook },
  { name: "LinkedIn", url: "#", icon: Linkedin },
];

const Footer = ({
  logo = {
    src: "/Logo.png",
    alt: "Smart Launch",
    title: "",
    url: "/",
  },
  tagline = "Smart Launch provides end-to-end ecommerce solutions designed to help brands launch, manage, and scale across global marketplaces.",
  menuItems = defaultMenus,
  socials = defaultSocials,
  copyright = "© 2025 Smart Launch, all rights reserved",
}: Footer2Props) => {
  const restItems = [
    ...menuItems.map((m) => ({ type: "menu" as const, data: m })),
    { type: "socials" as const, data: socials },
  ];

  const isOddCountMobile = restItems.length % 2 !== 0;
  const lastIndex = restItems.length - 1;

  return (
    <div className="px-0 mt-7 lg:mt-14  mx-auto">
      <section className="py-6 md:pt-16 bg-[#F5F8FB] rounded-none lg:rounded-[10px] text-[#3F3F3F]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <footer>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
              {/* Brand */}
              <div className="col-span-2 lg:col-span-2 text-left">
                <Link href={logo.url} className="flex items-center gap-3">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={125}
                    height={70}
                    className="h-20 w-36"
                  />
                </Link>
                <p className="mt-4 font-semibold text-[#3F3F3F]">{tagline}</p>
              </div>

              {restItems.map((item, idx) => {
                const isLast = idx === lastIndex;
                const mobileSpan =
                  isOddCountMobile && isLast ? "col-span-2" : "col-span-1";

                if (item.type === "menu") {
                  const section = item.data;

                  return (
                    <div
                      key={`menu-${idx}`}
                      className={`${mobileSpan} md:col-span-1 lg:col-span-1 text-left min-w-0`}
                    >
                      <h3 className="mb-4 text-base font-bold text-[#3F3F3F]">
                        {section.title}
                      </h3>
                      <ul className="space-y-3 text-sm">
                        {section.links.map((link, i) => {
                          const isEmail = link.url.startsWith("mailto:");
                          const isLocation =
                            link.url.includes("maps.google.com");

                          return (
                            <li key={i} className="flex items-start gap-2">
                              {isLocation && (
                                <MapPin className="w-4 h-4 mt-0.5 text-[#3F3F3F] shrink-0" />
                              )}
                              {isEmail && (
                                <Mail className="w-4 h-4 mt-0.5 text-[#3F3F3F] shrink-0" />
                              )}
                              <Link
                                href={link.url}
                                target={isLocation ? "_blank" : "_self"}
                                rel={isLocation ? "noopener noreferrer" : ""}
                                className="text-[#3F3F3F] hover:underline font-medium wrap-break-word"
                              >
                                {link.text}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                }

                // Socials
                return (
                  <div
                    key="socials"
                    className={`${mobileSpan} md:col-span-1 lg:col-span-1 text-left min-w-0`}
                  >
                    <h3 className="mb-4 text-base font-bold text-[#3F3F3F]">
                      Social
                    </h3>
                    <div className="flex items-center gap-3 sm:gap-4">
                      {item.data.map((s, i) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={i}
                            href={s.url}
                            aria-label={s.name}
                            className="inline-flex h-10 w-10 items-center justify-center hover:underline"
                          >
                            <Icon className="h-5 w-5 text-[#3F3F3F]" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="mt-12 border-t-[0.2] border-b-[0.2] pb-8 border-[#71717A] pt-6 text-sm md:pt-8">
              <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
                <p className="font-medium text-[#3F3F3F]">{copyright}</p>
              </div>
            </div>

            <div className="w-full text-center font-black text-[#D3D3D6] px-4">
              <h2 className="text-[74px] lg:text-[156px] ">SMART LAUNCH</h2>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export { Footer };
