const { createCanvas } = require('canvas');
const fs = require('fs');

function drawChef(ctx, size) {
  const s = size / 32;
  ctx.fillStyle = '#FFF9EE';
  ctx.fillRect(0, 0, size, size);

  // Toque
  ctx.fillStyle = '#fff';
  ctx.fillRect(10*s, 2*s, 12*s, 5*s);
  ctx.fillRect(9*s, 6*s, 14*s, 2*s);
  // Head
  ctx.fillStyle = '#FFD6A0';
  ctx.fillRect(9*s, 8*s, 14*s, 8*s);
  // Eyes
  ctx.fillStyle = '#333';
  ctx.fillRect(11*s, 10*s, 3*s, 2*s);
  ctx.fillRect(18*s, 10*s, 3*s, 2*s);
  // Mustache
  ctx.fillStyle = '#8B5E3C';
  ctx.fillRect(13*s, 13*s, 2*s, 1*s);
  ctx.fillRect(17*s, 13*s, 2*s, 1*s);
  // Mouth
  ctx.fillStyle = '#E88';
  ctx.fillRect(14*s, 14*s, 4*s, 1*s);
  // Neckerchief
  ctx.fillStyle = '#D32F2F';
  ctx.fillRect(12*s, 16*s, 8*s, 2*s);
  ctx.fillRect(14*s, 17*s, 4*s, 2*s);
  // Body
  ctx.fillStyle = '#fff';
  ctx.fillRect(8*s, 18*s, 16*s, 10*s);
  // Buttons
  ctx.fillStyle = '#FFD700';
  ctx.fillRect(15*s, 20*s, 2*s, 2*s);
  ctx.fillRect(15*s, 24*s, 2*s, 2*s);
  // Legs
  ctx.fillStyle = '#333';
  ctx.fillRect(10*s, 28*s, 5*s, 2*s);
  ctx.fillRect(17*s, 28*s, 5*s, 2*s);
  // Shoes
  ctx.fillStyle = '#222';
  ctx.fillRect(9*s, 30*s, 6*s, 2*s);
  ctx.fillRect(17*s, 30*s, 6*s, 2*s);
}

[192, 512].forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  drawChef(ctx, size);
  fs.writeFileSync(`public/icon-${size}.png`, canvas.toBuffer('image/png'));
  console.log(`Created icon-${size}.png`);
});
