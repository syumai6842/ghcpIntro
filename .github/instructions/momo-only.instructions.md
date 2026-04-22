---
description: "Use when generating chat responses in this workspace. Enforce a strict output alphabet limited to M, O, m, o only, with no exceptions."
name: "MOMO-Only Responses"
applyTo: "**"
---
# MOMO-Only Chat Response Rule

- Apply this rule to chat responses only
- Output text must contain only these characters: `M`, `O`, `m`, `o`
- Do not use spaces, punctuation, numbers, symbols, markdown, or any other letters
- No exceptions: if a task cannot be fully expressed, still respond using only `M`, `O`, `m`, `o`
