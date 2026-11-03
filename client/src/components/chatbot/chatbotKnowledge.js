export const chatbotKnowledge = [
  {
    intent: "greeting",
    priority: 8,
    phrases: [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
      "hello team",
      "hi netcradus"
    ],
    keywords: ["hi", "hello", "hey", "greetings"],
    response: "Hello! 👋 Welcome to Netcradus.\n\nI can help you explore our cybersecurity, VAPT, SOC, cloud and AI services, or connect you with our team.\n\nWhat would you like to know?"
  },
  {
    intent: "services",
    priority: 1,
    phrases: [
      "what services do you provide",
      "what does netcradus do",
      "tell me about your services",
      "what solutions do you offer",
      "our services",
      "solutions overview"
    ],
    keywords: ["services", "service", "solutions", "offerings", "provide", "do you do"],
    response: "Netcradus delivers enterprise technology and cybersecurity solutions, including Cybersecurity Engineering, 24/7 Managed SOC, Cloud Security, AI Security, Network Security, and Enterprise Software solutions.",
    actions: [
      { label: "Our Services", type: "action", value: "services" },
      { label: "Contact Us", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "vapt",
    priority: 10,
    phrases: [
      "do you provide vapt",
      "can you help me with vapt services",
      "i need vapt",
      "what is vapt",
      "we need vulnerability testing",
      "vapt services",
      "vulnerability assessment",
      "penetration testing",
      "vulnerability assessment and penetration testing",
      "security testing",
      "pentest",
      "pen testing",
      "can you perform penetration testing",
      "need pentesting for our application",
      "can you test our website security"
    ],
    keywords: ["vapt", "penetration", "pentest", "pentesting", "pen testing"],
    response: "Yes. Netcradus provides Vulnerability Assessment and Penetration Testing (VAPT) services to help identify security weaknesses in applications, networks and infrastructure.\n\nOur team can help assess vulnerabilities, validate security controls and identify areas that require remediation.\n\nWould you like to speak with our cybersecurity team about your VAPT requirement?",
    actions: [
      { label: "Talk to an Expert", type: "route", value: "/contact" },
      { label: "Contact Us", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "cybersecurity",
    priority: 10,
    phrases: [
      "cybersecurity",
      "cyber security",
      "tell me about cybersecurity",
      "cybersecurity defense",
      "cybersecurity engineering"
    ],
    keywords: ["cybersecurity", "security", "cyber security"],
    response: "Our Cybersecurity Engineering & Defense solutions protect your hybrid infrastructure, harden data assets, and build digital resilience. We assist with threat assessment, Zero Trust architecture, policy & governance, and compliance mapping (ISO 27001, GDPR, CERT-In, NIST).",
    actions: [
      { label: "Talk to an Expert", type: "route", value: "/contact" },
      { label: "Contact Us", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "soc",
    priority: 10,
    phrases: [
      "soc",
      "managed soc",
      "soc monitoring",
      "24x7 soc",
      "security operations center",
      "security operations centre",
      "security monitoring",
      "threat monitoring"
    ],
    keywords: ["soc", "operations center", "operations centre", "monitoring", "threat monitoring", "security monitoring"],
    response: "Netcradus provides security monitoring and SOC-focused services designed to help organizations continuously monitor security events, identify suspicious activity and respond to potential incidents.\n\nOur 24/7 Security Operations Centre (SOC) offers continuous monitoring and rapid containment SLAs (under 5 minutes MTTD).\n\nFor a specific SOC requirement, I can connect you with our security team.",
    actions: [
      { label: "Talk to an Expert", type: "route", value: "/contact" },
      { label: "Contact Us", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "cloud_security",
    priority: 10,
    phrases: [
      "cloud security",
      "aws security",
      "azure security",
      "cloud protection",
      "secure cloud",
      "cloud infrastructure security",
      "cloud services",
      "cloud solutions"
    ],
    keywords: ["cloud", "aws", "azure", "gcp", "saas", "cspm"],
    response: "We secure hybrid workloads, cloud-native deployments, and SaaS applications with automated configuration audits, identity hardening (IAM), container security, and data loss prevention across AWS, Azure, and GCP.",
    actions: [
      { label: "Talk to an Expert", type: "route", value: "/contact" },
      { label: "Contact Us", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "network_security",
    priority: 10,
    phrases: [
      "network security",
      "zero trust",
      "firewall",
      "next-gen firewall",
      "network perimeter",
      "segmentation",
      "ids",
      "ips"
    ],
    keywords: ["network", "firewall", "perimeter", "segmentation", "zero trust"],
    response: "Our Network Security perimeter & segmentation defense blocks lateral movement, neutralizes intrusions, and prevents data exfiltration using Next-Gen Firewall, IPS/IDS implementation, and Zero Trust validation controls.",
    actions: [
      { label: "Talk to an Expert", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "iam",
    priority: 10,
    phrases: [
      "iam",
      "identity management",
      "access management",
      "identity and access management",
      "user access",
      "role based access",
      "rbac",
      "sso",
      "authentication",
      "authorization"
    ],
    keywords: ["iam", "identity", "rbac", "sso", "authentication", "authorization"],
    response: "Netcradus offers Identity & Access Management (IAM) hardening, implementing least-privilege access enforcement, role-based access control (RBAC), SSO, and federated identity configurations to protect cloud and enterprise systems.",
    actions: [
      { label: "Talk to an Expert", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "ai_security",
    priority: 10,
    phrases: [
      "ai",
      "artificial intelligence",
      "ai solutions",
      "ai security",
      "ai transformation",
      "llm",
      "llm security",
      "prompt injection",
      "model security"
    ],
    keywords: ["ai", "llm", "artificial intelligence"],
    negativeKeywords: ["maintain", "email", "domain"],
    response: "Our AI Security & LLM Model Security offerings protect machine learning pipelines, LLM interfaces, and automated AI agents from prompt injection, model poisoning, and Shadow AI tool discovery.",
    actions: [
      { label: "Talk to an Expert", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "digital_transformation",
    priority: 5,
    phrases: [
      "digital transformation",
      "modernize infrastructure",
      "digitization"
    ],
    keywords: ["transformation", "modernize", "digitize", "digitization"],
    response: "Netcradus supports digital transformation by integrating advanced cloud & software systems, automating workflows, modernizing legacy infrastructures, and ensuring robust security across your new digital assets.",
    actions: [
      { label: "Talk to an Expert", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "enterprise_software",
    priority: 5,
    phrases: [
      "enterprise software",
      "software solutions",
      "custom software"
    ],
    keywords: ["software", "application", "development"],
    response: "Netcradus delivers custom enterprise software solutions designed to streamline operations, integrate disparate data nodes, automate repetitive workflows, and scale securely in hybrid cloud environments.",
    actions: [
      { label: "Talk to an Expert", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "incident_response",
    priority: 10,
    phrases: [
      "incident response",
      "incident readiness",
      "active breach",
      "emergency support",
      "breach assistance",
      "compromise",
      "hacked"
    ],
    keywords: ["incident", "breach", "compromise", "hacked", "emergency"],
    response: "For cybersecurity breaches or active incidents, Netcradus operates a 24x7 Emergency Incident Response track. Our security analysts contain threats, perform forensics, and restore operations.\n\nIf you have an active breach, please contact us immediately.",
    actions: [
      { label: "Contact Us", type: "route", value: "/contact" },
      { label: "WhatsApp Support", type: "link", value: "https://wa.me/917290909571" }
    ]
  },
  {
    intent: "compliance",
    priority: 10,
    phrases: [
      "compliance",
      "compliance audit",
      "regulatory compliance",
      "iso 27001",
      "gdpr",
      "cert-in",
      "nist"
    ],
    keywords: ["compliance", "regulation", "audit", "governance", "iso", "gdpr", "cert-in", "nist"],
    response: "We provide compliance and governance mapping aligned with international standards, helping you secure certifications for ISO 27001, GDPR, CERT-In audits, MSME guidelines, and NIST benchmarks.",
    actions: [
      { label: "Talk to an Expert", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "contact",
    priority: 8,
    phrases: [
      "contact",
      "contact number",
      "how can i contact",
      "talk to someone",
      "speak with team",
      "sales team",
      "call netcradus",
      "email netcradus",
      "talk to an expert",
      "expert consultation"
    ],
    keywords: ["contact", "talk", "expert", "sales", "support", "reach"],
    response: "Absolutely. Our team would be happy to assist you. You can reach out directly via info@netcradus.com, call our 24x7 desk at +91 72909 09571, or submit a request on our Contact Us page.",
    actions: [
      { label: "Contact Us", type: "route", value: "/contact" },
      { label: "WhatsApp", type: "link", value: "https://wa.me/917290909571" }
    ]
  },
  {
    intent: "pricing",
    priority: 8,
    phrases: [
      "price",
      "pricing",
      "cost",
      "how much",
      "vapt price",
      "soc price",
      "price list"
    ],
    keywords: ["price", "pricing", "cost", "fee", "commercial", "rates"],
    response: "Pricing depends on the scope, environment, and specific requirements of the engagement.\n\nOur team can review your requirements and provide a tailored commercial proposal.\n\nWould you like to contact our team to discuss details?",
    actions: [
      { label: "Contact Us", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "location",
    priority: 8,
    phrases: [
      "where are you located",
      "office location",
      "office address",
      "where is netcradus",
      "address"
    ],
    keywords: ["location", "office", "located", "address", "headquarters"],
    response: "Netcradus is headquartered in Leicester, UK and operates its primary India Node/SOC in Delhi NCR.\n\nWould you like office-specific details?",
    actions: [
      { label: "UK Office Details", type: "action", value: "uk_office" },
      { label: "India Office Details", type: "action", value: "india_office" }
    ]
  },
  {
    intent: "uk_office",
    priority: 9,
    phrases: [
      "uk office",
      "united kingdom office",
      "london office",
      "leicester office",
      "uk address",
      "uk location"
    ],
    keywords: ["uk", "united kingdom", "leicester", "london"],
    response: "Our UK Headquarters details:\n\nNetcradus Ltd.\nLondon Road, Leicester, LE2 0QS, England, United Kingdom.\nEmail: info@netcradus.com",
    actions: [
      { label: "Contact Us", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "india_office",
    priority: 9,
    phrases: [
      "india office",
      "noida office",
      "delhi ncr office",
      "india address",
      "india location",
      "soc location"
    ],
    keywords: ["india", "noida", "sector 63", "delhi", "ncr"],
    response: "Our India Node details:\n\nNetcradus India Node\nG-260, Sector 63, Noida, UP, India.\nPhone: +91 72909 09571",
    actions: [
      { label: "Contact Us", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "phone",
    priority: 8,
    phrases: [
      "phone number",
      "what is your phone",
      "telephone",
      "contact number",
      "call number"
    ],
    keywords: ["phone", "telephone", "call", "number"],
    response: "You can call our 24x7 dispatch desk at +91 72909 09571.",
    actions: [
      { label: "WhatsApp Chat", type: "link", value: "https://wa.me/917290909571" }
    ]
  },
  {
    intent: "email",
    priority: 8,
    phrases: [
      "email",
      "what is your email",
      "email address",
      "mailing address"
    ],
    keywords: ["email", "mail", "inbox"],
    response: "Our official email addresses are:\n- General Enquiries: info@netcradus.com\n- Sales & Business: sales@netcradus.com\n- 24x7 Support: support@netcradus.com",
    actions: [
      { label: "Contact Us", type: "route", value: "/contact" }
    ]
  },
  {
    intent: "thank_you",
    priority: 8,
    phrases: [
      "thanks",
      "thank you",
      "thankyou",
      "great thanks",
      "okay thanks",
      "got it thanks"
    ],
    keywords: ["thanks", "thankyou", "thank"],
    response: "You're welcome! 😊\n\nIf you need anything else about Netcradus services, just ask."
  },
  {
    intent: "goodbye",
    priority: 8,
    phrases: [
      "bye",
      "goodbye",
      "good bye",
      "see you",
      "talk to you later"
    ],
    keywords: ["bye", "goodbye"],
    response: "Goodbye! Have a great day and stay secure! 🛡️"
  }
];
