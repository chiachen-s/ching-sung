import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'

const input = './public/logo.jpg'
const output = './public/logo.png'

// 讀取圖片，轉成 raw RGBA
const image = sharp(input)
const { data, info } = await image
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
const pixels = new Uint8Array(data)

// 白色背景去除：R,G,B 都接近 255 就設為透明
const threshold = 240 // 越高越嚴格（只去純白），越低去更多淺色

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i]
  const g = pixels[i + 1]
  const b = pixels[i + 2]

  if (r >= threshold && g >= threshold && b >= threshold) {
    pixels[i + 3] = 0 // 設為全透明
  }
}

// 輸出 PNG（保留透明度）
await sharp(Buffer.from(pixels), {
  raw: { width, height, channels },
})
  .png()
  .toFile(output)

console.log(`✅ 去背完成：${output}`)
