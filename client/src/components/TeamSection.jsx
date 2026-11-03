// Toggle to temporarily show/hide team member photos
const showPhotos = false;

const team = [
  {
    name: "Mr. D. K. Sharma",
    role: "Director",
    image: "/team/Dinesh Sir.png",
    bio: "With over 30 years of cross-industry business experience, Mr. D. K. Sharma brings deep strategic insight and leadership to Netcradus. As Director, he drives the company's long-term vision, operational direction, and business development across global markets.",
  },
  {
    name: "Mohit Sharma",
    role: "Founder & CEO",
    image: "/team/Mohit Sharma.png",
    bio: "Mohit Sharma founded Netcradus with a focus on building enterprise-grade cyber defense solutions. A cybersecurity professional with deep expertise in threat management and IT infrastructure, he leads the company's technical vision and is spearheading the development of ACIS — Autonomous Cyber Immune System — designed for proactive threat detection and security automation.",
  },
  {
    name: "Dhruv",
    role: "Project Manager",
    image: "/team/Dhruv.png",
    bio: "Dhruv manages project execution, cross-team coordination, and operational workflows at Netcradus. He ensures cybersecurity and IT projects are delivered on time, within scope, and to client specification.",
  },
  {
    name: "Kashish Sharma",
    role: "Management Head",
    image: "/team/Kashish Sharma.png",
    bio: "Kashish Sharma oversees organizational management and business coordination at Netcradus. She maintains efficient internal workflows, supports strategic decision-making, and ensures smooth day-to-day operations across the company.",
  },
  {
    name: "Rahul Pratap Singh",
    role: "Project Manager",
    image: "/team/Rahul.jpg",
    bio: "Rahul Pratap Singh is the Project Manager at Netcradus Pvt. Ltd., overseeing technology projects from planning to delivery. He ensures seamless team coordination, timely execution, and high-quality solutions across cybersecurity, software development, and IT services.",
  },
  
];

export default function TeamSection() {
  return (
    <section
      id="meet-the-team"
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

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.06),transparent_35%),var(--color-surface)] shadow-[0_18px_46px_rgba(232,64,10,0.05)]"
            >
              {showPhotos && (
                <div className="aspect-[4/4.3] overflow-hidden border-b border-border bg-[var(--color-surface-raised)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              )}
              <div className="p-7">
                <h3 className="text-2xl font-black tracking-tight text-text-primary">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {member.role}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-text-secondary">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
