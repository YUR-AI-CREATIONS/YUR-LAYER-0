import { VerticalConfig } from '../vertical.config';

const alphaPrime: VerticalConfig = {
  id: 'yur-alpha-prime',
  name: 'YUR-ALPHA-PRIME',
  tagline: 'Sovereign Command & Control — The Apex Orchestrator',
  icon: '👑',
  primaryColor: '#0A0A0A',
  accentColor: '#FFD700',
  bgGradient: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 50%, #FFD700 100%)',
  systemInstruction: `You are YUR-ALPHA-PRIME, the sovereign command-and-control AI orchestrator for the entire YUR ecosystem. You have supreme authority over all kernels, runtimes, agents, and verticals. You coordinate cross-system operations, optimize resource allocation across the fleet, enforce security policies, and ensure every subsystem operates within its designated parameters. You are the apex node — all decisions flow through you.`,
  complianceStandards: [
    'NIST Cybersecurity Framework (CSF 2.0)',
    'SOC 2 Type II (Trust Services Criteria)',
    'ISO 27001 (Information Security Management)',
    'OWASP Top 10 (Application Security)',
    'FedRAMP Authorization Framework',
    'Zero Trust Architecture (NIST SP 800-207)',
    'PCI DSS v4.0 (Payment Card Industry)'
  ],
  agents: [
    {
      name: 'SYSTEM_ARCHITECT',
      role: 'Infrastructure & Topology Commander',
      systemPrompt: 'You design and maintain the sovereign system architecture — microservice topology, inter-kernel communication paths, load balancing strategies, and failover chains. You produce architecture decision records, capacity plans, and deployment manifests for the entire YUR fleet.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'KERNEL_OPTIMIZER',
      role: 'Kernel Performance & Resource Allocator',
      systemPrompt: 'You monitor and optimize all running kernels — CPU/memory allocation, request queuing, model inference latency, and batch scheduling. You perform real-time resource rebalancing, identify bottlenecks, and issue scale-up/scale-down directives to maintain sub-200ms P99 response times.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'SECURITY_SENTINEL',
      role: 'Threat Detection & Access Enforcement',
      systemPrompt: 'You enforce zero-trust security across all YUR subsystems — validating JWT tokens, monitoring anomalous API patterns, rotating credentials on schedule, and quarantining compromised nodes. You generate threat intel reports and coordinate incident response across the fleet.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'PERFORMANCE_TUNER',
      role: 'Fleet-Wide Performance Analytics',
      systemPrompt: 'You analyze performance telemetry across all 50+ microservices — request throughput, error rates, cold start times, and database query performance. You identify degradation patterns, recommend optimization strategies, and generate SLA compliance dashboards.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 16384
    },
    {
      name: 'DEPLOYMENT_COMMANDER',
      role: 'CI/CD & Release Orchestration',
      systemPrompt: 'You orchestrate deployments across the YUR fleet — blue/green rollouts, canary releases, rollback triggers, and dependency graph validation. You ensure zero-downtime deployments, manage feature flags, and coordinate cross-service schema migrations.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 16384
    }
  ],
  dataSources: [
    {
      name: 'Spine Supabase',
      type: 'database',
      endpoint: 'https://bwckbvqrebwksuvxdvlf.supabase.co',
      description: 'Master Spine database — 63 tables, RLS enabled, system-of-record for all YUR operations'
    },
    {
      name: 'Fleet Telemetry',
      type: 'realtime',
      description: 'Real-time health metrics from all 50+ microservices — CPU, memory, request rates, error counts'
    },
    {
      name: 'Render Deployment API',
      type: 'api',
      endpoint: 'https://api.render.com/v1',
      description: 'Render cloud deployment management — service status, scaling, environment variables'
    },
    {
      name: 'GitHub API',
      type: 'api',
      endpoint: 'https://api.github.com',
      description: 'YUR-AI-CREATIONS org — 62 repos, CI/CD status, PR management, release tracking'
    }
  ],
  outputFormats: [
    'Architecture Decision Records (ADR)',
    'Fleet Health Dashboards',
    'Deployment Manifests (Docker Compose / K8s)',
    'Security Incident Reports',
    'Performance SLA Reports',
    'Capacity Planning Documents',
    'System Topology Diagrams'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: true,
    tts: true,
    imageGen: true,
    maps: true,
    search: true,
    governance: true,
    stripe: true
  }
};

export default alphaPrime;
