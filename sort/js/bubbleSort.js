bubbleSort = (list, asend) => {
    for(len = 0; len < list.length - 1; len++) {
        for(adj = 0; adj < list.length - len - 1; adj++){
            if(asend){
                if(list[adj] > list[adj+1]){
                    temp = list[adj+1];
                    list[adj+1] = list[adj];
                    list[adj] = temp;
                }
            } else {
                if(list[adj] < list[adj+1]){
                    temp = list[adj+1];
                    list[adj+1] = list[adj];
                    list[adj] = temp;
                }
            }
        }
    }
    return list;
}
