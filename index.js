function superbowlWin(record) {
    let find = record.find(finder => finder.result === "W")
    if(!!find){
        return find.year
    }
    else {
        return undefined
    }
    //console.log(find)

   
}