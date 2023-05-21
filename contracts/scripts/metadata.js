const fs = require('fs')

const BASE_URI = 'https://example.com'

const outputDir = `metadata/`
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
} else {
  fs.rmdir(`metadata/`, () => {})
}

for (let i = 1; i <= 50; i++) {

  let data = {
    title: 'Soul-bound token',
    image_url: `${BASE_URI}/${i}.png`,
    properties: {
      token_id: i,
    },
  }
  const output = JSON.stringify(data)

  fs.writeFile(outputDir + i + '.json', output, (err) => {
    if (err) throw err
    console.log(`File ${i} has been saved!`)
  })
}
