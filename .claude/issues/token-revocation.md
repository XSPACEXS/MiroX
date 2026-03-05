# Token Revocation Required

The Miro API token `eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_1lHPl4N2tFRPuZK2z6CoFkGTsxU` was previously hardcoded in:
- `src/services/miroApi.ts` (deleted)
- `electron/ipc/miroHandlers.ts` (removed)

This token is still visible in git history. It should be:
1. Revoked in the Miro dashboard immediately
2. A new token should be generated and stored via the app's Settings → Miro Token flow (which uses keytar secure storage)

The token was removed from source code in this hardening pass. The codebase now requires users to configure their own token through the Settings UI.
