const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, 'src');
const redesignDir = path.join(clientDir, 'redesign');
const componentsDir = path.join(clientDir, 'components');
const pagesDir = path.join(clientDir, 'pages');

// Helper to copy files and update imports
function copyDirUpdateImports(src, dest, transformFn) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirUpdateImports(srcPath, destPath, transformFn);
    } else {
      let content = fs.readFileSync(srcPath, 'utf-8');
      if (transformFn) content = transformFn(content);
      fs.writeFileSync(destPath, content);
      console.log(`Copied ${srcPath} -> ${destPath}`);
    }
  }
}

// Transform imports for pages (moving from redesign/pages to pages)
// They imported from '../sections/...' and '../components/...'
// We move sections to components, so '../sections/...' becomes '../components/...'
function transformPageContent(content) {
  return content.replace(/from\s+["']\.\.\/sections\/([^"']+)["']/g, 'from "../components/$1"');
}

// Transform imports for sections (moving from redesign/sections to components)
// They imported from '../components/...' but now they are *in* components, so it should be './...'
function transformSectionContent(content) {
  let newContent = content.replace(/from\s+["']\.\.\/components\/([^"']+)["']/g, 'from "./$1"');
  // if they imported from '../../data/...', they were originally in redesign/sections, which is depth 2. Now in components, depth 1
  newContent = newContent.replace(/from\s+["']\.\.\/\.\.\/data\/([^"']+)["']/g, 'from "../data/$1"');
  return newContent;
}

// Transform imports for redesign/components (moving to components)
function transformComponentContent(content) {
  let newContent = content.replace(/from\s+["']\.\.\/\.\.\/data\/([^"']+)["']/g, 'from "../data/$1"');
  return newContent;
}

// 1. Copy pages
console.log('Copying pages...');
copyDirUpdateImports(path.join(redesignDir, 'pages'), pagesDir, transformPageContent);

// 2. Copy components
console.log('Copying components...');
copyDirUpdateImports(path.join(redesignDir, 'components'), componentsDir, transformComponentContent);

// 3. Copy sections (into components)
console.log('Copying sections...');
copyDirUpdateImports(path.join(redesignDir, 'sections'), componentsDir, transformSectionContent);

// Update App.jsx
const appPath = path.join(clientDir, 'App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Replace any import from './redesign/pages/...' with './pages/...'
appContent = appContent.replace(/from\s+["']\.\/redesign\/pages\/([^"']+)["']/g, 'from "./pages/$1"');
// Replace any import from './redesign/components/...' with './components/...'
appContent = appContent.replace(/from\s+["']\.\/redesign\/components\/([^"']+)["']/g, 'from "./components/$1"');
// Ensure RedesignPage is removed and its wrappers are applied directly, or we just fix it.
// Actually, RedesignPage was in './redesign/RedesignPage'.
fs.writeFileSync(appPath, appContent);

console.log('Imports in App.jsx updated. Note: RedesignPage import might need manual fixing.');
