export const MOCK_DOCUMENTS = [
  {
    id: "doc-msa-penalty",
    filename: "MSA_Meridian_Enterprises_2026.pdf",
    filePath: "/Volumes/LegalVault/Contracts/2026/MSA_Meridian_Enterprises_2026.pdf",
    fileType: "pdf",
    size: "2.4 MB",
    pages: 18,
    lastModified: "August 14, 2026",
    category: "Commercial Contracts",
    totalChunks: 24,
    snippets: [
      {
        id: "snip-101",
        pageNumber: 12,
        section: "Section 14.2 (Default & Late Payments)",
        confidence: 99.4,
        exactMatch: "In the event of overdue balance exceeding 45 calendar days, a cumulative 10% late penalty per annum shall accrue on all outstanding balances until full cure and receipt of certified funds.",
        contextText: "14.1 Governing Terms. Each party shall remit payment within net-30 terms following invoice issuance. 14.2 Default & Late Payments. In the event of overdue balance exceeding 45 calendar days, a cumulative 10% late penalty per annum shall accrue on all outstanding balances until full cure and receipt of certified funds. Neither party waives subsequent injunctive relief.",
        topics: ["penalty", "10%", "late payment", "meridian", "contract", "interest", "overdue"]
      }
    ]
  },
  {
    id: "doc-server-invoice",
    filename: "Invoice_AWS_Datacenter_Upgrade_Aug2026.pdf",
    filePath: "/Users/finance/Accounting/Invoices/Q3/Invoice_AWS_Datacenter_Upgrade_Aug2026.pdf",
    fileType: "pdf",
    size: "680 KB",
    pages: 3,
    lastModified: "August 28, 2026",
    category: "Cloud Infrastructure Bills",
    totalChunks: 8,
    snippets: [
      {
        id: "snip-201",
        pageNumber: 2,
        section: "Line Item #4 (Dedicated Compute Expansion)",
        confidence: 98.8,
        exactMatch: "Invoice line item: August 2026 dedicated server upgrade for 8x H100 SXM5 GPU cluster nodes totaled $14,280.00 with applied enterprise reservation credit.",
        contextText: "Summary of Infrastructure Adjustments. On August 28, 2026, client authorized dedicated compute scaling. Invoice line item: August 2026 dedicated server upgrade for 8x H100 SXM5 GPU cluster nodes totaled $14,280.00 with applied enterprise reservation credit. Maintenance window successfully executed with zero downtime.",
        topics: ["server upgrade", "invoice", "summer", "august", "gpu", "compute", "cost", "14280"]
      }
    ]
  },
  {
    id: "doc-severance-terms",
    filename: "Exec_Severance_CFO_Marcus_Signed.docx",
    filePath: "/Users/hr/Executive/Agreements/Exec_Severance_CFO_Marcus_Signed.docx",
    fileType: "docx",
    size: "420 KB",
    pages: 6,
    lastModified: "July 12, 2026",
    category: "Executive HR",
    totalChunks: 12,
    snippets: [
      {
        id: "snip-301",
        pageNumber: 4,
        section: "Section 8.1 (Involuntary Separation & Vesting Acceleration)",
        confidence: 97.9,
        exactMatch: "In the event of termination without cause following a Change of Control, Executive shall receive twelve (12) months of base salary continuation and 100% immediate accelerated vesting on all unvested stock options.",
        contextText: "8. Severance Benefits. 8.1 Involuntary Separation & Vesting Acceleration. In the event of termination without cause following a Change of Control, Executive shall receive twelve (12) months of base salary continuation and 100% immediate accelerated vesting on all unvested stock options, conditioned upon execution of a customary general release.",
        topics: ["severance", "executive", "cfo", "marcus", "vesting", "salary", "terms", "change of control"]
      }
    ]
  },
  {
    id: "doc-email-dispute",
    filename: "Fwd_Disputed_Deliverables_Apex_Agency.eml",
    filePath: "/Users/ops/Mailbox/Archive/Fwd_Disputed_Deliverables_Apex_Agency.eml",
    fileType: "eml",
    size: "180 KB",
    pages: 1,
    lastModified: "September 04, 2026",
    category: "Client Communications",
    totalChunks: 4,
    snippets: [
      {
        id: "snip-401",
        pageNumber: 1,
        section: "Email Body (From: vp.operations@apexclient.com)",
        confidence: 98.4,
        exactMatch: "We cannot sign off on Milestone 3 until the Figma component design token export is fully synchronized with our design system repo. Please hold off on issuing invoice #4402.",
        contextText: "Subject: Urgent: Scope discrepancy on Milestone 3 deliverables. From: Rachel Lin (VP Operations, Apex). 'Team, We cannot sign off on Milestone 3 until the Figma component design token export is fully synchronized with our design system repo. Please hold off on issuing invoice #4402 until QA signoff on Friday.'",
        topics: ["disputed deliverables", "email", "client vp", "apex", "milestone", "figma", "invoice 4402"]
      }
    ]
  },
  {
    id: "doc-balance-sheet",
    filename: "Q2_Consolidated_Balance_Sheet.csv",
    filePath: "/Users/audit/Financials/2026/Q2_Consolidated_Balance_Sheet.csv",
    fileType: "csv",
    size: "340 KB",
    pages: 1,
    lastModified: "July 01, 2026",
    category: "Financial Audits",
    totalChunks: 6,
    snippets: [
      {
        id: "snip-501",
        pageNumber: 1,
        section: "Row 42 (Liabilities & Operating Margin Ratios)",
        confidence: 96.5,
        exactMatch: "Deferred tax liabilities: $418,200.00 • Operating margin ratio: 24.8% • Working capital surplus: $1,840,000.00.",
        contextText: "Audit Line Items Summary: Row 42. Deferred tax liabilities: $418,200.00 • Operating margin ratio: 24.8% • Working capital surplus: $1,840,000.00. Depreciation schedule adheres to straight-line MACRS 5-year recovery.",
        topics: ["deferred tax liabilities", "operating margin", "balance sheet", "working capital", "csv", "audit"]
      }
    ]
  }
];

export const PRESET_OMNI_QUERIES = [
  {
    query: "Where is that agreement where we discussed a 10% penalty?",
    targetDocId: "doc-msa-penalty",
    categoryBadge: "Legal Agreement"
  },
  {
    query: "Invoice for server upgrade from last summer",
    targetDocId: "doc-server-invoice",
    categoryBadge: "Cloud Accounting"
  },
  {
    query: "Executive severance package terms",
    targetDocId: "doc-severance-terms",
    categoryBadge: "HR Contract"
  },
  {
    query: "Disputed deliverables email from client VP",
    targetDocId: "doc-email-dispute",
    categoryBadge: "Email Archive"
  }
];
