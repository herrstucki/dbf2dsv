var test = require('tape'),
    tmp = require('tmp'),
    child = require('child_process'),
    fs = require('fs')

test('latin1', function(t) {
  t.plan(1)

  var output = tmp.fileSync()

  options = ["-o", output.name, "node_modules/shapefile/test/latin1-property.dbf"]
  child.execFile("bin/dbf2dsv", options, function(error, stdout, stderr) {
    var data = fs.readFileSync(output.name, {encoding: "utf-8"})
    t.equals(data, "name\nMéxico")
  })

  output.removeCallback()
})

test('utf8', function(t) {
  t.plan(1)

  var output = tmp.fileSync()

  options = ["-o", output.name, "-e", "utf8", "node_modules/shapefile/test/utf8-property.dbf"]
  child.execFile("bin/dbf2dsv", options, function(error, stdout, stderr) {
    var data = fs.readFileSync(output.name, {encoding: "utf-8"})
    t.equals(data, "☃\nηελλο ςορλδ")
  })

  output.removeCallback()
})
