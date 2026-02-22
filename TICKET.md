# FINSERV-4116: Refactor file upload and virus scan pipeline

**Status:** In Progress · **Priority:** Medium
**Sprint:** Sprint 24 · **Story Points:** 5
**Reporter:** Arun Nair (Security Lead) · **Assignee:** You (Intern)
**Due:** End of sprint (Friday)
**Labels:** `backend`, `javascript`, `security`, `refactor`
**Task Type:** Code Maintenance

---

## Description

The file upload pipeline **works correctly** — it scans uploaded files and rejects suspicious ones. The code has hardcoded file size limits, no configurable scan rules, and the pipeline is a single monolithic function instead of composable steps.

## Acceptance Criteria

- [ ] All `// TODO (code review):` items addressed
- [ ] File size limits and scan rules made configurable
- [ ] Pipeline split into composable steps (validate → scan → store)
- [ ] All existing tests still pass
