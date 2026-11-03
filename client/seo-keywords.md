# SEO Keyword Map

This file is a planning reference only.
It does not change any runtime logic, metadata, routing, or rendering.

How to use this file:
- Keep one primary keyword per page.
- Add 3 to 6 secondary keywords that support the same search intent.
- Keep titles readable and brand-safe.
- Keep meta descriptions around 140 to 160 characters.
- Reuse the "Current metadata" section when you want to preserve existing copy.
- When you are ready later, these values can be moved into `usePageMeta()` calls and page copy.

## Home
URL: `/`
Purpose: Brand homepage and broad commercial entry page
Search intent: Commercial / navigational
Primary keyword: autonomous cyber immune systems
Secondary keywords: cybersecurity company, enterprise cybersecurity, managed security services, cyber resilience, AI cybersecurity platform
Current title: `Netcradus | Autonomous Cyber Immune Systems`
Current meta description: `Netcradus builds autonomous cyber immune systems, managed security capabilities, and enterprise-grade cyber resilience.`
Suggested SEO title: `Netcradus | Autonomous Cyber Immune Systems & Enterprise Cybersecurity`
Suggested SEO meta description: `Netcradus delivers autonomous cyber immune systems, managed security services, and enterprise cybersecurity solutions built for resilient organizations.`
Suggested H1 keyword focus: autonomous cyber immune systems
Notes: Use this page for broad brand terms and your most important category phrase. Avoid making this page compete too directly with `/services` or `/acis`.

## Platform
URL: `/platform`
Purpose: Product platform overview
Search intent: Commercial
Primary keyword: cybersecurity platform
Secondary keywords: enterprise security platform, AI SIEM platform, SOAR platform, autonomous cyber defense, threat detection platform
Current title: `Platform | Netcradus`
Current meta description: `Explore the Netcradus ACIS platform, product tiers, AI-SIEM engine, and SOAR automation capabilities.`
Suggested SEO title: `Cybersecurity Platform | Netcradus ACIS Platform`
Suggested SEO meta description: `Explore the Netcradus cybersecurity platform with AI-SIEM, SOAR automation, deployment tiers, and autonomous threat response capabilities.`
Suggested H1 keyword focus: cybersecurity platform
Notes: Keep this page centered on the platform as a whole, while `/acis` can go deeper on architecture and product-specific authority terms.

## Solutions
URL: `/services`
Purpose: Services and capability overview
Search intent: Commercial
Primary keyword: managed security services
Secondary keywords: cybersecurity solutions, managed SOC, cloud security services, network security services, enterprise security services
Current title: `Solutions | Netcradus`
Current meta description: `Explore Netcradus cybersecurity, managed SOC, cloud security, AI analytics, network security, and enterprise security solutions.`
Suggested SEO title: `Managed Security Services | Netcradus Cybersecurity Solutions`
Suggested SEO meta description: `Explore managed security services, cloud security, managed SOC, and enterprise cybersecurity solutions tailored by Netcradus.`
Suggested H1 keyword focus: managed security services
Notes: This is the best page for service-intent keywords. Let it own MSSP and managed security language rather than repeating those terms everywhere else.

## ACIS
URL: `/acis`
Purpose: Product authority and architecture page
Search intent: Commercial / product research
Primary keyword: AI SIEM platform
Secondary keywords: autonomous cyber immune system, SOAR platform, threat detection and response, cybersecurity automation, cyber defense architecture
Current title: `ACIS | Netcradus`
Current meta description: `Explore the Netcradus ACIS platform, its autonomous defense architecture, deployment tiers, and white paper.`
Suggested SEO title: `AI SIEM Platform | ACIS by Netcradus`
Suggested SEO meta description: `Explore ACIS by Netcradus, an AI SIEM platform with autonomous defense architecture, automated response workflows, and enterprise-ready deployment.`
Suggested H1 keyword focus: AI SIEM platform
Notes: Use this page for higher-intent product phrases and technical platform terminology.

## About
URL: `/about`
Purpose: Brand trust and entity page
Search intent: Navigational / trust-building
Primary keyword: about Netcradus
Secondary keywords: cybersecurity company profile, enterprise security experts, cyber resilience company, global cybersecurity company
Current title: `About | Netcradus`
Current meta description: `Learn about Netcradus, our cybersecurity mission, global presence, and ACIS-driven approach to enterprise resilience.`
Suggested SEO title: `About Netcradus | Cybersecurity Company Profile`
Suggested SEO meta description: `Learn about Netcradus, a global cybersecurity company focused on enterprise resilience, intelligent defense, and ACIS-led innovation.`
Suggested H1 keyword focus: about Netcradus
Notes: This page should reinforce expertise, credibility, and entity relevance rather than chase transactional keywords.

## Blog Listing
URL: `/blog`
Purpose: Editorial hub and topical authority page
Search intent: Informational
Primary keyword: cybersecurity blog
Secondary keywords: threat intelligence blog, security research, cyber defense insights, cybersecurity articles, security architecture analysis
Current title: `Blog | Netcradus`
Current meta description: `Read Netcradus threat intelligence, security architecture insight, and platform-focused cyber defense analysis.`
Suggested SEO title: `Cybersecurity Blog | Threat Intelligence & Research | Netcradus`
Suggested SEO meta description: `Read the Netcradus cybersecurity blog for threat intelligence, security research, architecture insight, and cyber defense analysis.`
Suggested H1 keyword focus: cybersecurity blog
Notes: Blog posts should target long-tail informational queries and link back to relevant commercial pages.

## Blog Post Template
URL: `/blog/:slug`
Purpose: Individual article SEO targeting
Search intent: Informational
Primary keyword: One keyword chosen per post
Secondary keywords: 3 to 6 close variants related to the post topic
Current title pattern: `${blog.title} | Netcradus`
Current meta description pattern: `blog?.seoDescription || "Read Netcradus intelligence and cybersecurity insights."`
Suggested SEO title pattern: `Primary Topic Keyword | Netcradus`
Suggested SEO meta description pattern: A concise summary that includes the primary keyword once and explains the article value.
Suggested H1 keyword focus: Match the article topic naturally
Notes: Each post should target a distinct topic such as ransomware defense, zero-day threats, Active Directory attacks, or quantum cybersecurity.

## Contact
URL: `/contact`
Purpose: Lead capture and inquiry page
Search intent: Transactional / commercial
Primary keyword: contact cybersecurity company
Secondary keywords: cybersecurity consultation, contact Netcradus, security platform demo, enterprise security consultation
Current title: `Contact | Netcradus`
Current meta description: `Contact Netcradus for cybersecurity consulting, ACIS platform discussions, and enterprise resilience planning.`
Suggested SEO title: `Contact Netcradus | Cybersecurity Consultation & ACIS Demo`
Suggested SEO meta description: `Contact Netcradus for cybersecurity consulting, enterprise resilience planning, and ACIS platform discussions with our team.`
Suggested H1 keyword focus: cybersecurity consultation
Notes: Keep the tone action-oriented. This page should support demo, consultation, and inquiry intent.

## Careers
URL: `/careers`
Purpose: Recruitment and employer brand page
Search intent: Informational / navigational
Primary keyword: cybersecurity careers
Secondary keywords: security jobs, cyber defense careers, AI security careers, work at Netcradus, cybersecurity company careers
Current title: Not explicitly set in `usePageMeta()`
Current meta description: Not explicitly set in `usePageMeta()`
Suggested SEO title: `Cybersecurity Careers | Work at Netcradus`
Suggested SEO meta description: `Explore cybersecurity careers at Netcradus across security engineering, cloud, AI, and enterprise defense roles.`
Suggested H1 keyword focus: cybersecurity careers
Notes: Best for talent acquisition terms, not service or product queries.

## Resources
URL: `/resources`
Purpose: Knowledge center and asset library
Search intent: Informational / commercial research
Primary keyword: cybersecurity resources
Secondary keywords: security white papers, threat reports, cyber defense documentation, security case studies, cybersecurity research
Current title: `Resources | Netcradus`
Current meta description: `Access Netcradus security research, white papers, case studies, documentation, and threat reports.`
Suggested SEO title: `Cybersecurity Resources | White Papers, Reports & Research | Netcradus`
Suggested SEO meta description: `Access cybersecurity resources from Netcradus including white papers, threat reports, documentation, and security research.`
Suggested H1 keyword focus: cybersecurity resources
Notes: This page can support both informational search intent and middle-funnel decision research.

## Newsletter
URL: `/newsletter`
Purpose: Subscription and retention page
Search intent: Transactional / informational
Primary keyword: cybersecurity newsletter
Secondary keywords: threat intelligence newsletter, security updates, cyber alerts, Netcradus newsletter
Current title: `Newsletter | Netcradus`
Current meta description: `Subscribe to the Netcradus newsletter for threat intelligence, product updates, and security insights.`
Suggested SEO title: `Cybersecurity Newsletter | Threat Intelligence Updates | Netcradus`
Suggested SEO meta description: `Subscribe to the Netcradus cybersecurity newsletter for threat intelligence, security insights, and product updates.`
Suggested H1 keyword focus: cybersecurity newsletter
Notes: Focus on subscription intent and the value of updates.

## Privacy Policy
URL: `/policy`
Purpose: Legal trust and compliance support
Search intent: Navigational / legal
Primary keyword: privacy policy
Secondary keywords: Netcradus privacy policy, data privacy, information governance, compliance policy
Current title: `Privacy Policy | Netcradus`
Current meta description: `Review Netcradus policy, privacy, governance, and compliance information.`
Suggested SEO title: `Privacy Policy | Netcradus`
Suggested SEO meta description: `Review the Netcradus Privacy Policy covering data handling, governance, and compliance information.`
Suggested H1 keyword focus: privacy policy
Notes: Legal pages should stay precise and trust-oriented rather than aggressively optimized.

## Terms of Service
URL: `/terms`
Purpose: Legal agreement page
Search intent: Navigational / legal
Primary keyword: terms of service
Secondary keywords: Netcradus terms, service terms, website terms, platform terms
Current title: `Terms of Service | Netcradus`
Current meta description: `Review the Netcradus Terms of Service for our cybersecurity platform and professional services.`
Suggested SEO title: `Terms of Service | Netcradus`
Suggested SEO meta description: `Review the Netcradus Terms of Service for our cybersecurity platform, website, and professional services.`
Suggested H1 keyword focus: terms of service
Notes: No need to force commercial keywords here.

## Data Protection
URL: `/data-protection`
Purpose: Privacy and compliance detail page
Search intent: Navigational / legal
Primary keyword: data protection policy
Secondary keywords: GDPR policy, information security policy, data handling policy, Netcradus data protection
Current title: `Data Protection Policy | Netcradus`
Current meta description: `Review the Netcradus Data Protection Policy for our approach to UK GDPR-aligned information handling.`
Suggested SEO title: `Data Protection Policy | Netcradus`
Suggested SEO meta description: `Review the Netcradus Data Protection Policy and our approach to GDPR-aligned information handling and safeguards.`
Suggested H1 keyword focus: data protection policy
Notes: Good place for compliance-specific terms, especially governance-oriented ones.

## Cookies
URL: `/cookies`
Purpose: Cookie disclosure page
Search intent: Navigational / legal
Primary keyword: cookie policy
Secondary keywords: Netcradus cookie policy, website cookies, browser storage policy, privacy preferences
Current title: `Cookie Policy | Netcradus`
Current meta description: `Read the Netcradus Cookie Policy for information about cookies, preferences, and security-related site storage.`
Suggested SEO title: `Cookie Policy | Netcradus`
Suggested SEO meta description: `Read the Netcradus Cookie Policy for details about cookies, preferences, and security-related website storage.`
Suggested H1 keyword focus: cookie policy
Notes: This page is mostly trust and compliance support.

## Responsible Disclosure
URL: `/responsible-disclosure`
Purpose: Security reporting policy
Search intent: Informational / legal
Primary keyword: responsible disclosure policy
Secondary keywords: vulnerability disclosure policy, security vulnerability reporting, coordinated disclosure, report a security issue
Current title: `Responsible Disclosure Policy | Netcradus`
Current meta description: `Review the Netcradus Responsible Disclosure Policy for reporting vulnerabilities safely and professionally.`
Suggested SEO title: `Responsible Disclosure Policy | Netcradus`
Suggested SEO meta description: `Review the Netcradus Responsible Disclosure Policy for reporting security vulnerabilities safely and professionally.`
Suggested H1 keyword focus: responsible disclosure policy
Notes: Use direct, security-community-friendly language.

## Phase
URL: `/phase`
Purpose: Campaign or concept page
Search intent: Depends on final content
Primary keyword: To be defined when page purpose is finalized
Secondary keywords: To be defined
Current title: Set in `phasePage.jsx`
Current meta description: Set in `phasePage.jsx`
Suggested SEO title: Define after clarifying the page audience and topic
Suggested SEO meta description: Define after clarifying the page audience and topic
Suggested H1 keyword focus: To be defined
Notes: This page should be assigned keywords only after its role in the site is confirmed.

## Recommended Workflow
1. Finalize the primary keyword for each live page.
2. Keep only one page as the strongest target for each core commercial phrase.
3. Update titles and descriptions in the planning file first.
4. When ready, mirror those values into `usePageMeta()` one page at a time.
5. After metadata, tune H1s, intro copy, and internal links to support the same keyword map.

## Good SEO Guardrails
- Avoid stuffing the same exact keyword multiple times in a title or description.
- Avoid giving several pages the same primary keyword.
- Prefer clear commercial language on service and product pages.
- Prefer informational long-tail phrases on blog posts and resources.
- Keep brand terms consistent as `Netcradus`.
