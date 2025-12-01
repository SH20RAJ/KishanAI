const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const LOGO_PATH = path.join(PUBLIC_DIR, 'logo.png');

async function generateIcons() {
    if (!fs.existsSync(LOGO_PATH)) {
        console.error('Error: public/logo.png not found');
        process.exit(1);
    }

    console.log('Generating PWA icons from logo.png...');

    // 1. Generate icon-192x192.png
    await sharp(LOGO_PATH)
        .resize(192, 192)
        .toFile(path.join(PUBLIC_DIR, 'icon-192x192.png'));
    console.log('✓ Created icon-192x192.png');

    // 2. Generate icon-512x512.png
    await sharp(LOGO_PATH)
        .resize(512, 512)
        .toFile(path.join(PUBLIC_DIR, 'icon-512x512.png'));
    console.log('✓ Created icon-512x512.png');

    // 3. Generate apple-touch-icon.png (180x180)
    await sharp(LOGO_PATH)
        .resize(180, 180)
        .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
    console.log('✓ Created apple-touch-icon.png');

    // 4. Generate favicon.ico (32x32) - simple version
    // For a proper .ico with multiple sizes, we'd need a more complex approach or a specific library,
    // but sharp can output .ico or we can just make a 32x32 png and rename/use it, 
    // or strictly speaking sharp supports .ico in newer versions or we can use a 32x32 png as favicon.
    // However, standard practice often accepts png favicons. 
    // Let's try to make a 32x32 png and save as favicon.ico if sharp supports it, 
    // otherwise save as favicon.png and user can use that.
    // Actually, let's just make a 32x32 PNG and call it favicon.ico for simplicity if sharp allows, 
    // otherwise just favicon.png.
    // Sharp doesn't natively support writing .ico in all versions. 
    // Let's write favicon.png (32x32) and also try to write a basic .ico if possible, 
    // or just rely on the png.

    await sharp(LOGO_PATH)
        .resize(32, 32)
        .toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'));
    console.log('✓ Created favicon-32x32.png');

    // Create a simple favicon.ico by copying the 32x32 png (browsers are lenient) 
    // OR just use the png as the favicon in layout.tsx.
    // But user specifically asked for favicon.ico.
    // We'll try to use sharp to output to .ico if supported, else we'll just copy.
    try {
        await sharp(LOGO_PATH)
            .resize(32, 32)
            .toFormat('ico')
            .toFile(path.join(PUBLIC_DIR, 'favicon.ico'));
        console.log('✓ Created favicon.ico');
    } catch (e) {
        console.log('! Sharp might not support .ico directly, using png as favicon source.');
        // Fallback: just use the 32x32 png
        fs.copyFileSync(path.join(PUBLIC_DIR, 'favicon-32x32.png'), path.join(PUBLIC_DIR, 'favicon.ico'));
        console.log('✓ Created favicon.ico (fallback)');
    }
}

generateIcons().catch(console.error);
