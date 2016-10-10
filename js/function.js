function getcall(classname,fw){
  if (document.getElementsByClassName){//如果有clname属性
    return fw.getElementsByClassName(classname);//返回clname函数
  }else{//否则
    var tag=fw.getElementsByTagName('*');//将其所有标签遍历出来赋给tag
    var b=[];//为空数组
    for (var i = 0; i < tag.length; i++) {//将所有标签遍历出来
      function bb(arr,classmanes){
                var aa=arr.split(' ')
                for (var i = 0; i < aa.length; i++) {
                    if(aa[i]==classmanes){
                      return true;
                    }else{
                      return false;
                    }
                }              
            } 
      if (bb(tag[i].className,classname)) {//如果函数bb返回值为真 
                 b.push(tag[i]);//把标签放到数组b中
               }
            }
            return b;
    }
}
//获取
function getstyle(obj,sty){
  if (obj.currentStyle) {
    return obj.currentStyle[sty];
  }else{
    return getComputedStyle(obj,null)[sty];
  }
    }

function $(selector,fw){
  if (typeof selector=='string') {
    var fw=fw||document;
      if (selector.charAt(0)=='#') {
        return document.getElementById(selector.substr(1))
      }
      if(selector.charAt(0)=='.'){
        return getcall(selector.substr(1),fw);
      }
      if(/^[a-zA-z][a-zA-z1-6]{0,9}$/.test(selector)){
        return fw.getElementsByTagName(selector)
      }
    }else if(typeof selector=='function'){
      window.onload=selector;
    }
}