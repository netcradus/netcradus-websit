import { useEffect, useMemo, useRef } from "react";

// Toggle to temporarily show/hide team member photos
const showPhotos = false;

const team = [
  {
    name: "Mohit Sharma",
    role: "Founder & CEO",
    image: "/team/Mohit Sharma.png",
    bio: "Mohit Sharma founded Netcradus to build enterprise-grade cyber defense systems with stronger automation, clearer visibility, and practical business alignment. He leads the technical vision behind ACIS and the wider Netcradus security roadmap.",
    isOwner: true,
  },
  {
    name: "Mr. D. K. Sharma",
    role: "Director",
    image: "/team/Dinesh Sir.png",
    bio: "With over 30 years of cross-industry business experience, Mr. D. K. Sharma brings deep strategic insight and long-range leadership to Netcradus across operations, growth, and market development.",
  },
  {
    name: "Dhruv",
    role: "Project Manager",
    image: "/team/Dhruv.png",
    bio: "Dhruv manages project delivery, cross-functional coordination, and execution cadence to keep cybersecurity and IT engagements on schedule and aligned to scope.",
  },
  {
    name: "Kashish Sharma",
    role: "Management Head",
    image: "/team/Kashish Sharma.png",
    bio: "Kashish Sharma oversees management operations, internal coordination, and workflow continuity to support efficient day-to-day execution across the company.",
  },
  {
    name: "Rahul Pratap Singh",
    role: "Project Manager",
    image: "/team/Rahul.jpg",
    bio: "Rahul Pratap Singh is the Project Manager at Netcradus Pvt. Ltd., overseeing technology projects from planning to delivery. He ensures seamless team coordination, timely execution, and high-quality solutions across cybersecurity, software development, and IT services.",
  },
];

export default function TeamMembersSection() {
  const sectionRef = useRef(null);
  const owner = useMemo(() => team.find((member) => member.isOwner), []);
  const members = useMemo(() => team.filter((member) => !member.isOwner), []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const cards = section.querySelectorAll(".team-member-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="meet-the-team"
      ref={sectionRef}
      className="relative overflow-hidden bg-premium-radial py-24 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
            Leadership
          </span>
          <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            The Netcradus leadership team combines cybersecurity expertise, strategic
            direction, and operational execution to support enterprise clients globally.
          </p>
        </div>

        {owner ? (
          <article
            className="team-owner-card mb-10 mx-auto max-w-[900px] overflow-hidden rounded-3xl bg-[var(--color-surface-raised)] p-6 transition-transform duration-300 hover:-translate-y-1"
            data-animate-ignore="true"
          >
            <div className={showPhotos ? "grid items-center gap-6 lg:grid-cols-[220px_minmax(0,1fr)]" : "space-y-4"}>
              {showPhotos && (
                <div className="flex items-center justify-center">
                  <div className="h-[220px] w-[220px] overflow-hidden rounded-full bg-[#0f172a]">
                    <img
                      src={owner.image}
                      alt={owner.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              )}
              <div className="space-y-4" data-stagger-children>
                <span className="inline-flex rounded-full border border-accent/20 bg-accent/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
                  Founder Spotlight
                </span>
                <div className="space-y-3">
                  <h3 className="text-4xl font-black tracking-tight text-text-primary">
                    {owner.name}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.15em] text-accent">
                    {owner.role}
                  </p>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
                  {owner.bio}
                </p>
              </div>
            </div>
          </article>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2 justify-center">
          {members.map((member, index) => {
            const isLastOdd = members.length % 2 !== 0 && index === members.length - 1;
            return (
              <article
                key={member.name}
                className={`team-member-card team-member-reveal group flex h-full flex-col gap-5 overflow-hidden rounded-2xl bg-[var(--color-surface-raised)] p-6 transition-transform duration-300 hover:-translate-y-1 w-full ${
                  isLastOdd ? "md:col-span-2 md:mx-auto md:max-w-[calc(50%-12px)]" : ""
                }`}
                data-animate-ignore="true"
              >
                <div className={showPhotos ? "flex items-center gap-5" : ""}>
                  {showPhotos && (
                    <div className="h-32 w-32 overflow-hidden rounded-full bg-[#0f172a] flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-text-primary">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.15em] text-accent">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {member.bio}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
