// ═══════════════════════════════════════════════════════════════
// CAPS Partnership Intelligence — Partner Data File
// Source: HubSpot OEM Partnership Pipeline (Pipeline ID: 0)
// Stages: 1=Applied, 2=In Process, 3=Completed, 4=Rejected
//
// SNAPSHOT TIMESTAMP  : 2026-06-12T03:25:11Z
// LAST HUBSPOT CHANGE : 2026-06-12T03:20:20.662Z
// TOTAL RECORDS       : 96
//   Completed  (3)    : 41
//   In Process (2)    : 14
//   Applied    (1)    : 34
//   Rejected   (4)    : 7
//
// DELTA vs BASELINE (May 20, 2026):
//   16 new partners added
//   0  stage changes
//
// HOW TO REFRESH:
//   In Claude, type: "Refresh the partnership dashboard"
//   Claude pulls changes since 2026-06-12T03:20:20.662Z
//   Replace ONLY this file on GitHub — index.html stays unchanged.
// ═══════════════════════════════════════════════════════════════

const CAPS_DATA_SNAPSHOT_TS  = "2026-06-12T03:25:11Z";
const CAPS_HS_LAST_MODIFIED  = "2026-06-12T03:20:20.662Z";
const CAPS_TOTAL_RECORDS     = 96;

const HS_PARTNERS = [
  {
    "id": "314691661523",
    "name": "Smart Communications",
    "stage": "1",
    "cat": "Digital Government",
    "desc": "Smart Communications provides a cloud-based customer communications management (CCM) platform enabling government agencies to manage complex, high-volume outbound communications \u2014 including notices, letters, and forms \u2014 across digital and print channels.",
    "solutions": [
      "Customer Communications Management (CCM)",
      "Government Notices & Letters",
      "Digital Forms Management",
      "Omnichannel Correspondence",
      "Citizen Engagement Platform"
    ]
  },
  {
    "id": "314947109610",
    "name": "Netskope",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "Netskope provides a Security Service Edge (SSE) and SASE platform protecting data and users accessing cloud applications, the web, and private applications. It specializes in cloud-native DLP, CASB, and Zero Trust Network Access from a single platform.",
    "solutions": [
      "Zero Trust Network Access (ZTNA)",
      "SASE Platform",
      "Cloud Access Security Broker (CASB)",
      "Data Loss Prevention (DLP)",
      "Secure Web Gateway"
    ]
  },
  {
    "id": "314691661522",
    "name": "Infor",
    "stage": "1",
    "cat": "ERP & Enterprise Apps",
    "desc": "Infor provides industry-specific cloud ERP solutions for government, healthcare, and public services. Its CloudSuite Public Sector and Lawson platforms are used by state and local governments, school districts, and healthcare systems for finance, HR, supply chain, and asset management.",
    "solutions": [
      "Cloud ERP (Public Sector)",
      "Lawson Financial Management",
      "HR & Payroll",
      "Supply Chain Management",
      "Healthcare ERP"
    ]
  },
  {
    "id": "314944949988",
    "name": "CyberArk",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "CyberArk is the industry leader in Privileged Access Management, helping organizations secure and monitor privileged accounts, credentials, and access across on-premise and cloud environments. It is FedRAMP authorized and a core component of Zero Trust security architectures.",
    "solutions": [
      "Privileged Access Management (PAM)",
      "Secrets Management",
      "Privileged Session Monitoring",
      "Zero Trust Security",
      "Identity Security"
    ]
  },
  {
    "id": "314691661521",
    "name": "Netsmart Technologies",
    "stage": "1",
    "cat": "Healthcare IT",
    "desc": "Netsmart provides electronic health records (EHR), care coordination, and analytics platforms specifically built for behavioral health, addiction treatment, and human services organizations. Its myAvatar and CareFabric platforms are used by state agencies and community health organizations.",
    "solutions": [
      "Behavioral Health EHR",
      "Care Coordination Platform",
      "Human Services Analytics",
      "Substance Use Disorder Systems",
      "Medicaid Care Management"
    ]
  },
  {
    "id": "314945672945",
    "name": "Okta",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "Okta is a leading cloud-based identity and access management (IAM) platform providing Single Sign-On (SSO), Multi-Factor Authentication (MFA), and identity governance for enterprise and government environments. It is FedRAMP authorized and widely specified in government Zero Trust RFPs.",
    "solutions": [
      "Single Sign-On (SSO)",
      "Multi-Factor Authentication (MFA)",
      "Identity Governance",
      "Zero Trust Identity",
      "Workforce Identity Management"
    ]
  },
  {
    "id": "315544873711",
    "name": "DocuSign",
    "stage": "1",
    "cat": "Digital Government",
    "desc": "DocuSign is the global standard for electronic signatures and digital agreement management. It holds FedRAMP authorization and is used extensively across federal, state, and local agencies for contracts, procurement approvals, HR documentation, and citizen-facing forms.",
    "solutions": [
      "Electronic Signatures (e-Sign)",
      "Digital Agreement Management",
      "Government Contract Workflows",
      "Procurement Automation",
      "FedRAMP-Authorized e-Signature"
    ]
  },
  {
    "id": "314647014086",
    "name": "Rapid7",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "Rapid7 provides cloud-based vulnerability management, threat detection, and incident response solutions. Its InsightVM platform is one of the most widely deployed vulnerability scanners in enterprise and government environments, supporting NIST and FISMA compliance reporting.",
    "solutions": [
      "Vulnerability Management",
      "InsightVM Scanner",
      "Threat Detection & Response",
      "Penetration Testing Support",
      "FISMA Compliance Reporting"
    ]
  },
  {
    "id": "314947109607",
    "name": "Deltek",
    "stage": "1",
    "cat": "ERP & Enterprise Apps",
    "desc": "Deltek provides ERP and project management software built specifically for government contractors. Its Costpoint and Vantagepoint platforms handle project accounting, billing, compliance, contract management, and workforce administration for firms operating in the federal contracting space.",
    "solutions": [
      "Government Contractor ERP (Costpoint)",
      "Project Accounting",
      "DCAA Compliance",
      "Contract Lifecycle Management",
      "Workforce Management for Gov Contractors"
    ]
  },
  {
    "id": "314945672942",
    "name": "Google Cloud Platform (GCP)",
    "stage": "1",
    "cat": "Cloud & Infrastructure",
    "desc": "GCP is Google's enterprise cloud platform offering compute, storage, data analytics, and AI/ML services with FedRAMP-authorized government cloud options. Google Cloud has significantly expanded its government presence with Vertex AI and Gemini capabilities.",
    "solutions": [
      "Cloud Infrastructure (IaaS)",
      "Google Workspace",
      "Vertex AI & Gemini (AI/ML)",
      "BigQuery Data Analytics",
      "FedRAMP Cloud Hosting"
    ]
  },
  {
    "id": "314692364016",
    "name": "Tyler Technologies",
    "stage": "1",
    "cat": "Digital Government",
    "desc": "Tyler Technologies is the largest software company in the US focused exclusively on the public sector, providing ERP, financials, courts and justice, public safety, and citizen engagement platforms to thousands of county and municipal government agencies.",
    "solutions": [
      "Munis ERP (Local Government)",
      "Courts & Justice Platform",
      "Public Safety Software",
      "Tax & Revenue Management",
      "Citizen Engagement Portal"
    ]
  },
  {
    "id": "315544873708",
    "name": "ZScaler",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "Zscaler is a cloud-native cybersecurity company and a leader in Zero Trust Network Access (ZTNA) and SASE. It replaces traditional VPNs by routing all traffic through its cloud security platform, ensuring users connect directly to applications without touching the corporate network.",
    "solutions": [
      "Zero Trust Network Access (ZTNA)",
      "SASE Platform",
      "Secure Internet Access",
      "Private Application Access",
      "Cloud Security Posture"
    ]
  },
  {
    "id": "314692364014",
    "name": "Accela (new record)",
    "stage": "1",
    "cat": "Digital Government",
    "desc": "Accela provides a civic engagement platform for government agencies, supporting permitting, licensing, inspections, and regulatory management. Widely adopted by state and local governments to digitize public-facing services.",
    "solutions": [
      "Permitting & Licensing",
      "Code Enforcement",
      "Inspections Management",
      "Regulatory Compliance",
      "Civic Engagement Platform"
    ]
  },
  {
    "id": "314947056373",
    "name": "Industrial Defender",
    "stage": "3",
    "cat": "Cybersecurity",
    "desc": "Industrial Defender provides cybersecurity solutions for operational technology (OT) and industrial control systems (ICS), helping critical infrastructure organizations achieve visibility, compliance, and security across their OT environments.",
    "solutions": [
      "OT/ICS Cybersecurity",
      "Industrial Asset Management",
      "ICS Compliance",
      "Critical Infrastructure Protection",
      "OT Vulnerability Management"
    ]
  },
  {
    "id": "314649847502",
    "name": "FMX",
    "stage": "1",
    "cat": "ITSM & Asset Management",
    "desc": "FMX provides a cloud-based facilities and maintenance management platform for education, government, and property management organizations. It simplifies work order management, preventive maintenance, and asset tracking through an intuitive interface.",
    "solutions": [
      "Facilities Management",
      "Work Order Management",
      "Preventive Maintenance",
      "Asset Tracking",
      "School & Campus Maintenance"
    ]
  },
  {
    "id": "314646964933",
    "name": "Huntress",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "Huntress is a managed cybersecurity platform providing threat detection, endpoint protection, and managed security operations specifically designed for small and mid-size businesses and MSP-served environments. It focuses on detecting and remediating persistent footholds and ransomware.",
    "solutions": [
      "Managed Endpoint Detection & Response (EDR)",
      "Ransomware Detection",
      "Threat Hunting",
      "Managed Security Operations",
      "MSP Cybersecurity Platform"
    ]
  },
  {
    "id": "305375109849",
    "name": "NinjaOne",
    "stage": "1",
    "cat": "ITSM & Asset Management",
    "desc": "NinjaOne provides remote monitoring and management (RMM), patch management, and endpoint management solutions for IT operations and MSPs.",
    "solutions": [
      "Remote Monitoring & Management (RMM)",
      "Patch Management",
      "Endpoint Management",
      "IT Automation",
      "Remote Access"
    ]
  },
  {
    "id": "305110128363",
    "name": "Veeam",
    "stage": "3",
    "cat": "Cloud & Infrastructure",
    "desc": "Veeam provides backup, disaster recovery, and data management solutions for virtual, cloud, and hybrid environments.",
    "solutions": [
      "Backup & Replication",
      "Disaster Recovery",
      "Cloud Data Management",
      "Microsoft 365 Backup",
      "Ransomware Protection"
    ]
  },
  {
    "id": "305206771449",
    "name": "Fortinet",
    "stage": "3",
    "cat": "Cybersecurity",
    "desc": "Fortinet provides cybersecurity solutions including firewalls, secure networking, and threat protection across enterprise environments.",
    "solutions": [
      "Next-Generation Firewall (NGFW)",
      "Secure SD-WAN",
      "Endpoint Detection & Response (EDR)",
      "Zero Trust Network Access (ZTNA)",
      "FortiSASE"
    ]
  },
  {
    "id": "305379429086",
    "name": "Watchguard Technologies",
    "stage": "3",
    "cat": "Cybersecurity",
    "desc": "WatchGuard provides network security, endpoint protection, and multi-factor authentication solutions.",
    "solutions": [
      "Next-Generation Firewall (NGFW)",
      "Endpoint Detection & Response (EDR)",
      "Multi-Factor Authentication (MFA)",
      "Wi-Fi Security",
      "Zero Trust Endpoint"
    ]
  },
  {
    "id": "303033039555",
    "name": "Nuologix",
    "stage": "3",
    "cat": "Distributors",
    "desc": "Distributor specific to ManageEngine products.",
    "solutions": [
      "ManageEngine Product Distribution",
      "IT Solutions Procurement"
    ]
  },
  {
    "id": "302984649416",
    "name": "Carahsoft",
    "stage": "3",
    "cat": "Distributors",
    "desc": "Carahsoft is a government IT marketplace and distributor serving federal, state, and local government agencies.",
    "solutions": [
      "Government IT Marketplace",
      "Software Licensing for Government",
      "Hardware Procurement",
      "Cloud Solutions for Government"
    ]
  },
  {
    "id": "302487325431",
    "name": "Rubrik",
    "stage": "3",
    "cat": "Cybersecurity",
    "desc": "Rubrik is a cybersecurity company specializing in Zero Trust Data Security to protect enterprise, cloud, and SaaS data.",
    "solutions": [
      "Zero Trust Data Security",
      "Backup & Recovery",
      "Ransomware Protection",
      "Cloud Data Security",
      "SaaS Data Protection"
    ]
  },
  {
    "id": "304982892243",
    "name": "ServiceNow",
    "stage": "3",
    "cat": "ITSM & Asset Management",
    "desc": "ServiceNow is a cloud-based platform that enables organizations to automate workflows across IT service management, IT operations, HR, customer service, and enterprise processes.",
    "solutions": [
      "IT Service Management (ITSM)",
      "IT Operations Management (ITOM)",
      "HR Service Delivery",
      "Security Operations",
      "GRC",
      "App Engine (Low-Code)"
    ]
  },
  {
    "id": "305144473334",
    "name": "Cisco",
    "stage": "3",
    "cat": "Networking & Infrastructure",
    "desc": "Cisco provides networking, cybersecurity, and IT infrastructure solutions including routers, switches, security appliances, and collaboration tools.",
    "solutions": [
      "Network Switches & Routing",
      "Cisco Firepower NGFW",
      "Cisco Duo MFA",
      "Cisco Webex (UCaaS)",
      "Cisco SD-WAN",
      "Cisco Meraki"
    ]
  },
  {
    "id": "305144473333",
    "name": "Palo Alto Networks",
    "stage": "3",
    "cat": "Cybersecurity",
    "desc": "Palo Alto Networks provides advanced cybersecurity solutions including firewalls, endpoint protection, cloud security, and threat intelligence.",
    "solutions": [
      "Next-Generation Firewall (NGFW)",
      "Prisma SASE",
      "Cortex XDR",
      "Prisma Cloud (CNAPP)",
      "Threat Intelligence",
      "Zero Trust Network Access"
    ]
  },
  {
    "id": "303036624597",
    "name": "Manage Engine",
    "stage": "3",
    "cat": "ITSM & Asset Management",
    "desc": "ManageEngine provides a comprehensive suite of enterprise IT management, security, and operations tools including ServiceDesk Plus, Endpoint Central, and OpManager.",
    "solutions": [
      "IT Service Management (ITSM)",
      "Endpoint Management (UEM)",
      "Network Monitoring",
      "AD Management",
      "SIEM (Log360)",
      "Privileged Access Management (PAM)"
    ]
  },
  {
    "id": "305381589696",
    "name": "WP Engine",
    "stage": "3",
    "cat": "Cloud & Infrastructure",
    "desc": "WP Engine provides managed WordPress hosting and digital experience solutions, offering secure, scalable, and high-performance hosting for websites and web applications.",
    "solutions": [
      "Managed WordPress Hosting",
      "Web Application Hosting",
      "Digital Experience Platform",
      "Headless CMS Hosting"
    ]
  },
  {
    "id": "305057153725",
    "name": "Absorb LMS",
    "stage": "1",
    "cat": "Training & Certification",
    "desc": "Absorb LMS is a cloud-based learning management system enabling organizations to deliver, track, and manage training programs, employee development, and compliance learning.",
    "solutions": [
      "Learning Management System (LMS)",
      "Employee Training",
      "Compliance Training",
      "eLearning Delivery",
      "Training Analytics"
    ]
  },
  {
    "id": "305379430097",
    "name": "Kiteworks",
    "stage": "2",
    "cat": "Cybersecurity",
    "desc": "Kiteworks provides a secure content communications platform enabling organizations to share sensitive data through secure file transfer, managed file sharing, email protection, and governance.",
    "solutions": [
      "Secure File Transfer (MFT)",
      "Secure Email Gateway",
      "Data Loss Prevention (DLP)",
      "Content Firewall",
      "Compliance & Governance"
    ]
  },
  {
    "id": "305057873635",
    "name": "ClickUp",
    "stage": "2",
    "cat": "ITSM & Asset Management",
    "desc": "ClickUp is a cloud-based project management and productivity platform enabling teams to plan, track, and collaborate on tasks, workflows, and projects.",
    "solutions": [
      "Project Management",
      "Task Management",
      "Workflow Automation",
      "Team Collaboration",
      "Docs & Wikis"
    ]
  },
  {
    "id": "305378709199",
    "name": "Infosec IQ",
    "stage": "3",
    "cat": "Cybersecurity",
    "desc": "Infosec IQ provides cybersecurity awareness training and phishing simulation tools for organizations.",
    "solutions": [
      "Security Awareness Training",
      "Phishing Simulation",
      "Compliance Training",
      "Cybersecurity Education"
    ]
  },
  {
    "id": "305059312372",
    "name": "DataDog",
    "stage": "3",
    "cat": "Cloud & Infrastructure",
    "desc": "Datadog provides cloud monitoring, observability, and security solutions for infrastructure, applications, logs, and performance management.",
    "solutions": [
      "Cloud Monitoring & Observability",
      "Application Performance Monitoring (APM)",
      "Log Management",
      "Security Monitoring (SIEM/CSPM)",
      "Infrastructure Metrics"
    ]
  },
  {
    "id": "305379430087",
    "name": "Redgate",
    "stage": "2",
    "cat": "Data & Analytics",
    "desc": "Redgate provides database DevOps and data management tools that help organizations automate development, deployment, and monitoring of databases.",
    "solutions": [
      "Database DevOps",
      "Database Monitoring",
      "SQL Change Automation",
      "Data Masking",
      "Database Management"
    ]
  },
  {
    "id": "305380149978",
    "name": "Datto",
    "stage": "2",
    "cat": "Cloud & Infrastructure",
    "desc": "Datto provides backup, disaster recovery, and cybersecurity solutions designed for MSPs and IT service providers.",
    "solutions": [
      "Backup & Disaster Recovery",
      "Business Continuity",
      "Ransomware Recovery",
      "Cloud Backup",
      "Microsoft 365 Backup"
    ]
  },
  {
    "id": "305377269464",
    "name": "EDMO",
    "stage": "3",
    "cat": "Training & Certification",
    "desc": "EDMO provides workforce development, apprenticeship programs, and talent training services focused on building skills in technology and career readiness.",
    "solutions": [
      "Workforce Development",
      "Technology Apprenticeship Programs",
      "Career Readiness Training",
      "Talent Development"
    ]
  },
  {
    "id": "305379429110",
    "name": "PeopleCert",
    "stage": "3",
    "cat": "Training & Certification",
    "desc": "PeopleCert provides professional certification and credentialing services, including globally recognized frameworks such as ITIL, PRINCE2, and other IT certifications.",
    "solutions": [
      "ITIL Certification",
      "PRINCE2 Certification",
      "DevOps Certifications",
      "Digital Credentials",
      "Professional Development"
    ]
  },
  {
    "id": "305377269476",
    "name": "Accela",
    "stage": "1",
    "cat": "Digital Government",
    "desc": "Accela provides a civic engagement platform for government agencies, supporting permitting, licensing, inspections, and regulatory management.",
    "solutions": [
      "Permitting & Licensing Platform",
      "Code Enforcement",
      "Inspections Management",
      "Regulatory Compliance",
      "Civic Engagement Platform"
    ]
  },
  {
    "id": "305377989356",
    "name": "Icertis",
    "stage": "1",
    "cat": "ERP & Enterprise Apps",
    "desc": "Icertis provides a contract lifecycle management (CLM) platform enabling organizations to manage contracts, compliance, obligations, and risk across the enterprise.",
    "solutions": [
      "Contract Lifecycle Management (CLM)",
      "Contract AI & Analytics",
      "Obligation Management",
      "Compliance Management"
    ]
  },
  {
    "id": "305376549599",
    "name": "Absolute Software",
    "stage": "3",
    "cat": "Cybersecurity",
    "desc": "Absolute provides endpoint security and visibility solutions with persistence technology, enabling organizations to secure, track, and manage devices across distributed environments.",
    "solutions": [
      "Endpoint Security & Visibility",
      "Zero Trust Endpoint Protection",
      "Secure Access",
      "Device Tracking",
      "Firmware Persistence"
    ]
  },
  {
    "id": "305380869826",
    "name": "TCP",
    "stage": "2",
    "cat": "HCM & HR",
    "desc": "TCP provides workforce management solutions including time tracking, attendance, employee scheduling, and labor compliance tools.",
    "solutions": [
      "Time & Attendance",
      "Employee Scheduling",
      "Labor Compliance",
      "Workforce Management"
    ]
  },
  {
    "id": "305376549584",
    "name": "Laserfiche",
    "stage": "2",
    "cat": "Document Management",
    "desc": "Laserfiche is an enterprise content management (ECM) and business process automation platform enabling organizations to manage documents, automate workflows, ensure compliance, and drive digital transformation.",
    "solutions": [
      "Enterprise Content Management (ECM)",
      "Document Management System",
      "Business Process Automation",
      "Records Management",
      "Compliance Workflows"
    ]
  },
  {
    "id": "305380868851",
    "name": "Fiix",
    "stage": "1",
    "cat": "ITSM & Asset Management",
    "desc": "Fiix provides a computerized maintenance management system (CMMS) for asset tracking, maintenance scheduling, and work order management.",
    "solutions": [
      "CMMS",
      "Asset Tracking",
      "Maintenance Scheduling",
      "Work Order Management",
      "Preventive Maintenance"
    ]
  },
  {
    "id": "305455895266",
    "name": "Zoho",
    "stage": "1",
    "cat": "CRM & Business Apps",
    "desc": "Zoho provides a suite of business applications including CRM, finance, HR, and collaboration tools for organizations of all sizes.",
    "solutions": [
      "CRM",
      "Marketing Automation",
      "Finance & Accounting",
      "HR Management",
      "Project Management"
    ]
  },
  {
    "id": "305380868847",
    "name": "Varonis",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "Varonis provides data security and analytics solutions focused on protecting sensitive data and detecting insider threats.",
    "solutions": [
      "Data Security Platform",
      "Data Loss Prevention (DLP)",
      "Insider Threat Detection",
      "Data Classification",
      "Access Governance"
    ]
  },
  {
    "id": "305379429083",
    "name": "Netwrix",
    "stage": "2",
    "cat": "Cybersecurity",
    "desc": "Netwrix provides data security, identity governance, and compliance solutions to protect sensitive data.",
    "solutions": [
      "Data Security",
      "Identity Governance",
      "Compliance Auditing",
      "Privileged Access Management (PAM)",
      "Change Auditing"
    ]
  },
  {
    "id": "305377989329",
    "name": "ConnectSecure",
    "stage": "3",
    "cat": "Cybersecurity",
    "desc": "ConnectSecure provides vulnerability scanning and risk management solutions for MSPs and enterprise IT environments.",
    "solutions": [
      "Vulnerability Scanning",
      "Risk Assessment",
      "Compliance Reporting",
      "Attack Surface Management"
    ]
  },
  {
    "id": "305206772419",
    "name": "Dropsuite",
    "stage": "1",
    "cat": "Cloud & Infrastructure",
    "desc": "Dropsuite provides cloud backup and archiving solutions for email, Microsoft 365, and Google Workspace environments.",
    "solutions": [
      "Email Backup",
      "Microsoft 365 Backup",
      "Google Workspace Backup",
      "Cloud Archiving",
      "Data Recovery"
    ]
  },
  {
    "id": "305205332669",
    "name": "PagerDuty",
    "stage": "1",
    "cat": "ITSM & Asset Management",
    "desc": "PagerDuty provides incident response and IT operations management solutions to help organizations manage outages and critical events.",
    "solutions": [
      "Incident Management",
      "AIOps",
      "Event Intelligence",
      "On-Call Management",
      "DevOps Automation"
    ]
  },
  {
    "id": "305110128367",
    "name": "Proofpoint",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "Proofpoint provides email security, threat protection, and compliance solutions to safeguard organizations from cyber threats.",
    "solutions": [
      "Email Security",
      "Anti-Phishing",
      "Threat Protection",
      "Data Loss Prevention (DLP)",
      "Security Awareness Training"
    ]
  },
  {
    "id": "305206772413",
    "name": "KnowBe4",
    "stage": "2",
    "cat": "Cybersecurity",
    "desc": "KnowBe4 provides security awareness training and phishing simulation platforms to help organizations reduce human cybersecurity risk.",
    "solutions": [
      "Security Awareness Training",
      "Phishing Simulation",
      "Compliance Training",
      "Risk Scoring",
      "Security Culture Assessment"
    ]
  },
  {
    "id": "305241362115",
    "name": "Tenable",
    "stage": "3",
    "cat": "Cybersecurity",
    "desc": "Tenable provides vulnerability management and cybersecurity solutions to identify, assess, and prioritize risks across IT environments.",
    "solutions": [
      "Vulnerability Management",
      "Nessus Scanner",
      "Cloud Security Posture (CSPM)",
      "OT Security",
      "Cyber Exposure Platform"
    ]
  },
  {
    "id": "305110128362",
    "name": "SentinelOne",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "SentinelOne provides AI-powered endpoint protection, detection, and response (EDR/XDR) solutions for enterprise cybersecurity.",
    "solutions": [
      "Endpoint Detection & Response (EDR)",
      "XDR Platform",
      "AI-Powered Threat Detection",
      "Ransomware Protection",
      "Managed Detection & Response (MDR)"
    ]
  },
  {
    "id": "305375828724",
    "name": "Claroty",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "Claroty provides cybersecurity solutions for operational technology (OT), IoT, and cyber-physical systems, focusing on industrial and critical infrastructure protection.",
    "solutions": [
      "OT Security",
      "IoT Security",
      "ICS/SCADA Security",
      "Cyber-Physical Systems Protection",
      "Asset Discovery"
    ]
  },
  {
    "id": "305375109846",
    "name": "Arctic Wolf",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "Arctic Wolf provides managed detection and response (MDR) and security operations solutions for continuous threat monitoring and response.",
    "solutions": [
      "Managed Detection & Response (MDR)",
      "Security Operations Center (SOC)",
      "Incident Response",
      "Cloud Detection & Response",
      "Vulnerability Assessment"
    ]
  },
  {
    "id": "305375828718",
    "name": "Darktrace",
    "stage": "4",
    "cat": "Cybersecurity",
    "desc": "Darktrace provides AI-driven cybersecurity solutions focused on threat detection, response, and autonomous security.",
    "solutions": [
      "AI Threat Detection",
      "Autonomous Response",
      "Email Security",
      "Cloud Security",
      "OT Security"
    ]
  },
  {
    "id": "305206050535",
    "name": "Qualys",
    "stage": "1",
    "cat": "Cybersecurity",
    "desc": "Qualys provides cloud-based security and compliance solutions including vulnerability management, asset discovery, and risk assessment.",
    "solutions": [
      "Vulnerability Management",
      "Asset Discovery",
      "Cloud Security Posture (CSPM)",
      "Web Application Scanning",
      "Policy Compliance"
    ]
  },
  {
    "id": "305375828714",
    "name": "CrowdStrike",
    "stage": "2",
    "cat": "Cybersecurity",
    "desc": "CrowdStrike provides endpoint protection, threat intelligence, and managed detection and response (MDR) solutions.",
    "solutions": [
      "Endpoint Detection & Response (EDR)",
      "XDR Platform",
      "Threat Intelligence",
      "Managed Detection & Response (MDR)",
      "Identity Protection",
      "Cloud Security"
    ]
  },
  {
    "id": "305143753409",
    "name": "Ping Identity",
    "stage": "3",
    "cat": "Cybersecurity",
    "desc": "Ping Identity provides identity and access management (IAM) solutions including SSO, MFA, and identity governance.",
    "solutions": [
      "Single Sign-On (SSO)",
      "Multi-Factor Authentication (MFA)",
      "Identity Governance & Administration (IGA)",
      "Zero Trust Security",
      "Privileged Access Management (PAM)"
    ]
  },
  {
    "id": "305241361144",
    "name": "IBM",
    "stage": "3",
    "cat": "Cloud & Infrastructure",
    "desc": "IBM provides enterprise technology solutions including cloud computing, AI, data platforms, cybersecurity, and enterprise software.",
    "solutions": [
      "IBM Cloud (IaaS)",
      "IBM Security QRadar (SIEM)",
      "IBM watsonx AI",
      "IBM Maximo (EAM)",
      "IBM FlashSystem Storage",
      "IBM DataStage (ETL)"
    ]
  },
  {
    "id": "305144473331",
    "name": "CommVault",
    "stage": "2",
    "cat": "Cloud & Infrastructure",
    "desc": "Commvault provides data protection, backup, recovery, and data management solutions for enterprise and cloud environments.",
    "solutions": [
      "Backup & Disaster Recovery",
      "Cloud Data Protection",
      "Ransomware Recovery",
      "Microsoft 365 Backup",
      "Data Governance"
    ]
  },
  {
    "id": "305206771415",
    "name": "Solarwinds",
    "stage": "3",
    "cat": "ITSM & Asset Management",
    "desc": "SolarWinds provides IT monitoring, network management, and security solutions for infrastructure and operations teams.",
    "solutions": [
      "Network Performance Monitoring",
      "Server & Application Monitor",
      "Security Event Manager (SIEM)",
      "IT Help Desk",
      "Database Performance Analyzer"
    ]
  },
  {
    "id": "305206050514",
    "name": "Splunk",
    "stage": "2",
    "cat": "Data & Analytics",
    "desc": "Splunk provides data analytics, SIEM, and observability solutions enabling organizations to monitor, search, and analyze machine data in real time.",
    "solutions": [
      "SIEM & Log Management",
      "Observability",
      "IT Operations Analytics",
      "Threat Intelligence",
      "Splunk SOAR"
    ]
  },
  {
    "id": "305375108844",
    "name": "ArrowSphere",
    "stage": "3",
    "cat": "Distributors",
    "desc": "ArrowSphere is a cloud marketplace platform by Arrow Electronics enabling partners to procure, manage, and bill cloud services across multiple vendors.",
    "solutions": [
      "Cloud Marketplace",
      "Multi-Vendor Procurement",
      "Cloud Billing & Management",
      "SaaS Distribution"
    ]
  },
  {
    "id": "305205331657",
    "name": "Ingram Micro",
    "stage": "1",
    "cat": "Distributors",
    "desc": "Ingram Micro is a global distributor of technology products and services, providing access to hardware, software, cloud, and lifecycle solutions.",
    "solutions": [
      "Hardware Distribution",
      "Software Licensing",
      "Cloud Marketplace",
      "Lifecycle Services",
      "IT Procurement"
    ]
  },
  {
    "id": "305241361124",
    "name": "SHI International",
    "stage": "3",
    "cat": "Distributors",
    "desc": "SHI International is a global IT solutions provider offering procurement, licensing, and cloud solutions across a wide range of enterprise technologies.",
    "solutions": [
      "IT Procurement",
      "Software Licensing",
      "Cloud Solutions",
      "Hardware Resale",
      "Government IT Services"
    ]
  },
  {
    "id": "305206770422",
    "name": "TD SYNNEX",
    "stage": "3",
    "cat": "Distributors",
    "desc": "TD SYNNEX is a global IT distributor providing access to hardware, software, and cloud solutions from major OEMs.",
    "solutions": [
      "IT Distribution",
      "Cloud Marketplace",
      "Hardware Resale",
      "Software Licensing",
      "Solution Aggregation"
    ]
  },
  {
    "id": "305241361086",
    "name": "Pax8",
    "stage": "3",
    "cat": "Distributors",
    "desc": "Pax8 is a cloud marketplace distributor enabling partners to procure, manage, and bill cloud solutions including Microsoft, security, and SaaS products.",
    "solutions": [
      "Cloud Marketplace",
      "Microsoft CSP",
      "Security Product Distribution",
      "SaaS Procurement",
      "Billing & Management"
    ]
  },
  {
    "id": "305206049514",
    "name": "UKG",
    "stage": "4",
    "cat": "HCM & HR",
    "desc": "UKG provides workforce management and human capital management solutions including payroll, scheduling, time tracking, and HR services.",
    "solutions": [
      "Human Capital Management (HCM)",
      "Payroll Management",
      "Workforce Scheduling",
      "Time & Attendance",
      "HR Service Delivery"
    ]
  },
  {
    "id": "305206049513",
    "name": "Workday",
    "stage": "4",
    "cat": "ERP & Enterprise Apps",
    "desc": "Workday provides enterprise cloud applications for finance, human resources, planning, and analytics.",
    "solutions": [
      "Human Capital Management (HCM)",
      "Financial Management",
      "Adaptive Planning",
      "Analytics & Reporting",
      "Payroll Management"
    ]
  },
  {
    "id": "305144472305",
    "name": "ADP",
    "stage": "2",
    "cat": "HCM & HR",
    "desc": "ADP provides human capital management (HCM) solutions including payroll, HR, talent management, and workforce administration services.",
    "solutions": [
      "Payroll Processing",
      "HR Management",
      "Talent Management",
      "Benefits Administration",
      "Time & Attendance"
    ]
  },
  {
    "id": "305206770390",
    "name": "Ellucian",
    "stage": "4",
    "cat": "Education Technology",
    "desc": "Ellucian provides software and services specifically designed for higher education institutions, including student information systems, ERP, analytics, and cloud solutions.",
    "solutions": [
      "Student Information System (SIS)",
      "Banner ERP",
      "Colleague ERP",
      "Advising & Analytics",
      "Higher Education Cloud"
    ]
  },
  {
    "id": "305207490243",
    "name": "SAP",
    "stage": "3",
    "cat": "ERP & Enterprise Apps",
    "desc": "SAP provides enterprise resource planning (ERP) solutions and business applications for finance, supply chain, HR, and analytics.",
    "solutions": [
      "SAP S/4HANA ERP",
      "SAP SuccessFactors HCM",
      "SAP Ariba Procurement",
      "SAP Analytics Cloud",
      "SAP BTP Platform"
    ]
  },
  {
    "id": "305142303430",
    "name": "Oracle",
    "stage": "3",
    "cat": "ERP & Enterprise Apps",
    "desc": "Oracle provides enterprise software and cloud solutions including ERP, database management systems, cloud infrastructure (OCI), and enterprise applications.",
    "solutions": [
      "Oracle Cloud ERP",
      "Oracle HCM Cloud",
      "Oracle Database",
      "Oracle Cloud Infrastructure (OCI)",
      "Oracle Analytics",
      "PeopleSoft"
    ]
  },
  {
    "id": "304982893299",
    "name": "Dynatrace",
    "stage": "1",
    "cat": "Cloud & Infrastructure",
    "desc": "Dynatrace provides application performance monitoring (APM), observability, and AI-driven monitoring solutions for cloud-native and enterprise applications.",
    "solutions": [
      "Application Performance Monitoring (APM)",
      "Full-Stack Observability",
      "AIOps",
      "Log Management",
      "Cloud Infrastructure Monitoring"
    ]
  },
  {
    "id": "305141582576",
    "name": "Amazee.io",
    "stage": "3",
    "cat": "Cloud & Infrastructure",
    "desc": "amazee.io provides managed hosting and cloud infrastructure services specifically designed for Drupal and open-source web applications.",
    "solutions": [
      "Managed Drupal Hosting",
      "Open Source Web Hosting",
      "Cloud Infrastructure",
      "DevOps for Web Apps"
    ]
  },
  {
    "id": "304982893297",
    "name": "Extreme Networks",
    "stage": "3",
    "cat": "Networking & Infrastructure",
    "desc": "Extreme Networks provides networking solutions including wired and wireless infrastructure, cloud networking, and network analytics.",
    "solutions": [
      "Network Switches & Routing",
      "Wireless LAN",
      "Cloud Networking",
      "Network Analytics",
      "Campus Fabric"
    ]
  },
  {
    "id": "305108679358",
    "name": "Sharegate",
    "stage": "3",
    "cat": "Document Management",
    "desc": "ShareGate provides migration and management tools for Microsoft environments, enabling organizations to migrate, manage, and secure SharePoint, Microsoft Teams, and Microsoft 365.",
    "solutions": [
      "SharePoint Migration",
      "Microsoft 365 Migration",
      "Teams Migration",
      "M365 Governance",
      "Content Management"
    ]
  },
  {
    "id": "305059312361",
    "name": "Informatica",
    "stage": "1",
    "cat": "Data & Analytics",
    "desc": "Informatica provides enterprise data integration, data governance, and cloud data management solutions.",
    "solutions": [
      "Cloud Data Integration",
      "Master Data Management (MDM)",
      "Data Governance",
      "Data Quality",
      "iPaaS / API Integration"
    ]
  },
  {
    "id": "305107958496",
    "name": "DataBricks",
    "stage": "3",
    "cat": "Data & Analytics",
    "desc": "Databricks provides a unified data and AI platform built on Apache Spark, enabling data engineering, data science, machine learning, and analytics.",
    "solutions": [
      "Data Lakehouse Platform",
      "Machine Learning (ML)",
      "Data Engineering",
      "SQL Analytics",
      "AI/ML Workflows"
    ]
  },
  {
    "id": "305107958491",
    "name": "Microsoft Azure",
    "stage": "3",
    "cat": "Cloud & Infrastructure",
    "desc": "Microsoft Azure is a cloud computing platform offering services for compute, storage, networking, analytics, AI, and enterprise application hosting.",
    "solutions": [
      "Azure Cloud Infrastructure (IaaS)",
      "Azure AI & OpenAI Services",
      "Azure Kubernetes Service (AKS)",
      "Microsoft Sentinel (SIEM)",
      "Microsoft Entra ID (IAM)",
      "Microsoft 365",
      "Power BI"
    ]
  },
  {
    "id": "305109398263",
    "name": "Red Hat",
    "stage": "2",
    "cat": "Cloud & Infrastructure",
    "desc": "Red Hat provides enterprise open-source solutions including Linux (RHEL), OpenShift (Kubernetes platform), automation, and middleware.",
    "solutions": [
      "Red Hat Enterprise Linux (RHEL)",
      "OpenShift (Kubernetes)",
      "Ansible Automation Platform",
      "OpenStack",
      "DevSecOps"
    ]
  },
  {
    "id": "305109398256",
    "name": "Amazon Web Services (AWS)",
    "stage": "3",
    "cat": "Cloud & Infrastructure",
    "desc": "Amazon Web Services (AWS) is a leading cloud computing platform providing scalable infrastructure, storage, databases, analytics, and AI/ML services.",
    "solutions": [
      "AWS Cloud Infrastructure (IaaS)",
      "AWS GovCloud",
      "Amazon S3 Storage",
      "Amazon RDS & Databases",
      "AWS SageMaker (AI/ML)",
      "AWS Security Hub"
    ]
  },
  {
    "id": "305109398247",
    "name": "Atlassian",
    "stage": "4",
    "cat": "ITSM & Asset Management",
    "desc": "Atlassian provides collaboration and productivity tools such as Jira, Confluence, and Trello, widely used for project management and team collaboration.",
    "solutions": [
      "Jira (Project & Issue Tracking)",
      "Confluence (Knowledge Management)",
      "Jira Service Management (ITSM)",
      "Trello",
      "Bitbucket (DevOps)"
    ]
  },
  {
    "id": "305107238588",
    "name": "Trimble",
    "stage": "2",
    "cat": "GIS & Engineering",
    "desc": "Trimble provides technology solutions across construction, geospatial, transportation, and utilities sectors.",
    "solutions": [
      "Geospatial Solutions",
      "Construction Technology",
      "Transportation Management",
      "Utility & GIS Software",
      "Civil Engineering Software"
    ]
  },
  {
    "id": "305109398245",
    "name": "Alemba",
    "stage": "4",
    "cat": "ITSM & Asset Management",
    "desc": "Alemba provides IT service management (ITSM) solutions designed to support IT operations, service delivery, and enterprise service management.",
    "solutions": [
      "ITSM Platform",
      "IT Service Delivery",
      "Asset Management",
      "Configuration Management"
    ]
  },
  {
    "id": "305107958476",
    "name": "SolarWinds",
    "stage": "3",
    "cat": "Networking & Infrastructure",
    "desc": "SolarWinds provides IT management and monitoring solutions for network performance, system monitoring, security, and IT operations.",
    "solutions": [
      "Network Performance Monitoring",
      "Server & Application Monitor",
      "Security Event Manager",
      "IT Operations Management",
      "Database Performance Analyzer"
    ]
  },
  {
    "id": "305107957494",
    "name": "CDW",
    "stage": "3",
    "cat": "Distributors",
    "desc": "CDW is a marketplace for hardware and software procurement, serving enterprise and government clients.",
    "solutions": [
      "Hardware Marketplace",
      "Software Licensing",
      "IT Procurement",
      "Cloud Solutions",
      "Government Procurement"
    ]
  },
  {
    "id": "305059311305",
    "name": "OpenText",
    "stage": "4",
    "cat": "Document Management",
    "desc": "OpenText is an enterprise information management platform providing solutions for document management, content services, business process automation, and analytics.",
    "solutions": [
      "Enterprise Content Management (ECM)",
      "Document Management System",
      "Email Archive",
      "Business Process Automation",
      "Cybersecurity Analytics"
    ]
  },
  {
    "id": "304980734658",
    "name": "IBM Maximo",
    "stage": "3",
    "cat": "ITSM & Asset Management",
    "desc": "IBM Maximo is an enterprise asset management (EAM) solution enabling organizations to manage physical assets, maintenance operations, work orders, and inventory.",
    "solutions": [
      "Enterprise Asset Management (EAM)",
      "CMMS",
      "Preventive Maintenance",
      "Work Order Management",
      "IoT Asset Monitoring"
    ]
  },
  {
    "id": "305055712985",
    "name": "Clio",
    "stage": "3",
    "cat": "Document Management",
    "desc": "Clio is a cloud-based legal practice management platform providing tools for case management, client intake, billing, and document management.",
    "solutions": [
      "Legal Case Management",
      "Client Intake",
      "Legal Billing",
      "Document Management",
      "Legal Practice Management"
    ]
  },
  {
    "id": "305057152701",
    "name": "Hubspot",
    "stage": "3",
    "cat": "CRM & Business Apps",
    "desc": "HubSpot is a cloud-based CRM and marketing automation platform offering tools for marketing, sales, customer service, and content management.",
    "solutions": [
      "CRM",
      "Marketing Automation",
      "Sales Hub",
      "Service Hub",
      "Content Management"
    ]
  },
  {
    "id": "304981453504",
    "name": "Microsoft Dynamics 365",
    "stage": "3",
    "cat": "ERP & Enterprise Apps",
    "desc": "Microsoft Dynamics 365 is a suite of enterprise applications combining CRM and ERP capabilities for finance, operations, sales, and customer engagement.",
    "solutions": [
      "CRM (Customer Engagement)",
      "ERP (Finance & Operations)",
      "Business Central",
      "Field Service",
      "Supply Chain Management",
      "Marketing Automation"
    ]
  },
  {
    "id": "304980732635",
    "name": "Salesforce",
    "stage": "3",
    "cat": "CRM & Business Apps",
    "desc": "Salesforce is a CRM platform that centralizes customer data, automating sales, marketing, customer service, and e-commerce for businesses.",
    "solutions": [
      "CRM",
      "Salesforce Government Cloud",
      "Sales Cloud",
      "Service Cloud",
      "Marketing Cloud",
      "Einstein AI",
      "Tableau Analytics"
    ]
  },
  {
    "id": "304980732622",
    "name": "ArcGIS",
    "stage": "1",
    "cat": "GIS & Engineering",
    "desc": "ArcGIS Online is a cloud-based mapping and analysis solution for making maps, analyzing data, and sharing geospatial information.",
    "solutions": [
      "GIS & Spatial Analytics",
      "Mapping & Visualization",
      "Location Intelligence",
      "Urban Planning",
      "Utility Network Management",
      "Field Operations"
    ]
  },
  {
    "id": "304728116925",
    "name": "Versity Software",
    "stage": "1",
    "cat": "Cloud & Infrastructure",
    "desc": "Versity Software provides high-performance, software-defined mass storage and archiving solutions designed for exabyte-scale data.",
    "solutions": [
      "Mass Storage",
      "Archiving Solutions",
      "Exabyte-Scale Data Management",
      "Software-Defined Storage",
      "AI Data Infrastructure"
    ]
  }
];
