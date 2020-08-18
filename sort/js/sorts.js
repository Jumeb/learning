
//BUBBLE SORT

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

//INSERTION SORT

insertionSort = (list, asend) => {
    for (len = 1; len < list.length; len++){
        if(asend){
            temp = list[len];
            adj = len-1;
            while(adj >= 0 && list[adj] > temp){
                list[adj + 1] = list[adj];
                adj = adj - 1;
            }
            list[adj + 1] = temp;
        } else {
            temp = list[len];
            adj = len-1;
            while(adj >= 0 && list[adj] < temp){
                list[adj + 1] = list[adj];
                adj = adj - 1;
            }
            list[adj + 1] = temp;
        }
    }

    return list;
}


// SELECTION SORT

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

    return list
}
