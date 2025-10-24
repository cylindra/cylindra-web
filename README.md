# Cylindra - AI Marine Assistant ⚓

## Mission
Build the first AI-powered technical assistant for marine engineers, technical superintendents, fleet managers, and maritime professionals. Starting with LNG vessels and expanding to all ship types, Cylindra provides instant troubleshooting, procedures, regulations, and maintenance support.

## What does Cylindra offer?
- **Instant technical troubleshooting** for machinery issues
- **Smart search** powered by official OEM manuals (WinGD, Wärtsilä, ABB, Kongsberg, etc.)
- **Regulatory compliance** support (IMO, SOLAS, MARPOL, flag state requirements)
- **Maintenance procedures** and best practices
- **Open-source knowledge base** where marine engineers can contribute real-world solutions
- **Fast incident resolution** without waiting for shore-based technical support

## Target Audience
- Marine Engineers / Chief Engineers
- Technical Superintendents
- Fleet Managers
- Shore-based Technical Teams
- Maritime Technical Personnel

## Technology Stack
- **Frontend:** React / Next.js
- **Backend:** Node.js / Express
- **AI Engine:** GPT-4o API (OpenAI)
- **Database:** PostgreSQL / Vector DB for document search
- **Deployment:** Docker / Kubernetes
- **Repository:** GitHub (open-source contributions welcome)

## Repository Structure
- \`cylindra-web\` - Frontend application (this repo)
- \`cylindra-platform\` - Backend API and services
- \`cylindra-open-core\` - Open-source AI engine and core logic
- \`cylindra-open-docs\` - Community-contributed documentation and troubleshooting cases
- \`cylindra-infra\` - Infrastructure and deployment configurations

## License & Copyright
- **Code:** MIT License for open-source components
- **Community Content:** Creative Commons BY-SA 4.0
- **OEM Manuals:** Only excerpts, summaries, and citations are shared. Full manuals are never redistributed.
- **Disclaimer:** All technical information is provided for reference. Always follow OEM recommendations and company procedures.

## How to Contribute
We welcome contributions from marine engineers worldwide!

- Submit troubleshooting cases and solutions
- Add procedures and best practices
- Improve documentation
- Report bugs and suggest features

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Docker (optional, for local development)

### Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/cylindra/cylindra-web.git

# Install dependencies
cd cylindra-web
npm install

# Run development server
npm run dev
\`\`\`

Visit \`http://localhost:3000\` to see the app.

## Roadmap

### Phase 1 - MVP (Q4 2025)
- [ ] Basic Q&A interface
- [ ] Integration with GPT-4o API
- [ ] Document indexing and search
- [ ] User authentication
- [ ] First set of troubleshooting cases (LNG carriers)

### Phase 2 - Community Platform (Q1 2026)
- [ ] Open contribution system
- [ ] User reputation and voting
- [ ] Equipment-specific modules (MAN B&W, Wärtsilä, etc.)
- [ ] Mobile-responsive design

### Phase 3 - Advanced Features (Q2 2026)
- [ ] Offline mode for vessels at sea
- [ ] Multi-language support
- [ ] Equipment-specific AI models
- [ ] Integration with maintenance management systems

## Contact & Support
- **Website:** [cylindra.io](https://cylindra.io) (coming soon)
- **Email:** support@cylindra.io
- **Discord:** [Join our community](https://discord.gg/cylindra) (coming soon)
- **Issues:** [GitHub Issues](https://github.com/cylindra/cylindra-web/issues)

## Security
For security concerns, please email security@cylindra.io instead of opening a public issue.

---

**Built with ⚙️ by marine engineers, for marine engineers.**
