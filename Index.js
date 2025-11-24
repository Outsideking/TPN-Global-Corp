// -------------------------
// ChatSC Template + Auto Run (Fixed for GitHub)
// -------------------------
const fs = require('fs');
const path = require('path');

// ฟังก์ชันหลัก ChatSC
function startChatSC() {
    console.log("🚀 ChatSC is running...");
    const commands = ["Command1", "Command2", "Command3"];
    commands.forEach(cmd => console.log(`Processing: ${cmd}`));
    console.log("✅ ChatSC completed all tasks!");
}

// สร้าง workflow อัตโนมัติ (เฉพาะครั้งแรก)
const workflowDir = path.join(process.cwd(), ".github/workflows");
if (!fs.existsSync(workflowDir)) {
    fs.mkdirSync(workflowDir, { recursive: true });
    console.log(`Created folder: ${workflowDir}`);
}

const workflowFile = path.join(workflowDir, "run_chatsc.yml");
if (!fs.existsSync(workflowFile)) {
    const workflowContent = `
name: Run ChatSC

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Run ChatSC
        run: node index.js
`;
    fs.writeFileSync(workflowFile, workflowContent.trim());
    console.log(`Created workflow file: ${workflowFile}`);
}

// ✅ Run ChatSC
startChatSC();
