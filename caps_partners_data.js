// ═══════════════════════════════════════════════════════════════
// CAPS Partnership Intelligence — Partner Data File
// Source: HubSpot OEM Partnership Pipeline
// Pipeline: OEM Partnership Pipeline (ID: 0)
// Stages: 1=Applied, 2=In Process, 3=Completed, 4=Rejected
//
// SNAPSHOT TIMESTAMP: 2026-05-20T16:35:17Z
// LAST HUBSPOT CHANGE: 2026-05-08T15:07:48.315Z
// TOTAL RECORDS: 80
//
// HOW TO REFRESH:
// Go to Claude.ai → open your CAPS partnership conversation
// Type: "Refresh the partnership dashboard with the latest HubSpot data"
// Claude will pull changes since 2026-05-08T15:07:48.315Z and give you an updated data.js
// Replace ONLY this file on GitHub — index.html stays unchanged.
// ═══════════════════════════════════════════════════════════════

const CAPS_DATA_SNAPSHOT_TS = "2026-05-20T16:35:17Z";
const CAPS_HS_LAST_MODIFIED  = "2026-05-08T15:07:48.315Z";
const CAPS_TOTAL_RECORDS     = 80;

const HS_PARTNERS = [
  {
    "id": "305110128363",
    "name": "Veeam",
    "stage": "3",
    "lastModified": "2026-05-08T15:07:48.315Z",
    "created": "2026-03-31T14:40:07.802Z",
    "desc": "Veeam provides backup, disaster recovery, and data management solutions for virtual, cloud, and hybrid environments.",
    "cat": "Cloud & Infrastructure",
    "solutions": [
      "Backup & Replication",
      "Disaster Recovery",
      "Cloud Data Management",
      "Virtual Machine Backup",
      "Ransomware Protection",
      "Microsoft 365 Backup"
    ]
  },
  {
    "id": "305206771449",
    "name": "Fortinet",
    "stage": "3",
    "lastModified": "2026-05-08T15:07:24.405Z",
    "created": "2026-03-31T14:38:25.455Z",
    "desc": "Fortinet provides cybersecurity solutions including firewalls, secure networking, and threat protection across enterprise environments.",
    "cat": "Cybersecurity",
    "solutions": [
      "Next-Generation Firewall (NGFW)",
      "Secure SD-WAN",
      "Endpoint Detection & Response (EDR)",
      "Zero Trust Network Access (ZTNA)",
      "SIEM & Analytics",
      "FortiSASE"
    ]
  },
  {
    "id": "305379429086",
    "name": "Watchguard Technologies",
    "stage": "3",
    "lastModified": "2026-05-08T15:07:00.243Z",
    "created": "2026-03-31T15:09:39.130Z",
    "desc": "WatchGuard provides network security, endpoint protection, and multi-factor authentication solutions.",
    "cat": "Cybersecurity",
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
    "lastModified": "2026-05-07T11:08:59.049Z",
    "created": "2026-03-16T11:32:46.306Z",
    "desc": "Distributor specific to ManageEngine products.",
    "cat": "Distributors",
    "solutions": [
      "ManageEngine Product Distribution",
      "IT Solutions Procurement"
    ]
  },
  {
    "id": "302984649416",
    "name": "Carahsoft",
    "stage": "3",
    "lastModified": "2026-05-07T11:08:23.290Z",
    "created": "2026-03-16T11:18:30.243Z",
    "desc": "Carahsoft is a government IT marketplace and distributor serving federal, state, and local government agencies.",
    "cat": "Distributors",
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
    "lastModified": "2026-05-07T11:08:01.492Z",
    "created": "2026-03-10T17:19:54.552Z",
    "desc": "Rubrik is a cybersecurity company specializing in Zero Trust Data Security to protect enterprise, cloud, and SaaS data.",
    "cat": "Cybersecurity",
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
    "lastModified": "2026-04-24T10:51:55.392Z",
    "created": "2026-03-30T17:35:18.911Z",
    "desc": "ServiceNow is a cloud-based platform that enables organizations to automate workflows across IT service management, IT operations, HR, customer service, and enterprise processes.",
    "cat": "ITSM & Asset Management",
    "solutions": [
      "IT Service Management (ITSM)",
      "IT Operations Management (ITOM)",
      "HR Service Delivery",
      "Security Operations",
      "GRC",
      "App Engine (Low-Code)",
      "Customer Service Management"
    ]
  },
  {
    "id": "305144473334",
    "name": "Cisco",
    "stage": "3",
    "lastModified": "2026-04-21T12:41:26.312Z",
    "created": "2026-03-31T14:01:00.786Z",
    "desc": "Cisco provides networking, cybersecurity, and IT infrastructure solutions including routers, switches, security appliances, and collaboration tools.",
    "cat": "Networking & Infrastructure",
    "solutions": [
      "Network Switches & Routing",
      "Cisco Firepower NGFW",
      "Cisco Duo MFA",
      "Cisco Webex (UCaaS)",
      "Cisco SD-WAN",
      "Cisco Meraki Wireless"
    ]
  },
  {
    "id": "305144473333",
    "name": "Palo Alto Networks",
    "stage": "3",
    "lastModified": "2026-04-21T10:36:44.061Z",
    "created": "2026-03-31T13:57:22.359Z",
    "desc": "Palo Alto Networks provides advanced cybersecurity solutions including firewalls, endpoint protection, cloud security, and threat intelligence.",
    "cat": "Cybersecurity",
    "solutions": [
      "Next-Generation Firewall (NGFW)",
      "Prisma SASE",
      "Cortex XDR",
      "Prisma Cloud (CNAPP)",
      "Threat Intelligence",
      "Prisma SD-WAN",
      "Zero Trust Network Access (ZTNA)"
    ]
  },
  {
    "id": "303036624597",
    "name": "Manage Engine",
    "stage": "3",
    "lastModified": "2026-04-03T07:29:20.568Z",
    "created": "2026-03-16T11:40:15.009Z",
    "desc": "ManageEngine provides a comprehensive suite of enterprise IT management, security, and operations tools, including ServiceDesk Plus, Endpoint Central, and OpManager.",
    "cat": "ITSM & Asset Management",
    "solutions": [
      "IT Service Management (ITSM)",
      "Endpoint Management (UEM)",
      "Network Monitoring",
      "AD Management",
      "SIEM (Log360)",
      "Privileged Access Management (PAM)",
      "Remote Monitoring & Management (RMM)"
    ]
  },
  {
    "id": "305381589696",
    "name": "WP Engine",
    "stage": "3",
    "lastModified": "2026-03-31T18:00:54.568Z",
    "created": "2026-03-31T17:43:26.365Z",
    "desc": "WP Engine provides managed WordPress hosting and digital experience solutions, offering secure, scalable, and high-performance hosting for websites and web applications.",
    "cat": "Cloud & Infrastructure",
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
    "lastModified": "2026-03-31T16:07:02.824Z",
    "created": "2026-03-30T17:16:54.211Z",
    "desc": "Absorb LMS is a cloud-based learning management system enabling organizations to deliver, track, and manage training programs, employee development, and compliance learning.",
    "cat": "Training & Certification",
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
    "lastModified": "2026-03-31T16:05:01.753Z",
    "created": "2026-03-31T16:02:50.586Z",
    "desc": "Kiteworks provides a secure content communications platform enabling organizations to share sensitive data through secure file transfer, managed file sharing, email protection, and governance.",
    "cat": "Cybersecurity",
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
    "lastModified": "2026-03-31T15:58:13.831Z",
    "created": "2026-03-30T17:19:28.211Z",
    "desc": "ClickUp is a cloud-based project management and productivity platform enabling teams to plan, track, and collaborate on tasks, workflows, and projects.",
    "cat": "ITSM & Asset Management",
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
    "lastModified": "2026-03-31T15:57:31.005Z",
    "created": "2026-03-31T14:55:24.743Z",
    "desc": "Infosec IQ provides cybersecurity awareness training and phishing simulation tools for organizations.",
    "cat": "Cybersecurity",
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
    "lastModified": "2026-03-31T15:56:39.543Z",
    "created": "2026-03-30T18:43:31.769Z",
    "desc": "Datadog provides cloud monitoring, observability, and security solutions for infrastructure, applications, logs, and performance management across cloud and hybrid environments.",
    "cat": "Cloud & Infrastructure",
    "solutions": [
      "Cloud Monitoring & Observability",
      "Application Performance Monitoring (APM)",
      "Log Management",
      "Security Monitoring (SIEM/CSPM)",
      "Infrastructure Metrics",
      "Synthetic Monitoring"
    ]
  },
  {
    "id": "305379430087",
    "name": "Redgate",
    "stage": "2",
    "lastModified": "2026-03-31T15:52:11.631Z",
    "created": "2026-03-31T15:51:52.348Z",
    "desc": "Redgate provides database DevOps and data management tools that help organizations automate development, deployment, and monitoring of databases.",
    "cat": "Data & Analytics",
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
    "lastModified": "2026-03-31T15:51:14.352Z",
    "created": "2026-03-31T15:50:53.399Z",
    "desc": "Datto provides backup, disaster recovery, and cybersecurity solutions designed for MSPs and IT service providers.",
    "cat": "Cloud & Infrastructure",
    "solutions": [
      "Backup & Disaster Recovery",
      "Business Continuity",
      "Ransomware Recovery",
      "Cloud Backup",
      "Microsoft 365 Backup",
      "Email Security"
    ]
  },
  {
    "id": "305377269464",
    "name": "EDMO",
    "stage": "3",
    "lastModified": "2026-03-31T15:48:02.152Z",
    "created": "2026-03-31T15:24:15.665Z",
    "desc": "EDMO provides workforce development, apprenticeship programs, and talent training services focused on building skills in technology and career readiness.",
    "cat": "Training & Certification",
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
    "lastModified": "2026-03-31T15:41:05.722Z",
    "created": "2026-03-31T15:40:01.473Z",
    "desc": "PeopleCert provides professional certification and credentialing services, including globally recognized frameworks such as ITIL, PRINCE2, and other IT certifications.",
    "cat": "Training & Certification",
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
    "lastModified": "2026-03-31T15:39:23.212Z",
    "created": "2026-03-31T15:37:23.735Z",
    "desc": "Accela provides a civic engagement platform for government agencies, supporting permitting, licensing, inspections, and regulatory management.",
    "cat": "Digital Government",
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
    "lastModified": "2026-03-31T15:36:42.400Z",
    "created": "2026-03-31T15:36:11.831Z",
    "desc": "Icertis provides a contract lifecycle management (CLM) platform enabling organizations to manage contracts, compliance, obligations, and risk across the enterprise.",
    "cat": "ERP & Enterprise Apps",
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
    "lastModified": "2026-03-31T15:35:06.983Z",
    "created": "2026-03-31T15:31:59.052Z",
    "desc": "Absolute provides endpoint security and visibility solutions with persistence technology, enabling organizations to secure, track, and manage devices across distributed environments.",
    "cat": "Cybersecurity",
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
    "lastModified": "2026-03-31T15:30:38.626Z",
    "created": "2026-03-31T15:27:54.006Z",
    "desc": "TCP provides workforce management solutions including time tracking, attendance, employee scheduling, and labor compliance tools.",
    "cat": "HCM & HR",
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
    "lastModified": "2026-03-31T15:23:22.684Z",
    "created": "2026-03-31T15:21:11.645Z",
    "desc": "Laserfiche is an enterprise content management (ECM) and business process automation platform enabling organizations to manage documents, automate workflows, ensure compliance, and drive digital transformation.",
    "cat": "Document Management",
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
    "lastModified": "2026-03-31T15:14:26.052Z",
    "created": "2026-03-31T15:13:22.980Z",
    "desc": "Fiix provides a computerized maintenance management system (CMMS) for asset tracking, maintenance scheduling, and work order management.",
    "cat": "ITSM & Asset Management",
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
    "lastModified": "2026-03-31T15:09:46.470Z",
    "created": "2026-03-31T15:08:40.073Z",
    "desc": "Zoho provides a suite of business applications including CRM, finance, HR, and collaboration tools for organizations of all sizes.",
    "cat": "CRM & Business Apps",
    "solutions": [
      "CRM",
      "Marketing Automation",
      "Finance & Accounting",
      "HR Management",
      "Project Management",
      "Analytics"
    ]
  },
  {
    "id": "305380868847",
    "name": "Varonis",
    "stage": "1",
    "lastModified": "2026-03-31T15:09:28.472Z",
    "created": "2026-03-31T15:08:11.757Z",
    "desc": "Varonis provides data security and analytics solutions focused on protecting sensitive data and detecting insider threats.",
    "cat": "Cybersecurity",
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
    "lastModified": "2026-03-31T15:08:30.872Z",
    "created": "2026-03-31T15:06:22.412Z",
    "desc": "Netwrix provides data security, identity governance, and compliance solutions to protect sensitive data.",
    "cat": "Cybersecurity",
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
    "lastModified": "2026-03-31T15:06:02.177Z",
    "created": "2026-03-31T15:05:08.712Z",
    "desc": "ConnectSecure provides vulnerability scanning and risk management solutions for MSPs and enterprise IT environments.",
    "cat": "Cybersecurity",
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
    "lastModified": "2026-03-31T14:49:52.752Z",
    "created": "2026-03-31T14:49:30.533Z",
    "desc": "Dropsuite provides cloud backup and archiving solutions for email, Microsoft 365, and Google Workspace environments.",
    "cat": "Cloud & Infrastructure",
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
    "lastModified": "2026-03-31T14:49:43.708Z",
    "created": "2026-03-31T14:48:48.343Z",
    "desc": "PagerDuty provides incident response and IT operations management solutions to help organizations manage outages and critical events.",
    "cat": "ITSM & Asset Management",
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
    "lastModified": "2026-03-31T14:49:12.809Z",
    "created": "2026-03-31T14:48:13.278Z",
    "desc": "Proofpoint provides email security, threat protection, and compliance solutions to safeguard organizations from cyber threats.",
    "cat": "Cybersecurity",
    "solutions": [
      "Email Security",
      "Anti-Phishing",
      "Threat Protection",
      "Data Loss Prevention (DLP)",
      "Archiving & Compliance",
      "Security Awareness Training"
    ]
  },
  {
    "id": "305206772413",
    "name": "KnowBe4",
    "stage": "2",
    "lastModified": "2026-03-31T14:45:43.631Z",
    "created": "2026-03-31T14:44:14.743Z",
    "desc": "KnowBe4 provides security awareness training and phishing simulation platforms to help organizations reduce human cybersecurity risk.",
    "cat": "Cybersecurity",
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
    "lastModified": "2026-03-31T14:36:38.420Z",
    "created": "2026-03-31T14:35:48.803Z",
    "desc": "Tenable provides vulnerability management and cybersecurity solutions to identify, assess, and prioritize risks across IT environments.",
    "cat": "Cybersecurity",
    "solutions": [
      "Vulnerability Management",
      "Nessus Scanner",
      "Cloud Security Posture (CSPM)",
      "OT Security",
      "Cyber Exposure Platform"
    ]
  },
  {
    "id": "305375109849",
    "name": "NinjaOne",
    "stage": "1",
    "lastModified": "2026-03-31T14:35:21.637Z",
    "created": "2026-03-31T14:35:08.157Z",
    "desc": "NinjaOne provides remote monitoring and management (RMM), patch management, and endpoint management solutions for IT operations and MSPs.",
    "cat": "ITSM & Asset Management",
    "solutions": [
      "Remote Monitoring & Management (RMM)",
      "Patch Management",
      "Endpoint Management",
      "IT Automation",
      "Remote Access"
    ]
  },
  {
    "id": "305110128362",
    "name": "SentinelOne",
    "stage": "1",
    "lastModified": "2026-03-31T14:34:59.761Z",
    "created": "2026-03-31T14:34:37.745Z",
    "desc": "SentinelOne provides AI-powered endpoint protection, detection, and response (EDR/XDR) solutions for enterprise cybersecurity.",
    "cat": "Cybersecurity",
    "solutions": [
      "Endpoint Detection & Response (EDR)",
      "XDR Platform",
      "AI-Powered Threat Detection",
      "Ransomware Protection",
      "Cloud Workload Protection",
      "Managed Detection & Response (MDR)"
    ]
  },
  {
    "id": "305375828724",
    "name": "Claroty",
    "stage": "1",
    "lastModified": "2026-03-31T14:34:23.457Z",
    "created": "2026-03-31T14:34:06.611Z",
    "desc": "Claroty provides cybersecurity solutions for operational technology (OT), IoT, and cyber-physical systems, focusing on industrial and critical infrastructure protection.",
    "cat": "Cybersecurity",
    "solutions": [
      "OT Security",
      "IoT Security",
      "ICS/SCADA Security",
      "Cyber-Physical Systems Protection",
      "Asset Discovery",
      "Industrial Cybersecurity"
    ]
  },
  {
    "id": "305375109846",
    "name": "Arctic Wolf",
    "stage": "1",
    "lastModified": "2026-03-31T14:34:05.878Z",
    "created": "2026-03-31T14:33:39.261Z",
    "desc": "Arctic Wolf provides managed detection and response (MDR) and security operations solutions for continuous threat monitoring and response.",
    "cat": "Cybersecurity",
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
    "lastModified": "2026-03-31T14:32:38.035Z",
    "created": "2026-03-31T14:26:22.012Z",
    "desc": "Darktrace provides AI-driven cybersecurity solutions focused on threat detection, response, and autonomous security.",
    "cat": "Cybersecurity",
    "solutions": [
      "AI Threat Detection",
      "Autonomous Response",
      "Email Security",
      "Cloud Security",
      "OT Security",
      "Threat Intelligence"
    ]
  },
  {
    "id": "305206050535",
    "name": "Qualys",
    "stage": "1",
    "lastModified": "2026-03-31T14:25:21.437Z",
    "created": "2026-03-31T14:25:08.157Z",
    "desc": "Qualys provides cloud-based security and compliance solutions including vulnerability management, asset discovery, and risk assessment.",
    "cat": "Cybersecurity",
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
    "lastModified": "2026-03-31T14:24:18.966Z",
    "created": "2026-03-31T14:22:15.994Z",
    "desc": "CrowdStrike provides endpoint protection, threat intelligence, and managed detection and response (MDR) solutions.",
    "cat": "Cybersecurity",
    "solutions": [
      "Endpoint Detection & Response (EDR)",
      "XDR Platform",
      "Threat Intelligence",
      "Managed Detection & Response (MDR)",
      "Identity Protection",
      "Cloud Security",
      "Zero Trust"
    ]
  },
  {
    "id": "305143753409",
    "name": "Ping Identity",
    "stage": "3",
    "lastModified": "2026-03-31T14:21:34.533Z",
    "created": "2026-03-31T14:19:25.673Z",
    "desc": "Ping Identity provides identity and access management (IAM) solutions including single sign-on (SSO), multi-factor authentication (MFA), and identity governance.",
    "cat": "Cybersecurity",
    "solutions": [
      "Single Sign-On (SSO)",
      "Multi-Factor Authentication (MFA)",
      "Identity Governance & Administration (IGA)",
      "Zero Trust Security",
      "API Security",
      "Privileged Access Management (PAM)"
    ]
  },
  {
    "id": "305241361144",
    "name": "IBM",
    "stage": "3",
    "lastModified": "2026-03-31T14:11:24.662Z",
    "created": "2026-03-31T14:09:08.692Z",
    "desc": "IBM provides enterprise technology solutions including cloud computing, AI, data platforms, cybersecurity, and enterprise software.",
    "cat": "Cloud & Infrastructure",
    "solutions": [
      "IBM Cloud (IaaS)",
      "IBM Security QRadar (SIEM)",
      "IBM watsonx AI",
      "IBM Maximo (EAM)",
      "IBM FlashSystem Storage",
      "IBM DataStage (ETL)",
      "IBM OpenPages (GRC)"
    ]
  },
  {
    "id": "305144473331",
    "name": "CommVault",
    "stage": "2",
    "lastModified": "2026-03-31T13:54:13.031Z",
    "created": "2026-03-31T13:53:07.643Z",
    "desc": "Commvault provides data protection, backup, recovery, and data management solutions for enterprise and cloud environments.",
    "cat": "Cloud & Infrastructure",
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
    "lastModified": "2026-03-31T13:51:04.982Z",
    "created": "2026-03-31T13:50:09.373Z",
    "desc": "SolarWinds provides IT monitoring, network management, and security solutions for infrastructure and operations teams.",
    "cat": "ITSM & Asset Management",
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
    "lastModified": "2026-03-31T13:49:31.982Z",
    "created": "2026-03-31T13:49:06.695Z",
    "desc": "Splunk provides data analytics, SIEM, and observability solutions enabling organizations to monitor, search, and analyze machine data in real time.",
    "cat": "Data & Analytics",
    "solutions": [
      "SIEM & Log Management",
      "Observability",
      "IT Operations Analytics",
      "Threat Intelligence",
      "Splunk SOAR",
      "Business Analytics"
    ]
  },
  {
    "id": "305375108844",
    "name": "ArrowSphere",
    "stage": "3",
    "lastModified": "2026-03-31T13:37:20.438Z",
    "created": "2026-03-31T13:36:37.361Z",
    "desc": "ArrowSphere is a cloud marketplace platform by Arrow Electronics enabling partners to procure, manage, and bill cloud services and SaaS solutions across multiple vendors.",
    "cat": "Distributors",
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
    "lastModified": "2026-03-31T13:34:47.738Z",
    "created": "2026-03-31T13:34:34.933Z",
    "desc": "Ingram Micro is a global distributor of technology products and services, providing access to hardware, software, cloud, and lifecycle solutions.",
    "cat": "Distributors",
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
    "lastModified": "2026-03-31T13:32:29.538Z",
    "created": "2026-03-31T13:31:22.831Z",
    "desc": "SHI International is a global IT solutions provider offering procurement, licensing, and cloud solutions across a wide range of enterprise technologies.",
    "cat": "Distributors",
    "solutions": [
      "IT Procurement",
      "Software Licensing",
      "Cloud Solutions",
      "Hardware Resale",
      "Managed Services"
    ]
  },
  {
    "id": "305206770422",
    "name": "TD SYNNEX",
    "stage": "3",
    "lastModified": "2026-03-31T13:07:42.042Z",
    "created": "2026-03-31T13:03:40.243Z",
    "desc": "TD SYNNEX is a global IT distributor providing access to hardware, software, and cloud solutions from major OEMs including IBM, Cisco, Microsoft, and others.",
    "cat": "Distributors",
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
    "lastModified": "2026-03-31T12:58:19.538Z",
    "created": "2026-03-31T12:35:12.831Z",
    "desc": "Pax8 is a cloud marketplace distributor enabling partners to procure, manage, and bill cloud solutions including Microsoft, security, and SaaS products.",
    "cat": "Distributors",
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
    "lastModified": "2026-03-31T11:44:09.043Z",
    "created": "2026-03-31T11:43:34.323Z",
    "desc": "UKG provides workforce management and human capital management solutions including payroll, scheduling, time tracking, and HR services.",
    "cat": "HCM & HR",
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
    "lastModified": "2026-03-31T11:41:12.795Z",
    "created": "2026-03-31T11:40:37.201Z",
    "desc": "Workday provides enterprise cloud applications for finance, human resources, planning, and analytics.",
    "cat": "ERP & Enterprise Apps",
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
    "lastModified": "2026-03-31T11:39:43.043Z",
    "created": "2026-03-31T11:39:09.831Z",
    "desc": "ADP provides human capital management (HCM) solutions including payroll, HR, talent management, and workforce administration services.",
    "cat": "HCM & HR",
    "solutions": [
      "Payroll Processing",
      "HR Management",
      "Talent Management",
      "Benefits Administration",
      "Time & Attendance",
      "Workforce Analytics"
    ]
  },
  {
    "id": "305206770390",
    "name": "Ellucian",
    "stage": "4",
    "lastModified": "2026-03-31T11:38:46.470Z",
    "created": "2026-03-31T11:38:18.831Z",
    "desc": "Ellucian provides software and services specifically designed for higher education institutions, including student information systems (SIS), ERP, analytics, and cloud solutions.",
    "cat": "Education Technology",
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
    "lastModified": "2026-03-31T11:31:25.131Z",
    "created": "2026-03-31T11:21:19.349Z",
    "desc": "SAP provides enterprise resource planning (ERP) solutions and business applications for finance, supply chain, HR, and analytics.",
    "cat": "ERP & Enterprise Apps",
    "solutions": [
      "SAP S/4HANA ERP",
      "SAP SuccessFactors HCM",
      "SAP Ariba Procurement",
      "SAP Analytics Cloud",
      "SAP BTP Platform",
      "Payroll Management"
    ]
  },
  {
    "id": "305142303430",
    "name": "Oracle",
    "stage": "3",
    "lastModified": "2026-03-30T19:30:30.856Z",
    "created": "2026-03-30T19:23:27.831Z",
    "desc": "Oracle provides enterprise software and cloud solutions including ERP, database management systems, cloud infrastructure (OCI), and enterprise applications.",
    "cat": "ERP & Enterprise Apps",
    "solutions": [
      "Oracle Cloud ERP",
      "Oracle HCM Cloud",
      "Oracle Database",
      "Oracle Cloud Infrastructure (OCI)",
      "Oracle Analytics",
      "PeopleSoft",
      "Payroll Management"
    ]
  },
  {
    "id": "304982893299",
    "name": "Dynatrace",
    "stage": "1",
    "lastModified": "2026-03-30T19:20:58.474Z",
    "created": "2026-03-30T19:20:26.353Z",
    "desc": "Dynatrace provides application performance monitoring (APM), observability, and AI-driven monitoring solutions for cloud-native and enterprise applications.",
    "cat": "Cloud & Infrastructure",
    "solutions": [
      "Application Performance Monitoring (APM)",
      "Full-Stack Observability",
      "AIOps",
      "Log Management",
      "Cloud Infrastructure Monitoring"
    ]
  },
  {
    "id": "304982893297",
    "name": "Extreme Networks",
    "stage": "3",
    "lastModified": "2026-03-30T19:12:58.505Z",
    "created": "2026-03-30T19:10:20.353Z",
    "desc": "Extreme Networks provides networking solutions including wired and wireless infrastructure, cloud networking, and network analytics for enterprise and public sector environments.",
    "cat": "Networking & Infrastructure",
    "solutions": [
      "Network Switches & Routing",
      "Wireless LAN",
      "Cloud Networking",
      "Network Analytics",
      "Campus Fabric"
    ]
  },
  {
    "id": "305141582576",
    "name": "Amazee.io",
    "stage": "3",
    "lastModified": "2026-03-30T19:13:00.879Z",
    "created": "2026-03-30T19:08:52.353Z",
    "desc": "amazee.io provides managed hosting and cloud infrastructure services specifically designed for Drupal and open-source web applications.",
    "cat": "Cloud & Infrastructure",
    "solutions": [
      "Managed Drupal Hosting",
      "Open Source Web Hosting",
      "Cloud Infrastructure",
      "DevOps for Web Apps"
    ]
  },
  {
    "id": "305108679358",
    "name": "Sharegate",
    "stage": "3",
    "lastModified": "2026-03-30T18:57:08.538Z",
    "created": "2026-03-30T18:56:50.070Z",
    "desc": "ShareGate provides migration and management tools for Microsoft environments, enabling organizations to migrate, manage, and secure SharePoint, Microsoft Teams, and Microsoft 365 environments.",
    "cat": "Document Management",
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
    "lastModified": "2026-03-30T18:40:44.080Z",
    "created": "2026-03-30T18:38:48.779Z",
    "desc": "Informatica provides enterprise data integration, data governance, and cloud data management solutions.",
    "cat": "Data & Analytics",
    "solutions": [
      "Cloud Data Integration",
      "Master Data Management (MDM)",
      "Data Governance",
      "Data Quality",
      "iPaaS / API Integration",
      "ETL"
    ]
  },
  {
    "id": "305107958496",
    "name": "DataBricks",
    "stage": "3",
    "lastModified": "2026-03-30T18:36:09.911Z",
    "created": "2026-03-30T18:35:07.831Z",
    "desc": "Databricks provides a unified data and AI platform built on Apache Spark, enabling data engineering, data science, machine learning, and analytics.",
    "cat": "Data & Analytics",
    "solutions": [
      "Data Lakehouse Platform",
      "Machine Learning (ML)",
      "Data Engineering",
      "SQL Analytics",
      "AI/ML Workflows",
      "Delta Lake"
    ]
  },
  {
    "id": "305107958491",
    "name": "Microsoft Azure",
    "stage": "3",
    "lastModified": "2026-03-30T18:33:55.001Z",
    "created": "2026-03-30T18:28:07.009Z",
    "desc": "Microsoft Azure is a cloud computing platform offering services for compute, storage, networking, analytics, AI, and enterprise application hosting.",
    "cat": "Cloud & Infrastructure",
    "solutions": [
      "Azure Cloud Infrastructure (IaaS)",
      "Azure AI & OpenAI Services",
      "Azure Kubernetes Service (AKS)",
      "Microsoft Sentinel (SIEM)",
      "Azure DevOps",
      "Microsoft Entra ID (IAM)",
      "Microsoft 365",
      "Power BI",
      "Power Platform"
    ]
  },
  {
    "id": "305109398263",
    "name": "Red Hat",
    "stage": "2",
    "lastModified": "2026-03-30T18:26:58.911Z",
    "created": "2026-03-30T18:26:21.353Z",
    "desc": "Red Hat provides enterprise open-source solutions including Linux (RHEL), OpenShift (Kubernetes platform), automation, and middleware.",
    "cat": "Cloud & Infrastructure",
    "solutions": [
      "Red Hat Enterprise Linux (RHEL)",
      "OpenShift (Kubernetes)",
      "Ansible Automation Platform",
      "OpenStack",
      "Middleware & Integration",
      "DevSecOps"
    ]
  },
  {
    "id": "305109398256",
    "name": "Amazon Web Services (AWS)",
    "stage": "3",
    "lastModified": "2026-03-30T18:21:37.577Z",
    "created": "2026-03-30T18:20:57.831Z",
    "desc": "Amazon Web Services (AWS) is a leading cloud computing platform providing scalable infrastructure, storage, databases, analytics, and AI/ML services.",
    "cat": "Cloud & Infrastructure",
    "solutions": [
      "AWS Cloud Infrastructure (IaaS)",
      "AWS GovCloud",
      "Amazon S3 Storage",
      "Amazon RDS & Databases",
      "AWS SageMaker (AI/ML)",
      "AWS Security Hub",
      "ETL & Data Integration",
      "Backup & Disaster Recovery"
    ]
  },
  {
    "id": "305109398247",
    "name": "Atlassian",
    "stage": "4",
    "lastModified": "2026-03-30T18:13:49.433Z",
    "created": "2026-03-30T18:13:05.830Z",
    "desc": "Atlassian provides collaboration and productivity tools such as Jira, Confluence, and Trello, widely used for project management, software development, and team collaboration.",
    "cat": "ITSM & Asset Management",
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
    "lastModified": "2026-03-30T18:12:19.538Z",
    "created": "2026-03-30T18:11:50.070Z",
    "desc": "Trimble provides technology solutions across construction, geospatial, transportation, and utilities sectors.",
    "cat": "GIS & Engineering",
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
    "lastModified": "2026-03-30T18:11:27.433Z",
    "created": "2026-03-30T18:11:09.009Z",
    "desc": "Alemba provides IT service management (ITSM) solutions designed to support IT operations, service delivery, and enterprise service management.",
    "cat": "ITSM & Asset Management",
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
    "lastModified": "2026-03-30T18:09:54.306Z",
    "created": "2026-03-30T18:08:55.830Z",
    "desc": "SolarWinds provides IT management and monitoring solutions for network performance, system monitoring, security, and IT operations.",
    "cat": "Networking & Infrastructure",
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
    "lastModified": "2026-03-30T18:08:37.524Z",
    "created": "2026-03-30T17:47:37.830Z",
    "desc": "CDW is a marketplace for hardware and software procurement, serving enterprise and government clients.",
    "cat": "Distributors",
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
    "lastModified": "2026-03-30T17:24:40.130Z",
    "created": "2026-03-30T17:22:48.009Z",
    "desc": "OpenText is an enterprise information management platform providing solutions for document management, content services, business process automation, cybersecurity, and analytics.",
    "cat": "Document Management",
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
    "lastModified": "2026-03-30T17:16:41.633Z",
    "created": "2026-03-30T17:15:25.830Z",
    "desc": "IBM Maximo is an enterprise asset management (EAM) solution enabling organizations to manage physical assets, maintenance operations, work orders, and inventory.",
    "cat": "ITSM & Asset Management",
    "solutions": [
      "Enterprise Asset Management (EAM)",
      "CMMS",
      "Preventive Maintenance",
      "Work Order Management",
      "IoT Asset Monitoring",
      "Facilities Management"
    ]
  },
  {
    "id": "305055712985",
    "name": "Clio",
    "stage": "3",
    "lastModified": "2026-03-30T17:12:05.633Z",
    "created": "2026-03-30T17:11:36.830Z",
    "desc": "Clio is a cloud-based legal practice management platform providing tools for case management, client intake, billing, document management, and legal workflow automation.",
    "cat": "Document Management",
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
    "lastModified": "2026-03-30T16:50:44.708Z",
    "created": "2026-03-30T16:11:41.282Z",
    "desc": "HubSpot is a cloud-based CRM and marketing automation platform offering tools for marketing, sales, customer service, and content management.",
    "cat": "CRM & Business Apps",
    "solutions": [
      "CRM",
      "Marketing Automation",
      "Sales Hub",
      "Service Hub",
      "Content Management",
      "Operations Hub"
    ]
  },
  {
    "id": "304981453504",
    "name": "Microsoft Dynamics 365",
    "stage": "3",
    "lastModified": "2026-03-30T16:50:34.208Z",
    "created": "2026-03-30T16:23:27.830Z",
    "desc": "Microsoft Dynamics 365 is a suite of enterprise applications combining CRM and ERP capabilities, enabling organizations to manage finance, operations, sales, and customer engagement.",
    "cat": "ERP & Enterprise Apps",
    "solutions": [
      "CRM (Customer Engagement)",
      "ERP (Finance & Operations)",
      "Business Central",
      "Field Service",
      "Supply Chain Management",
      "Marketing Automation",
      "Human Resources"
    ]
  },
  {
    "id": "304980732635",
    "name": "Salesforce",
    "stage": "3",
    "lastModified": "2026-03-30T16:02:12.067Z",
    "created": "2026-03-30T15:47:13.282Z",
    "desc": "Salesforce is a CRM platform that centralizes customer data, automating sales, marketing, customer service, and e-commerce for businesses.",
    "cat": "CRM & Business Apps",
    "solutions": [
      "CRM",
      "Salesforce Government Cloud",
      "Sales Cloud",
      "Service Cloud",
      "Marketing Cloud",
      "Experience Cloud",
      "Einstein AI",
      "Tableau Analytics"
    ]
  },
  {
    "id": "304980732622",
    "name": "ArcGIS",
    "stage": "1",
    "lastModified": "2026-03-30T15:35:14.579Z",
    "created": "2026-03-30T15:35:01.477Z",
    "desc": "ArcGIS Online is a cloud-based mapping and analysis solution for making maps, analyzing data, and sharing geospatial information.",
    "cat": "GIS & Engineering",
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
    "lastModified": "2026-03-27T19:26:47.565Z",
    "created": "2026-03-27T19:26:35.477Z",
    "desc": "Versity Software provides high-performance, software-defined mass storage and archiving solutions designed for exabyte-scale data for AI, scientific computing, and enterprise needs.",
    "cat": "Cloud & Infrastructure",
    "solutions": [
      "Mass Storage",
      "Archiving Solutions",
      "Exabyte-Scale Data Management",
      "Software-Defined Storage",
      "AI Data Infrastructure"
    ]
  }
];
