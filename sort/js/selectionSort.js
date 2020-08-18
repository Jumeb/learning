selectionSort = (list, asend) => {
    for (len = 0; len < list.length - 1; len++){
        for(adj = len+1; adj < list.length; adj++){
            if(asend){
                if(list[len] > list[adj]){
                    temp = list[len];
                    list[len] = list[adj];
                    list[adj] = temp;
                }
            }else {
                if(list[len] < list[adj]){
                    temp = list[len];
                    list[len] = list[adj];
                    list[adj] = temp;
                }
            }
        }
    }

    return list;
}
