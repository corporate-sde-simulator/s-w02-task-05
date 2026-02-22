# PR Review - File upload and virus scan pipeline (by Deepak Gupta)

## Reviewer: Pooja Reddy
---

**Overall:** Good foundation but critical bugs need fixing before merge.

### `uploadPipeline.js`

> **Bug #1:** File size validation checks size in bytes but limit is configured in MB without conversion
> This is the higher priority fix. Check the logic carefully and compare against the design doc.

### `scannerService.js`

> **Bug #2:** Upload succeeds even when virus scan returns INFECTED status because result check is inverted
> This is more subtle but will cause issues in production. Make sure to add a test case for this.

---

**Deepak Gupta**
> Acknowledged. I have documented the issues for whoever picks this up.
