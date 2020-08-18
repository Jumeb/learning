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

http://youtu.be/uKB2QYZ3h9U?hd=1