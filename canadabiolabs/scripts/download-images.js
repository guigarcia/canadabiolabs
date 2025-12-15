// Script para baixar todas as imagens do site original
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Imagens principais
const mainImages = [
  { url: 'https://canadabiolabs.co/images/canada-peptides-logo-main.png', path: 'public/images/canada-peptides-logo-main.png' },
  { url: 'https://canadabiolabs.co/images/gmp-certified.png', path: 'public/images/gmp-certified.png' },
  { url: 'https://canadabiolabs.co/images/atomic.png', path: 'public/images/atomic.png' },
  { url: 'https://canadabiolabs.co/images/for-research.jpg', path: 'public/images/for-research.jpg' },
  { url: 'https://canadabiolabs.co/images/research-use-only.png', path: 'public/images/research-use-only.png' },
  { url: 'https://canadabiolabs.co/images/canada-symbol.svg', path: 'public/images/canada-symbol.svg' },
];

// Imagens do slider
const sliderImages = [
  { url: 'https://canadabiolabs.co/images/slider/slider-item-bg-1.jpg', path: 'public/images/slider/slider-item-bg-1.jpg' },
  { url: 'https://canadabiolabs.co/images/slider/slider-item-bg-2.jpg', path: 'public/images/slider/slider-item-bg-2.jpg' },
  { url: 'https://canadabiolabs.co/images/slider/slider-item-bg-3.jpg', path: 'public/images/slider/slider-item-bg-3.jpg' },
  { url: 'https://canadabiolabs.co/images/slider/slider-item-bg-4.jpg', path: 'public/images/slider/slider-item-bg-4.jpg' },
  { url: 'https://canadabiolabs.co/images/slider/slider-item-bg-5.jpg', path: 'public/images/slider/slider-item-bg-5.jpg' },
  { url: 'https://canadabiolabs.co/images/slider/slider-item-bg-6.jpg', path: 'public/images/slider/slider-item-bg-6.jpg' },
];

// Imagens de produtos (92 produtos identificados)
const productImages = [
  'adipotide-peptides-1-1.png', 'adipotide-peptides-2-1.png',
  'adrafinil-peptides-3-1.png', 'adrafinil-peptides-4-1.png',
  'aicar-peptides-5-1.png', 'aicar-peptides-6-1.png',
  'alarelin-peptides-7-1.png', 'alarelin-peptides-8-1.png',
  'aod9604-c-peptides-9-1.png', 'aod9604-c-peptides-10-1.png',
  'argireline-acetyl-hexapeptide-3-peptides-11-1.png', 'argireline-acetyl-hexapeptide-3-peptides-12-1.png',
  'bpc-157-peptides-13-1.png', 'bpc-157-peptides-14-1.png',
  'cjc-1295-peptides-15-1.png', 'cjc-1295-peptides-16-1.png',
  'cjc-1295-with-dac-peptides-17-1.png', 'cjc-1295-with-dac-peptides-18-1.png',
  'dsip-peptides-19-1.png', 'dsip-peptides-20-1.png',
  'epithalon-peptides-21-1.png', 'epithalon-peptides-22-1.png',
  'ftpp-adipotide-peptides-23-1.png', 'ftpp-adipotide-peptides-24-1.png',
  'gdf-8-peptides-25-1.png', 'gdf-8-peptides-26-1.png',
  'ghrp-2-peptides-27-1.png', 'ghrp-2-peptides-28-1.png',
  'ghrp-6-peptides-29-1.png', 'ghrp-6-peptides-30-1.png',
  'glutathione-peptides-31-1.png', 'glutathione-peptides-32-1.png',
  'gonadorelin-peptides-33-1.png', 'gonadorelin-peptides-34-1.png',
  'hexarelin-peptides-35-1.png', 'hexarelin-peptides-36-1.png',
  'hgh-frag176-191-peptides-37-1.png', 'hgh-frag176-191-peptides-38-1.png',
  'ipamorelin-peptides-39-1.png', 'ipamorelin-peptides-40-1.png',
  'matrixyl-palmitoyl-pentapeptide-4-peptides-41-1.png', 'matrixyl-palmitoyl-pentapeptide-4-peptides-42-1.png',
  'matrixyl-3000-peptides-43-1.png', 'matrixyl-3000-peptides-44-1.png',
  'melanotan-i-peptides-45-1.png', 'melanotan-i-peptides-46-1.png',
  'melanotan-ii-peptides-47-1.png', 'melanotan-ii-peptides-48-1.png',
  'mgf-peptides-49-1.png', 'mgf-peptides-50-1.png',
  'oxytocin-peptides-51-1.png', 'oxytocin-peptides-52-1.png',
  'p21-peptides-53-1.png', 'p21-peptides-54-1.png',
  'pal-ghk-peptides-55-1.png', 'pal-ghk-peptides-56-1.png',
  'peg-mgf-peptides-57-1.png', 'peg-mgf-peptides-58-1.png',
  'pge-1-peptides-59-1.png', 'pge-1-peptides-60-1.png',
  'pge-1-2mg-prostaglandin-e1-peptides-61-1.png', 'pge-1-2mg-prostaglandin-e1-peptides-62-1.png',
  'pinealon-peptides-63-1.png', 'pinealon-peptides-64-1.png',
  'pnc-27-peptides-65-1.png', 'pnc-27-peptides-66-1.png',
  'pt-141-peptides-67-1.png', 'pt-141-peptides-68-1.png',
  'ptd-dbm-peptides-69-1.png', 'ptd-dbm-peptides-70-1.png',
  'ru-58841-psk-3841-peptides-71-1.png', 'ru-58841-psk-3841-peptides-72-1.png',
  'selank-peptides-73-1.png', 'selank-peptides-74-1.png',
  'semax-peptides-75-1.png', 'semax-peptides-76-1.png',
  'sermorelin-grf-1-29-peptides-77-1.png', 'sermorelin-grf-1-29-peptides-78-1.png',
  'snap-8-peptides-79-1.png', 'snap-8-peptides-80-1.png',
  'syn-ake-peptides-81-1.png', 'syn-ake-peptides-82-1.png',
  'tesamorelin-peptides-83-1.png', 'tesamorelin-peptides-84-1.png',
  'thymalin-peptides-85-1.png', 'thymalin-peptides-86-1.png',
  'thymosin-alpha-1-peptides-87-1.png', 'thymosin-alpha-1-peptides-88-1.png',
  'thymosin-betatb4-tb-500-peptides-89-1.png', 'thymosin-betatb4-tb-500-peptides-90-1.png',
  'triptorelin-gnrh-peptides-91-1.png', 'triptorelin-gnrh-peptides-92-1.png',
].map(filename => ({
  url: `https://canadabiolabs.co/images/products/peptides/${filename}`,
  path: `public/images/products/peptides/${filename}`
}));

const allImages = [...mainImages, ...sliderImages, ...productImages];

function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, filePath).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        fs.unlink(filePath, () => {});
        return reject(new Error(`HTTP ${response.statusCode}`));
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Baixado: ${filePath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Iniciando download de imagens...\n');
  console.log(`Total de imagens: ${allImages.length}\n`);
  
  let success = 0;
  let failed = 0;
  
  for (let i = 0; i < allImages.length; i++) {
    const image = allImages[i];
    const dir = path.dirname(image.path);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    try {
      await downloadImage(image.url, image.path);
      success++;
    } catch (error) {
      console.error(`✗ Erro ao baixar ${image.path}:`, error.message);
      failed++;
    }
    
    // Pequeno delay para não sobrecarregar o servidor
    if (i < allImages.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  console.log(`\nDownload concluído!`);
  console.log(`Sucesso: ${success}`);
  console.log(`Falhas: ${failed}`);
}

downloadAll();
