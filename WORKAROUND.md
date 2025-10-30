For temporary workarounds to issues in this project:
- Change `tsconfig.json` to set `"strict": false` to disable strict type checking.
- In `src/cloud/main.ts`, import Parse using:
  ```typescript
    import Parse from 'parse/node';
  ```  
