fs = require('fs')

const subdirectories = ['portfolio', 'recipes']
const getVarName = (file) => file.replace(/[-.]/g, '')

for (let dir of subdirectories) {
  fs.readdir(`./pages/${dir}`, (err, files) => {
    const imports = files.map(file => {
      return `
        const ${getVarName(file)} = require('../pages/${dir}/${file}').meta
        ${getVarName(file)}.slug = "${file.replace('.mdx', '')}"
      `
    }).join('')
    const exports = `\nexport const ${dir} = [${files.map(getVarName).join(',')}]`
    fs.writeFileSync(`${__dirname}/${dir}-meta.js`, imports+exports)
  })
}