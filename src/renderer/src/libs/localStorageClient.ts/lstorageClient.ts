type localStorageValue = {
    srawungToken: string,
}

type keyValue= {
    name: string,
    value: string | null
}

let defaultValue: localStorageValue = {
    srawungToken: ""
}

function find(name: string): string | null {
    return localStorage.getItem(name)
}

function insert(name: string, value: string | null ): void{
    if(value === null){
        value = ""
    }
    return localStorage.setItem(name, value)
}

function bulkInsert(values: keyValue[]): void{
    for(let i = 0 ; i < values.length; i++){
        insert(values[i].name, values[i].value)
    }
}

function findAll(): keyValue[]{
    let result: keyValue[] = []
    let temp = Object.keys(defaultValue)
    for(let i=0; i < temp.length; i++){
        let tempObj: keyValue = {name: temp[i], value: find(temp[i])}
        result.push(tempObj)
    }
    return result
}