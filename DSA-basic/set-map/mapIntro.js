let map = new Map()
map.set("k1", "v1")
map.set("k2", "v2")
map.set("k3", "v3")
map.set("k4", "v4")
console.log(map)

for (let item of map.entries()) {
    console.log(item)
}

for (let key of map.keys()) {
    console.log(key)
}

for (let val of map.values()) {
    console.log(val)
}

map.forEach((key, val) => {
    console.log(key+":"+val)
})
    


map.delete("k3")

console.log(map.has("k2"))



console.log(map)