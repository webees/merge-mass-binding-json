const fs = require('fs')

const src = "src"
const jsonList = fs.readdirSync(src)

var merge = {
  plots: [],
  total_count: 0,
  default_count: 0,
  chia_count: 0
}
for (const v of jsonList) {
  const data = fs.readFileSync(src+"/"+v)
  const json = JSON.parse(data)
  merge.plots = merge.plots.concat(json.plots)
  merge.total_count = merge.total_count + json.total_count
  merge.chia_count = merge.chia_count + json.chia_count
}

fs.writeFileSync('./dist/mass.json', JSON.stringify(merge))
