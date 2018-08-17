
/***************
* By bear
* 
* sort() 方法用于对数组的元素进行排序,并返回数组。默认排序顺序是根据字符串Unicode码点。
* 语法：arrayObject.sort(sortby)；参数sortby可选。规定排序顺序。必须是函数。
* 注：如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

* 如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
* 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
* 若 a 等于 b，则返回 0。
* 若 a 大于 b，则返回一个大于 0 的值。
*
******************************/


//todo 简单的数组套着 - 对象 - 升序排列写法；
//var arr = [ {name:'zopp',age:0}, {name:'gpp',age:18}, {name:'yjj',age:8} ];

function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
//console.log(arr.sort(compare('age')))

//todo  经典写法：
//var arr = [{key1:"2",key2:"wang2"},{key1:"1",key2:"wang1"},{key1:"3",key2:"wang3"}];
var sortByAttributes=function(attr,rev){
    //第二个参数没有传递 默认升序排列
    if(rev ==  undefined){
        rev = 1;
    }else{
        rev = (rev) ? 1 : -1;
    }
    return function(a,b){
        a = a[attr];
        b = b[attr];
        if(a < b){
            return rev * -1;
        }
        if(a > b){
            return rev * 1;
        }
        return 0;
    }
}
// todo 使用
//arr.sort(sortByAttributes('key1',false)) // false :倒序，true : 正序，不传值的时候： 参数没有传递 默认升序排列；
