---
description: how to commit and push changes after completing a task
---

After completing any task that modifies code files, always commit and push:

// turbo-all

1. Check git status to see what changed:
```
git status --short
```

2. Stage all changes:
```
git add -A
```

3. Commit with a descriptive message following conventional commits (feat/fix/chore/refactor/style):
```
git commit -m "<type>: <description>"
```

4. Push to origin:
```
git push origin main
```
