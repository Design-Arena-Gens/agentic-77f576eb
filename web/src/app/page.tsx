import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileDigit,
  Inbox,
  Layers,
  LineChart,
  Shield,
  Sparkles,
} from "lucide-react";

const metrics = [
  { label: "Private Capital Monitored", value: "$182B", detail: "LP commitments tracked in real time" },
  { label: "Fund Lines Parsed", value: "92K", detail: "Capital calls & financial statements digitized" },
  { label: "Response Speed", value: "< 2 min", detail: "Inbox-to-dashboard ingestion time" },
  { label: "Forecast Accuracy", value: "96%", detail: "Predictive cash flow vs. actuals" },
];

const painPoints = [
  "Capital calls arrive through unstructured PDFs, emails, and portal logins.",
  "No consolidated view of uncalled capital or liquidity runway.",
  "Sectors over-concentrate silently across managers and vintages.",
  "Cash drag from defensive reserves erodes annual yield by $1.2M+.",
];

const platformHighlights = [
  {
    icon: <Inbox className="h-6 w-6 text-emerald-300" />,
    title: "Intelligent Document Ingestion",
    description:
      "Forward capital calls, K-1s, and quarterly letters to a dedicated Accrue Flow inbox. Machine parsing and human verification produce structured records instantly.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-sky-300" />,
    title: "Uncalled Capital Radar",
    description:
      "Get a rolling view of unfunded commitments, projected draw cadence, and liquidity coverage ratios that update as soon as a notice lands.",
  },
  {
    icon: <Layers className="h-6 w-6 text-indigo-300" />,
    title: "Concentration Intelligence",
    description:
      "Quantify exposures across sector, strategy, manager, geography, and vintage. Trigger alerts before allocations breach policy limits.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-cyan-300" />,
    title: "Predictive Cash Flow Modeling",
    description:
      "Blend vintage curves and manager pacing profiles to forecast contributions, distributions, and recycling schedules with configurable confidence bands.",
  },
];

const zeroTrustPillars = [
  {
    label: "Email-Forward Only",
    detail: "Clients route statements; Accrue Flow never touches banking rails or portal credentials.",
  },
  {
    label: "Read-Only Data Core",
    detail: "SOC 2-aligned storage with immutable audit trails and client-controlled retention policies.",
  },
  {
    label: "Encryption Edge-to-Core",
    detail: "S/MIME ingestion, field-level encryption in flight and at rest, granular role-based access.",
  },
];

const workflow = [
  {
    title: "1. Activate Vault",
    description:
      "Provision a dedicated ingest address, configure SSO, and sync capital account roster from your fund admin exports.",
  },
  {
    title: "2. Train Profiles",
    description:
      "Accrue Flow maps each GP to historical pacing curves and assigns smart tags to recognize future communications instantly.",
  },
  {
    title: "3. Automate Signals",
    description:
      "Alerting thresholds for cash coverage, sector gravity, and vintage drift light up Slack, Teams, or SMS based on your operating cadence.",
  },
  {
    title: "4. Command the Narrative",
    description:
      "Board decks and IC packets pull live metrics, so every committee meeting begins with a single source of truth.",
  },
];

const insightCards = [
  {
    title: "Vintage Drift Monitor",
    insight: "2020–2022 vintages now sit 18% above target, driven by late-stage growth and secondaries.",
  },
  {
    title: "Cash Drag Eliminated",
    insight: "Reducing defensive cash reserves from 30% to 12% freed $88M for treasury ladder deployment.",
  },
  {
    title: "Capital Call Outlook",
    insight: "Projected contributions of $42.6M in the next 90 days; recommended liquidity buffer $51M.",
  },
];

const resources = [
  {
    tag: "Playbook",
    title: "Designing a Zero-Trust Private Markets Ops Stack",
    href: "#",
  },
  {
    tag: "Guide",
    title: "Capital Call Forecasting Models Used by Top LPs",
    href: "#",
  },
  {
    tag: "Benchmark",
    title: "Vintage Curve Analyzer: 2008-2023 Private Equity Cohorts",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900" />
      <div className="pointer-events-none absolute inset-x-0 top-[-10%] -z-10 h-[80rem] overflow-hidden opacity-70">
        <div className="absolute left-1/2 -translate-x-1/2 blur-3xl">
          <div className="aspect-[4/3] w-[60rem] bg-gradient-to-br from-emerald-500/30 via-cyan-400/20 to-indigo-500/20" />
        </div>
      </div>

      <div className="relative">
        <header className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/40">
              <Sparkles className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="font-semibold tracking-[0.2em] text-slate-200">
                ACCRUE FLOW
              </p>
              <p className="text-sm text-slate-400">
                PRIVATE EQUITY COMMAND CENTER
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-8 text-sm text-slate-300">
            <Link href="#platform" className="transition hover:text-white">
              Platform
            </Link>
            <Link href="#pains" className="transition hover:text-white">
              The Pain
            </Link>
            <Link href="#workflow" className="transition hover:text-white">
              Operating Rhythm
            </Link>
            <Link href="#trust" className="transition hover:text-white">
              Zero-Trust
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-slate-700 bg-white/5 px-4 py-2 font-medium text-white shadow-lg shadow-emerald-500/10 transition hover:border-emerald-400/60 hover:bg-emerald-500/10"
            >
              Request a Demo
            </Link>
          </nav>
        </header>

        <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 lg:px-12 lg:pt-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-200">
                Mint.com for Private Equity — Zero Control, Pure Visibility
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                The real-time command center for institutional private equity LPs.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Accrue Flow ingests every capital call, financial statement, and K-1 the moment it arrives. LPs finally get
                live uncalled capital, predictive cash flow, IRR tracking, and concentration alerts — without relinquishing
                banking control or portal credentials.
              </p>
              <div className="mt-8 flex flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:gap-6">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Launch a Pilot
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#insights"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:text-emerald-200"
                >
                  See live dashboards
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500/10 via-cyan-400/10 to-indigo-500/10 blur-2xl" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-4">
                  <div>
                    <p className="text-sm text-slate-400">Liquidity runway</p>
                    <p className="text-3xl font-semibold text-white">$137.4M</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                    12.6 months cover
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Predicted Calls · 90 days
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">$42.6M</p>
                    <p className="mt-1 text-xs text-emerald-200">92% confidence band</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Vintage Drift
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">+18%</p>
                    <p className="mt-1 text-xs text-slate-300">Over target 2020-2022</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Concentration Alert
                  </p>
                  <p className="mt-2 text-sm text-slate-200">
                    Growth Equity allocation exceeds mandate by 6%. Suggested action: pause new commitments until FY24 Q4 distribution cycle.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    <Shield className="h-4 w-4" />
                    Zero-trust monitoring active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="metrics" className="border-y border-white/10 bg-white/5">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-emerald-500/5">
                <p className="text-xs uppercase tracking-wider text-slate-400">{metric.label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-400">{metric.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pains" className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Your peers run $50M-$500M across 80+ funds. Their data estate is chaos.
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                Capital call notices hide inside inboxes, portals, and PDFs. Without a real-time command center, teams
                operate blind, over-allocate unintentionally, and lock 30% of capital in cash drag.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-lg">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                THE PAIN
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="platform" className="relative mx-auto max-w-6xl px-6 pb-20 lg:px-12">
          <div className="absolute inset-x-0 top-10 -z-10 h-96 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 blur-3xl" />
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-200">
              Command Center Modules
            </div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              A read-only ops stack designed for investment committees, CFOs, and family office leaders.
            </h2>
            <p className="max-w-3xl text-lg text-slate-300">
              Every module is engineered to deliver visibility without introducing control risk.
              Accrue Flow ingests, normalizes, and visualizes — empowering smarter commitments and tighter cash orchestration.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {platformHighlights.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-lg shadow-emerald-500/10 transition hover:border-emerald-400/40 hover:shadow-emerald-400/15"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="insights" className="border-y border-white/10 bg-slate-950/80">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr,1.1fr] lg:px-12 lg:py-24">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Predictive visibility that aligns every committee conversation.
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                Accrue Flow models every capital account against historical pacing curves and manager-specific behaviors.
                The result is a living forecast with alerting, scenario analysis, and board-ready exports.
              </p>
              <div className="mt-8 space-y-5">
                {insightCards.map((card) => (
                  <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <p className="text-xs uppercase tracking-wider text-emerald-200">{card.title}</p>
                    <p className="mt-2 text-sm text-slate-200">{card.insight}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/20 via-cyan-400/10 to-indigo-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-500/20">
                <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/60 px-6 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">Cash Flow Outlook</p>
                    <p className="text-sm font-medium text-white">Scenario: New Fund Allocation Q3</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    96% accuracy trailing 12M
                  </span>
                </div>
                <div className="grid gap-6 px-6 py-6 text-sm text-slate-300">
                  <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                    <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-500">
                      <span>Month</span>
                      <span>Projected</span>
                      <span>Actual</span>
                    </div>
                    {["Aug", "Sep", "Oct", "Nov", "Dec"].map((month, index) => (
                      <div key={month} className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm text-slate-300">{month}</span>
                        <div className="h-2 rounded-full bg-emerald-500/20">
                          <div
                            className="h-2 rounded-full bg-emerald-400"
                            style={{ width: `${60 + index * 8}%` }}
                          />
                        </div>
                        <div className="h-2 rounded-full bg-slate-800">
                          <div
                            className="h-2 rounded-full bg-emerald-200/90"
                            style={{ width: `${58 + index * 9}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">Liquidity Buffer</p>
                      <p className="text-xl font-semibold text-white">$51.0M</p>
                    </div>
                    <div className="text-xs text-slate-400">
                      <p>Coverage target: 1.2x projected 90-day calls</p>
                      <p>Available cash after treasury ladder: $56.4M</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Alert Queue
                    </p>
                    <ul className="mt-3 space-y-3 text-sm">
                      <li className="flex items-center justify-between gap-4">
                        <span className="text-slate-200">
                          Growth Equity allocation 6% over mandate
                        </span>
                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                          Monitoring
                        </span>
                      </li>
                      <li className="flex items-center justify-between gap-4">
                        <span className="text-slate-200">
                          Unfunded reserve dips below policy in January
                        </span>
                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
                          Watchlist
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="trust" className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-200">
                Zero-Trust Operating Model
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
                You never hand over cash control. Accrue Flow stays read-only by design.
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                Clients forward documents; we transform them into structured intelligence. Every control point is
                auditable, encrypted, and aligned with your compliance posture.
              </p>
            </div>
            <div className="space-y-6">
              {zeroTrustPillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="rounded-3xl border border-emerald-300/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-500/20 backdrop-blur"
                >
                  <p className="text-sm font-semibold uppercase tracking-widest text-emerald-200">
                    {pillar.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-100">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="border-y border-white/10 bg-slate-950/80">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-200">
                Operating Rhythm
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
                Deploy in weeks, not quarters. Keep your team’s workflow intact.
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                From onboarding to first executive dashboard, Accrue Flow eliminates manual reconciliations and fragmented
                spreadsheets without disrupting your fund admin relationships.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {workflow.map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-md shadow-emerald-500/10"
                >
                  <p className="text-xs uppercase tracking-widest text-emerald-200">{step.title}</p>
                  <p className="mt-3 text-sm text-slate-200">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-emerald-500/15">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                REPORTING TOOLKIT
              </h3>
              <p className="mt-6 text-3xl font-semibold text-white">
                Board-ready reporting without the Saturday night scramble.
              </p>
              <p className="mt-4 text-sm text-slate-300">
                Export allocation heatmaps, commitment waterfalls, and IRR narratives directly into PowerPoint, PDF, or Google Slides. Every output references a live link so committees can drill into source documents instantly.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <FileDigit className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                  Dynamic data rooms with GP statements linked to each metric
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 flex-none text-cyan-300" />
                  Automated commentary suggestions based on trends and variances
                </li>
                <li className="flex items-start gap-3">
                  <LineChart className="mt-1 h-4 w-4 flex-none text-indigo-300" />
                  Editable scenario planning for new commitments or liquidity events
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950 p-10 shadow-2xl shadow-cyan-500/10 backdrop-blur">
              <div className="absolute right-10 top-8 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-200">
                <Sparkles className="h-4 w-4 text-emerald-200" />
                Auto-insights
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Sector Allocation</p>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-200">
                    <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-slate-400">Software & Cloud</p>
                      <p className="text-2xl font-semibold text-white">24%</p>
                    </div>
                    <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-slate-400">Healthcare</p>
                      <p className="text-2xl font-semibold text-white">18%</p>
                    </div>
                    <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-slate-400">Infrastructure</p>
                      <p className="text-2xl font-semibold text-white">16%</p>
                    </div>
                    <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-slate-400">Climate & Energy</p>
                      <p className="text-2xl font-semibold text-white">12%</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">IRR Tracker</p>
                  <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div>
                      <p className="text-xs text-slate-400">Net IRR (since inception)</p>
                      <p className="text-2xl font-semibold text-white">17.2%</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                      +120 bps vs. benchmark
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Capital Momentum</p>
                  <div className="mt-3 h-32 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-indigo-500/20">
                    <Image
                      src="/signal-lines.svg"
                      alt="Capital momentum visualization"
                      width={640}
                      height={240}
                      className="h-full w-full object-cover opacity-80 mix-blend-screen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
              <div>
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                  Enterprise-grade security with boutique-level service.
                </h3>
                <p className="mt-4 text-sm text-slate-300">
                  Every engagement pairs automation with a dedicated operations analyst embedded with your team.
                </p>
              </div>
              <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                  <p className="text-xs uppercase tracking-widest text-emerald-200">Coverage</p>
                  <p className="mt-2 font-semibold text-white">Global</p>
                  <p className="mt-1 text-xs text-slate-400">GPs across 28 countries</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                  <p className="text-xs uppercase tracking-widest text-emerald-200">Support</p>
                  <p className="mt-2 font-semibold text-white">24/5</p>
                  <p className="mt-1 text-xs text-slate-400">Follow-the-sun coverage</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                  <p className="text-xs uppercase tracking-widest text-emerald-200">Accuracy</p>
                  <p className="mt-2 font-semibold text-white">99.7%</p>
                  <p className="mt-1 text-xs text-slate-400">Human-in-the-loop QA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr,0.8fr] lg:items-center">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                RESOURCE LIBRARY
              </h3>
              <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
                Build your private equity command center playbook.
              </h2>
            </div>
            <div className="flex justify-end">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-emerald-300/50 hover:text-emerald-200"
              >
                Talk to strategy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition hover:border-emerald-300/40 hover:shadow-lg hover:shadow-emerald-500/15"
              >
                <p className="text-xs uppercase tracking-widest text-emerald-200">{resource.tag}</p>
                <p className="mt-4 text-sm font-semibold text-white group-hover:text-emerald-100">
                  {resource.title}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs text-slate-400 group-hover:text-emerald-200">
                  Download brief
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl rounded-[3rem] border border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950 px-8 py-16 shadow-2xl shadow-emerald-500/20 backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Ready to command every dollar of private capital?
              </h2>
              <p className="mt-4 text-sm text-slate-200">
                Schedule a walkthrough with our capital operations team. We’ll map your GP roster, define alerting thresholds, and launch a pilot environment in under 14 days.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                <p className="flex items-center gap-2">
                  <Shield className="h-4 w-4 flex-none text-emerald-300" />
                  SOC 2 Type II in progress · GDPR-ready architecture
                </p>
                <p className="flex items-center gap-2">
                  <Inbox className="h-4 w-4 flex-none text-emerald-300" />
                  Dedicated ingest domain + automated routing rules
                </p>
                <p className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 flex-none text-emerald-300" />
                  Pilot includes concierge onboarding & benchmarking
                </p>
              </div>
            </div>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Alex Morgan"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-slate-400">
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="alex@familyoffice.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
                />
              </div>
              <div>
                <label htmlFor="role" className="text-xs uppercase tracking-widest text-slate-400">
                  Role
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="CIO, Director of Investments, etc."
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-slate-400">
                  Current Challenge
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your capital call, forecasting, or reporting pain points."
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Request a Private Demo
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>

        <footer className="mx-auto mt-24 max-w-6xl px-6 pb-16 pt-12 text-xs text-slate-500 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold tracking-[0.2em] text-slate-200">ACCRUE FLOW</p>
              <p className="mt-2 text-[0.7rem] text-slate-500">
                © {new Date().getFullYear()} Accrue Flow. Visibility without control. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#platform" className="transition hover:text-emerald-200">
                Platform
              </Link>
              <Link href="#trust" className="transition hover:text-emerald-200">
                Security
              </Link>
              <Link href="#contact" className="transition hover:text-emerald-200">
                Request Demo
              </Link>
              <Link href="#" className="transition hover:text-emerald-200">
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
