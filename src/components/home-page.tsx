type GlyphLogo = {
  kind: "glyph";
  src: string;
  background: string;
  insetClass: string;
};

type PlacedLogo = {
  kind: "placed";
  src: string;
  boxClass: string;
};

type BadgeLogo = {
  kind: "badge";
  src: string;
};

type Logo = GlyphLogo | PlacedLogo | BadgeLogo;

type Role = {
  place: string;
  title: string;
  logo: Logo;
};

type JourneyGroup = {
  label: string;
  roles: Role[];
};

const cashInset = "inset-[calc(28.13%-0.22px)]";
const weeblyInset =
  "inset-[calc(32.6%-0.17px)_calc(25%-0.25px)_calc(29.74%-0.2px)_calc(25.2%-0.25px)]";
const weeblyInsetAlt =
  "inset-[calc(32.6%-0.17px)_calc(25%-0.25px)_calc(29.74%-0.2px)_calc(25.21%-0.25px)]";

const journey: JourneyGroup[] = [
  {
    label: "Block, Jun 2018 — Oct 2026 (8 years)",
    roles: [
      {
        place: "Cash App, Neighborhoods",
        title: "Design Lead",
        logo: {
          kind: "glyph",
          src: "/logos/cash-app.svg",
          background: "bg-[#00d54b]",
          insetClass: cashInset,
        },
      },
      {
        place: "Square, Ecommerce",
        title: "Head Design",
        logo: {
          kind: "glyph",
          src: "/logos/square.svg",
          background: "bg-white",
          insetClass: cashInset,
        },
      },
    ],
  },
  {
    label: "Weebly, Feb 2014 — Jun 2018 (5 years)",
    roles: [
      {
        place: "Product, Creative, UX Writing",
        title: "VP Design",
        logo: {
          kind: "glyph",
          src: "/logos/weebly.svg",
          background: "bg-[#3678fd]",
          insetClass: weeblyInset,
        },
      },
      {
        place: "Product, Creative",
        title: "Creative Director",
        logo: {
          kind: "glyph",
          src: "/logos/weebly-2.svg",
          background: "bg-[#3678fd]",
          insetClass: weeblyInsetAlt,
        },
      },
      {
        place: "Product",
        title: "Product Design Lead",
        logo: {
          kind: "glyph",
          src: "/logos/weebly-2.svg",
          background: "bg-[#3678fd]",
          insetClass: weeblyInsetAlt,
        },
      },
    ],
  },
  {
    label: "Agency, Jun 2018 — Oct 2026 (8 years)",
    roles: [
      {
        place: "Signals Agency",
        title: "Founder",
        logo: {
          kind: "placed",
          src: "/logos/signals.svg",
          boxClass: "top-[6.5px] left-[8.5px] h-[17.891px] w-[13.667px]",
        },
      },
      {
        place: "Unfold.co",
        title: "Product Manager",
        logo: { kind: "badge", src: "/logos/unfold.svg" },
      },
      {
        place: "Veedesign",
        title: "Freelance Designer",
        logo: { kind: "badge", src: "/logos/veedesign.svg" },
      },
    ],
  },
];

function CompanyLogo({ logo }: { logo: Logo }) {
  if (logo.kind === "badge") {
    return (
      <img
        src={logo.src}
        alt=""
        width={32}
        height={32}
        className="size-8 shrink-0"
      />
    );
  }

  return (
    <div
      className={`relative size-8 shrink-0 overflow-hidden rounded-[60px] border-[0.5px] border-white/10 ${
        logo.kind === "glyph" ? logo.background : "bg-white"
      }`}
    >
      <span
        className={`absolute ${
          logo.kind === "glyph" ? logo.insetClass : logo.boxClass
        }`}
      >
        <img
          src={logo.src}
          alt=""
          className="absolute inset-0 block size-full max-w-none"
        />
      </span>
    </div>
  );
}

function RoleRow({ role }: { role: Role }) {
  return (
    <div className="flex items-center gap-3">
      <CompanyLogo logo={role.logo} />
      <div className="flex items-center gap-[2px] text-[20px] leading-6 tracking-[-0.2px] text-white">
        <span className="font-medium">{role.place}</span>
        <span className="font-thin">•</span>
        <span className="font-medium">{role.title}</span>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <main className="relative min-h-[1416px] bg-black text-white">
      <img
        src="/mark.svg"
        alt=""
        width={24}
        height={24}
        className="absolute top-6 left-[27px] size-6"
      />
      <div className="mx-auto w-[min(600px,calc(100%-48px))] pt-[120px] pb-[207px]">
        <img
          src="/portrait.jpg"
          alt=""
          width={90}
          height={90}
          className="size-[90px] rounded-[100px] object-cover"
        />
        <div className="mt-[120px] flex flex-col gap-[100px]">
          <div className="flex flex-col gap-5">
            <p className="text-[20px] leading-6 font-medium tracking-[-0.2px]">
              VeeO
            </p>
            <h1 className="font-display text-[46px] leading-[1.1] font-normal tracking-[-0.46px] [font-optical-sizing:auto]">
              Designing software in Atlanta. Currently at Cash App focused on
              Neighborhoods.
            </h1>
          </div>
          <section className="flex flex-col gap-[30px]">
            <h2 className="text-[20px] leading-6 font-medium tracking-[-0.2px]">
              Journey
            </h2>
            <div className="flex flex-col gap-10">
              {journey.map((group) => (
                <div key={group.label} className="flex flex-col gap-3">
                  <p className="text-[14px] leading-8 font-medium tracking-[-0.14px] text-[#8e8e8e]">
                    {group.label}
                  </p>
                  {group.roles.map((role) => (
                    <RoleRow key={`${role.place}-${role.title}`} role={role} />
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
