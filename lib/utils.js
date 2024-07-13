export function reload(data,components, place) {
    place.innerHTML =""

    for(let item of data) {
        const comp = components(item)

        place.append(comp)
    }
}