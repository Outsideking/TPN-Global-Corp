// -------------------------
// ChatSC Template + Auto Run
// -------------------------
const fs = require('fs');

// ฟังก์ชันหลัก ChatSC
function startChatSC() {
    console.log("🚀 ChatSC is running...");
    const commands = ["Command1", "Command2", "Command3"];
    commands.forEach(cmd => console.log(`Processing: ${cmd}`));
    console.log("✅ ChatSC completed all tasks!");
}

// สร้าง workflow อัตโนมัติ
const workflowDir = ".github/workflows";
if (!fs.existsSync(workflowDir)) fs.mkdirSync(workflowDir, { recursive: true });

const workflowFile = `${workflowDir}/run_chatsc.yml`;
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
if (!fs.existsSync(workflowFile)) fs.writeFileSync(workflowFile, workflowContent.trim());

// Run ChatSC
startChatSC();
