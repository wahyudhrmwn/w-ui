#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Setting up W-UI development environment...\n");

// Install dependencies
console.log("📦 Installing dependencies...");
try {
  execSync("npm install", { stdio: "inherit" });
  console.log("✅ Dependencies installed successfully\n");
} catch (error) {
  console.error("❌ Failed to install dependencies");
  process.exit(1);
}

// Build library
console.log("🏗️ Building library...");
try {
  execSync("npm run build", { stdio: "inherit" });
  console.log("✅ Library built successfully\n");
} catch (error) {
  console.error("❌ Failed to build library");
  process.exit(1);
}

// Setup demo app
console.log("🎨 Setting up demo app...");
const demoPath = path.join(__dirname, "..", "demo");

if (fs.existsSync(demoPath)) {
  try {
    process.chdir(demoPath);
    execSync("npm install", { stdio: "inherit" });
    console.log("✅ Demo app setup completed\n");
  } catch (error) {
    console.error("❌ Failed to setup demo app");
    process.exit(1);
  }
} else {
  console.log("⚠️ Demo folder not found, skipping demo setup\n");
}

console.log("🎉 Setup completed successfully!");
console.log("\nNext steps:");
console.log('1. Run "npm run dev" to start development mode');
console.log('2. Run "cd demo && npm run dev" to start demo app');
console.log("3. Open http://localhost:3000 to see the demo\n");

console.log("Happy coding! 🚀");
