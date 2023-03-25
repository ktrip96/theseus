let path = '/student?'

let second = path.indexOf('/', 1)
if (second === -1) console.log(path.substring(1, path.length))
else {
	console.log(path.substring(1, second))
}
