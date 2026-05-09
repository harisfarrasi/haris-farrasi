import { promises as fs } from 'fs';
import path from 'path';

const siteDir = process.cwd();
const rootDir = path.resolve(siteDir, '..');
const sourceDir = path.join(rootDir, 'studio-docs');
const targetDir = path.join(siteDir, 'content', 'wiki');
const thesisSourceDir = path.join(rootDir, 'studio-thesis');
const thesisTargetDir = path.join(siteDir, 'content', 'thesis');

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function listMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name);
}

async function syncWiki() {
  try {
    await fs.access(sourceDir);
  } catch (error) {
    console.warn(`Wiki source folder not found: ${sourceDir}`);
    console.warn('Skipping wiki sync. Run sync locally after updating your wiki files.');
    return;
  }

  await ensureDir(targetDir);

  const sourceFiles = await listMarkdownFiles(sourceDir);
  const targetFiles = await listMarkdownFiles(targetDir);

  const sourceSet = new Set(sourceFiles);

  await Promise.all(
    sourceFiles.map((file) =>
      fs.copyFile(path.join(sourceDir, file), path.join(targetDir, file))
    )
  );

  const staleFiles = targetFiles.filter((file) => !sourceSet.has(file));
  await Promise.all(staleFiles.map((file) => fs.unlink(path.join(targetDir, file))));

  console.log(`Synced ${sourceFiles.length} wiki file(s) to ${targetDir}`);

  const thesisFiles = ['skripsi.md', 'chart-data.json'];
  try {
    await fs.access(thesisSourceDir);
    await ensureDir(thesisTargetDir);
    await Promise.all(
      thesisFiles.map((file) =>
        fs.copyFile(path.join(thesisSourceDir, file), path.join(thesisTargetDir, file))
      )
    );

    const pdfSource = path.join(thesisSourceDir, 'latex', 'out', 'skripsi.pdf');
    const pdfTarget = path.join(siteDir, 'public', 'skripsi.pdf');
    try {
      await fs.copyFile(pdfSource, pdfTarget);
      console.log(`Synced thesis PDF to ${pdfTarget}`);
    } catch (e) {
      console.warn(`Could not sync thesis PDF: ${e.message}`);
    }

    console.log(`Synced thesis assets to ${thesisTargetDir}`);
  } catch (error) {
    console.warn(`Thesis folder not found or missing files at ${thesisSourceDir}.`);
  }
}

syncWiki();
