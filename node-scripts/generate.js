const { default: axios } = require('axios');
const fs = require('fs');

/** This script generate the full sitemap
 *
 * 1. download most recent list of 20m siren from datagouv server
 * 2. produce as many sitemap as necessary (sitemap can contains 50k url max)
 * 3. create a sitemap index
 *
 * NB : this script is supposed to run on server, on deploy. Therefore it is triggered in the default build command that will be used by dokku
 * NB 2 : main risk here is to overflow memory, always monitor max mem usage when running the script
 */

const mem = () => {
  return (used = process.memoryUsage().heapUsed / 1024 / 1024);
};

const logMem = () => {
  const used = mem();
  console.log(
    `The script uses approximately ${Math.round(used * 100) / 100} MB`
  );
};

const workingPath = process.env.NODE_ENV === 'production' ? '.' : '.';

const WEBSITE =
  process.env.SITE_URL || 'https://annuaire-entreprises.data.gouv.fr';

const getIndexUrl = (str) => `${WEBSITE}${str}`;

const getEntrepriseUrl = (str) =>
  `${WEBSITE}/entreprise/${encodeURIComponent(str)}`;

const getSitemap = (idx) => `/sitemap${idx}.xml`;

const saveSitemap = (indices, idx) => {
  const index = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  >
  ${indices
    .map(
      (url) => `
      <url>
      <loc>${url}</loc>
      </url>
      `
    )
    .join('')}
      </urlset>`;

  fs.writeFileSync(`${workingPath}/public${getSitemap(idx)}`, index);
};

const saveSitemapIndex = (indices) => {
  const index = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${indices
    .map(
      (url) => `
      <sitemap>
      <loc>${url}</loc>
      </sitemap>
      `
    )
    .join('')}
      </sitemapindex>`;

  fs.writeFileSync(`${workingPath}/public/sitemap.xml`, index);
};

async function main() {
  let sitemapCount = 0;
  let currentBatch = [];
  let urlCount = 0;
  let maxMemory = 0;

  console.log('*** Sitemap generation script ***');

  console.time('⏱ Total time to execute script');

  const write = (elem) => {
    currentBatch.push(elem);
    urlCount++;

    if (currentBatch.length === 50000) {
      sitemapCount++;
      saveSitemap(currentBatch, sitemapCount);
      currentBatch = [];
    }
  };

  [
    '/',
    '/donnees-extrait-kbis',
    '/comment-ca-marche',
    '/rechercher',
    '/faq',
  ].map((path) => write(WEBSITE + path));

  console.time('⏱ Time to download base SIREN');
  const url =
    'https://files.data.gouv.fr/annuaire-entreprises/sitemap-name.csv';
  const names = await axios.get(url);
  const data = names.data;
  console.timeEnd('⏱ Time to download base SIREN');

  data.split('\n').forEach((line, idx) => {
    if (idx % 10000 === 0) {
      maxMemory = Math.max(mem(), maxMemory);
    }
    write(getEntrepriseUrl(line));
  });

  const indices = [];
  for (i = 1; i <= sitemapCount; i++) {
    indices.push(getIndexUrl(getSitemap(i)));
  }
  saveSitemapIndex(indices);

  console.timeEnd('⏱ Total time to execute script');
  console.log(`📈 Max memory usage ${Math.round(maxMemory * 100) / 100} mo`);
  console.log(`💾 Saved ${sitemapCount} sitemaps with ${urlCount} urls`);
}

main();
