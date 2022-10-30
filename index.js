const fs = require('fs')
const path = require('path')
const glob = require('glob')
const yaml = require('yaml-front-matter')

const args = process.argv.slice(2)

glob(path.join(args[0], '**/*.md'), function (err, files) {
    if (err) throw err
    for (const file of files.sort()) {
        const contents = fs.readFileSync(file, {encoding: 'utf8'})
        const parsed = yaml.loadFront(contents)
        const text = parsed.__content
        let lines = text.split('\n')
        // remove english quotes
        lines = lines.filter(l => !l.replaceAll(/\s+/g, '').startsWith('>>'))
        // remove link blank attributes
        lines = lines.map(l => l.replaceAll('{:target="_blank"}', ''))
        console.log(`# ${parsed.title}\n\n\n${lines.join('\n')}\n\n\n`)
    }
})