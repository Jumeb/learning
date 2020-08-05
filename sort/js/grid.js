

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


var myAppendGrid = new AppendGrid({
    element: "arr",
    uiFramework: "bootstrap4",
    columns: [
    {
        name: "val",
        display: "List",
        type: "number",
        ctrlAttr: {required: "required"}            
    }
    ],
    hideButtons: {
        moveUp: true,
        moveDown: true
    },
    sizing: "small",
    hideRowNumColumn: false
});


//


sortChoice = () => {
    let sorts = document.querySelectorAll("input[name='Sort']");
    for (let sort of sorts){
        if(sort.checked){
            selectedSort = sort.value;
            break;
        }
    }

    return selectedSort.toString();
}

displayList = (list) => {
    data = document.getElementById("filList").innerHTML = "";
    data = document.getElementById("filList");
    for (let i = 0; i < list.length; i++){
        var node = document.createElement("tr");
        var childNode = document.createElement("td");
        var textnode = document.createTextNode(list[i]);
        childNode.appendChild(textnode);
        node.appendChild(childNode);
        data.appendChild(node);
    }
  }

//

orderChoice = () => {
    let orders = document.querySelectorAll('input[name="order"]');
    for (let order of orders){
        if(order.checked){
            selectedOrder = order.value;
            if (selectedOrder.toString() == 'asend') {
                ascend = true;
                document.getElementById('order').innerHTML = 'Ascending Order';
            }else {
                ascend = false;
                document.getElementById('order').innerHTML = 'Descending Order';
            }
            break;
        }
    }

    return ascend;
}

document.getElementById("compute").addEventListener("click", () => {
    myAppendGrid.removeEmptyRows();
    var data = myAppendGrid.getAllValue();
    selectedSort = sortChoice();
    ascend = orderChoice();
    let unorderedList = [];
    let orderedList = [];
    let values = 0;
    for(values = 0; values <= data.length - 1; values++){
        unorderedList[values] = Number(data[values].val);
    }
    if (selectedSort == 'bbSort') {
        orderedList = bubbleSort(unorderedList, ascend);
        document.getElementById('sort').innerHTML = 'Bubble Sort';
    } else if (selectedSort == 'slcSort') {
        orderedList = selectionSort(unorderedList, ascend);
        document.getElementById('sort').innerHTML = 'Selection Sort';
    } else {
        orderedList = insertionSort(unorderedList, ascend);
        document.getElementById('sort').innerHTML = 'Insertion Sort';
    }
    // $('#filList').html(orderedList);  
    displayList(orderedList);
    // console.log()
});


