#!/usr/bin/env python3
"""Fail if any /images/... reference in src/ points at a file missing from public/."""
import os, re, sys
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
missing = []
for d, _, files in os.walk(os.path.join(root, "src")):
    for fn in files:
        if not fn.endswith((".ts", ".tsx")):
            continue
        txt = open(os.path.join(d, fn), encoding="utf-8").read()
        for ref in set(re.findall(r"""['"](/images/[^'"`$]+\.(?:jpe?g|png|webp|svg|gif))['"]""", txt)):
            if not os.path.exists(os.path.join(root, "public", ref.lstrip("/"))):
                missing.append(f"{fn}: {ref}")
print("\n".join(missing) if missing else "0 broken image references")
sys.exit(1 if missing else 0)
