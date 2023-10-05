const arr: number[] = [1,4,2,5,-2,3]

function bblsort (array: number[]){
    array.forEach((v : number, index: number) =>{
        if(v > array[index + 1]){
            const aux = array[index]
            array[index] = array[index + 1]
            array[index + 1] = aux
            return bblsort(array)
        }
    })
}

bblsort(arr)
console.log(arr)