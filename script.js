console.log('greetings from script.js');
var datax ='xman';
let originalObj = { "Id": "001Hu000030b2xMIAQ", "Name": "United Oil & Gas, Singapore","Phone":"93485666","OwnerId": "005Hu00000OYaxhIAD","AnnualRevenue": 1000 ,function(){console.log('hi')} }
let map1 = new Map();

function getDataAttributes(event){ 
    console.log(window.event.currentTarget.dataset.id);
    var xdata = document.querySelector(`[data-id="${datax}"]`);
    xdata.className ='show';
console.log(xdata); 
    console.log(Object.entries(originalObj));
    Object.entries(originalObj).forEach( function(each){
            map1.set(each[0],each[1]);
    })
    console.log(map1);
};

