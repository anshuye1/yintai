window.onload=function(){
    var banner=$('.banner')[0];
	var box=getcall("banbox",banner)[0];//获取box单个
	var lists=getcall("list",box)[0];
	var im=lists.getElementsByTagName('a');//获取box下的a标签
	var listbtns=getcall('listbtn',box)[0];
	var lis=listbtns.getElementsByTagName('li');
	var btns=getcall("btn",box)[0];
	var lefts=getcall('left',btns)[0];
	var rights=getcall('right',btns)[0];
	var index=0;//定义index为0

	im[0].style.zIndex=10;//设置图片1的层级为10
	lis[0].style.background='red'

	function move(){
		index++;//index++
		if(index==4){index=0}//当index为4；把0赋给index
		for (var i = 0; i < im.length; i++) {
			im[i].style.zIndex=0;//将im的层级清零
		};
		im[index].style.zIndex=10;//当前的index层级调高为10
		for (var j = 0; j< lis.length; j++) {
			lis[j].style.background='#000';
		}
		lis[index].style.background='red';
	}

	var t=setInterval(move,2000);

	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,2000);
	}
    
    for (var i = 0; i < lis.length; i++) {
	    lis[i].index=i;
	  lis[i].onclick=function(){
		for (var j = 0; j < im.length; j++) {
			im[j].style.zIndex=0;
			lis[j].style.background='#000'
		};
		im[this.index].style.zIndex=10;
		lis[this.index].style.background='red';
		index=this.index;
      }
	};
    //左按钮
    lefts.onclick=function(){
    	index--;
    	if (index<0) {index=3};
    	im[index].index=index;
    	for (var j = im.length-1; j >= 0; j--) {
    		im[j].style.zIndex=0;
    	};
    	im[index].style.zIndex=10;
    	for (var k = im.length - 1; k >= 0; k--) {
    		lis[k].style.background='#000';
    	};
    		lis[index].style.background='red';
    }
    //右按钮
    rights.onclick=function(){
    move()}
    //按钮隐藏
    btns.style.display='none'
    box.onmouseover=function(){
    btns.style.display='block';
        box.onmouseout=function(){
            btns.style.display='none'
        }
    }
    //按钮颜色
    lefts.onmouseover=function(){
        lefts.style.background='red'
    }
    lefts.onmouseout=function(){
        lefts.style.background='#000'
    }
    rights.onmouseover=function(){
        rights.style.background='red'
    }
    rights.onmouseout=function(){
        rights.style.background='#000'
    }


    //全部商品介绍
    var bannertu1=$('.bannertu1')[0];
    // var mp=$('.mp',bannertu1);
    // for (var i = 0; i < mp.length; i++) {
    //     bannertu(mp[i])
    // };


    // function bannertu(mp){
    // var mpa=$('a',mp)[0];
    // var mpf=$('.mpf',mp)[0];     
    // hover(mp,function(){
    //      mpf.style.opacity=0.8;
    //      mpa.style.background='#e5004f';
    //      mpf.style.display='block';
    // },function(){
    //     mpf.style.opacity=0;
    //     mpa.style.background='';
    //     mpf.style.display='none';
    // })};

    //图标
    var mpi=$('.mp',bannertu1);
    var f1=$('.f1',mpi[0])[0]; 
    var f2=$('.f2',mpi[1])[0]; 
    var f3=$('.f3',mpi[2])[0]; 
    var f4=$('.f4',mpi[3])[0]; 
    var f5=$('.f5',mpi[4])[0]; 
    var f6=$('.f6',mpi[5])[0]; 
    var f7=$('.f7',mpi[6])[0]; 
    var f8=$('.f8',mpi[7])[0]; 
    var f9=$('.f9',mpi[8])[0]; 
    var f10=$('.f10',mpi[9])[0]; 

    hover(mpi[0],function(){
        f1.style.backgroundPosition='247px 19px';
        $('.mpa')[0].style.background='#e5004f';
        $('.mpf')[0].style.display='block';
    },function(){
        f1.style.backgroundPosition='247px 37px';
        $('.mpa')[0].style.background='';
        $('.mpf')[0].style.display='none';
    })
    hover(mpi[1],function(){
        f2.style.backgroundPosition='230px 19px';
        $('.mpa')[1].style.background='#e5004f';
        $('.mpf')[1].style.display='block';
    },function(){
        f2.style.backgroundPosition='230px 37px';
        $('.mpa')[1].style.background='';
        $('.mpf')[1].style.display='none';
    })
    hover(mpi[2],function(){
        f3.style.backgroundPosition='213px 19px';
        $('.mpa')[2].style.background='#e5004f';
        $('.mpf')[2].style.display='block';
    },function(){
        f3.style.backgroundPosition='213px 37px';
        $('.mpa')[2].style.background='';
        $('.mpf')[2].style.display='none';
    })
    hover(mpi[3],function(){
        f4.style.backgroundPosition='196px 18px';
        $('.mpa')[3].style.background='#e5004f';
        $('.mpf')[3].style.display='block';
    },function(){
        f4.style.backgroundPosition='196px 37px';
        $('.mpa')[3].style.background='';
        $('.mpf')[3].style.display='none';
    })
    hover(mpi[4],function(){
        f5.style.backgroundPosition='179px 18px';
        $('.mpa')[4].style.background='#e5004f';
        $('.mpf')[4].style.display='block';
    },function(){
        f5.style.backgroundPosition='179px 37px';
        $('.mpa')[4].style.background='';
        $('.mpf')[4].style.display='none';
    })
    hover(mpi[5],function(){
        f6.style.backgroundPosition='162px 18px';
        $('.mpa')[5].style.background='#e5004f';
        $('.mpf')[5].style.display='block';
    },function(){
        f6.style.backgroundPosition='162px 37px';
        $('.mpa')[5].style.background='';
        $('.mpf')[5].style.display='none';
    })
    hover(mpi[6],function(){
        f7.style.backgroundPosition='145px 18px';
        $('.mpa')[6].style.background='#e5004f';
        $('.mpf')[6].style.display='block';
    },function(){
        f7.style.backgroundPosition='145px 37px';
        $('.mpa')[6].style.background='';
        $('.mpf')[6].style.display='none';
    })
    hover(mpi[7],function(){
        f8.style.backgroundPosition='128px 18px';
        $('.mpa')[7].style.background='#e5004f';
        $('.mpf')[7].style.display='block';
    },function(){
        f8.style.backgroundPosition='128px 37px';
        $('.mpa')[7].style.background='';
        $('.mpf')[7].style.display='none';
    })
    hover(mpi[8],function(){
        f9.style.backgroundPosition='111px 18px';
        $('.mpa')[8].style.background='#e5004f';
        $('.mpf')[8].style.display='block';
    },function(){
        f9.style.backgroundPosition='111px 37px';
        $('.mpa')[8].style.background='';
        $('.mpf')[8].style.display='none';
    })
    hover(mpi[9],function(){
        f10.style.backgroundPosition='93px 18px';
        $('.mpa')[9].style.background='#e5004f';
        $('.mpf')[9].style.display='block';
    },function(){
        f10.style.backgroundPosition='93px 37px';
        $('.mpa')[9].style.background='';
        $('.mpf')[9].style.display='none';
    })





    //选项卡1
    var neirong=$('.neirong')[0];
    var nrbox=getcall('nrbox',neirong)[0];
    var nrboxs=nrbox.getElementsByTagName('a');
    var nrbox1=getcall('nrbox1',neirong);
    var nrbox0=getcall('nrbox0',neirong)[0];
    var nrbox2=getcall('a1',neirong);
    var nrbox3=getcall('a2',neirong);

    nrbox1[0].style.zIndex=10;
    nrboxs[0].style.fontWeight='bold';
    nrbox2[1].style.display='none';
    nrbox2[2].style.display='none';
    nrbox3[0].style.background='red';
    
    for (var i = 0; i < nrboxs.length; i++) {
    	nrboxs[i].index=i;
    		nrboxs[i].onmousemove=function(){
    			for (var j = 0; j < nrbox1.length; j++) {
    				nrbox1[j].style.zIndex=0;
    				nrboxs[j].style.fontWeight='';
    				nrbox2[j].style.display='none';
    				nrbox3[j].style.background='#000';
    			};
    		nrbox1[this.index].style.zIndex=10;
    		nrboxs[this.index].style.fontWeight='bold';
    		nrbox2[this.index].style.display='block';
    		nrbox3[this.index].style.background='red';
    		}
    };

  
   
//专柜选项卡
    var zgbox=getcall('zgbox',document)[0];
    var zgboxs=zgbox.getElementsByTagName('a');
    var zgbox1=getcall('zgbox1',document);
    zgbox1[1].style.display='none';

    for (var i = 0; i < zgboxs.length; i++) {
        zgboxs[i].index=i;
        zgboxs[i].onmousemove=function (){
           for (var j = 0; j < zgbox1.length; j++) {
             zgbox1[j].style.display='none';
             zgboxs[j].style.fontWeight='normal';
           };
             zgbox1[this.index].style.display='block';
             zgboxs[this.index].style.fontWeight='bold'
        }
    };
    //专柜边框线
    var zgbox11=$('.zgbox1-1')[0];
    function zgkk(i){
    var zgbkbox=$('.zgbkbox',zgbox11)[i];
    var zgkt=$('.zgkt',zgbkbox)[0];
    var zgkl=$('.zgkl',zgbkbox)[0];
    var zgkr=$('.zgkr',zgbkbox)[0];
    var zgkb=$('.zgkb',zgbkbox)[0];

    zgbkbox.onmouseover=function(){
        animate(zgkt,{width:200},500)
        animate(zgkl,{height:250},500)
        animate(zgkr,{height:250},500)
        animate(zgkb,{width:200},500)
    }
    zgbkbox.onmouseout=function(){
        animate(zgkt,{width:0},500)
        animate(zgkl,{height:0},500)
        animate(zgkr,{height:0},500)
        animate(zgkb,{width:0},500)
    }
    }
    for (var i = 0; i < 8; i++) {
        zgkk(i)
    };
    




//时尚选项卡

    function ssfz(box){
    var ssimgbox=getcall('ssimgbox',box)[0];
    var shishang1=ssimgbox.getElementsByTagName('a');
    var ssbtn=getcall('sslr',box)[0];
    var ssbtns=ssbtn.getElementsByTagName('div');   
    var ssyd=getcall('ssyd',box)[0];
    var ssyds=ssyd.getElementsByTagName('div');
    var imw=parseInt(getstyle(shishang1[0],'width'));
    ssimgbox.style.width=imw*shishang1.length-1+'px';
    ssyds[0].style.background='#e5175e'

    for (var i = 0; i < ssbtns.length; i++) {
        ssbtns[i].index=i;
        ssbtns[i].onclick=function(){
        animate(ssimgbox,{left:-imw*this.index},400)
        for (var k = 0; k < ssyds.length; k++) {
            ssyds[k].style.background='#6e6e6e'
        };
            ssyds[this.index].style.background='#e5175e'
        };
    };
    for (var l = 0; l < ssyds.length; l++) {
        ssyds[l].index=l;
        ssyds[l].onclick=function(){
            animate(ssimgbox,{left:-imw*this.index},400)
            for (var j = 0; j < shishang1.length; j++) {
                ssyds[j].style.background='#6e6e6e'
            };
            ssyds[this.index].style.background='#e5175e'
        }
    };

    ssbtn.style.display='none'
    box.onmouseover=function(){
    ssbtn.style.display='block';
    box.onmouseout=function(){
            ssbtn.style.display='none'
        }
    }
    }
   
    var ss3=getcall('ss1-3',document);
        ssfz(ss3[0])
        for (var i = 3; i < 8; i++) {
        ssfz(ss3[i])
        };
 
  


    
    //边框线
    var shishangxx=$('.shishang1-1')
    for (var i = 0; i < shishangxx.length; i++) {
        shishangbor(shishangxx,i)
    };
    function shishangbor(shishangi,i){
    var simgbox1=$('.simgbox',shishangi[i])[0];
    var simgbox2=$('.simgbox2',shishangi[i])[0];
    var simgbox3=$('.simgbox3',shishangi[i])[0];
    var simgbox4=$('.simgbox4',shishangi[i])[0];
    function bor(simgbox){
    var bt=$('.bt',simgbox)[0];
    var bl=$('.bl',simgbox)[0];
    var br=$('.br',simgbox)[0];
    var bb=$('.bb',simgbox)[0];

    simgbox.onmouseover=function(){
        animate(bt,{width:270},500)
        animate(bl,{height:180},500)
        animate(br,{height:180},500)
        animate(bb,{width:270},500)
    }
    simgbox.onmouseout=function(){
        animate(bt,{width:0},500)
        animate(bl,{height:0},500)
        animate(br,{height:0},500)
        animate(bb,{width:0},500)
    }
    }
    bor(simgbox1)
    bor(simgbox2)
    bor(simgbox3)
    bor(simgbox4)
    }

    //时尚名品无缝轮播
    var shishang3=$('.shishang1-2');
    for (var i = 0; i < shishang3.length; i++) {
        wffz(shishang3,i)
    };

    function wffz(shishang2,i){
    var wflb=$('.wflb',shishang2[i])[0];
    var shishangd2=$('.shishangd2',shishang2[i]);
    var wfbtn=$('.btn',shishang2[i])[0];
    var wfim=parseInt(getstyle(shishangd2[0],'width'));
    var wfl=$('.btnl',wfbtn)[0];
    var wfr=$('.btnr',wfbtn)[0];
    var indexs=0;
    var next=0;
    shishangd2[indexs].style.left=0;

    wfr.onclick=function(){
        next++;
        if (next==3) {next=0};
        shishangd2[next].style.left=wfim+'px';
        animate(shishangd2[indexs],{left:-wfim},500);
        animate(shishangd2[next],{left:0},500);
        indexs=next;
    }   
    wfl.onclick=function(){
        next--;
        if (next==-1) {next=2};
        shishangd2[next].style.left=-wfim+'px';
        animate(shishangd2[indexs],{left:wfim},500);
        animate(shishangd2[next],{left:0},500);
        indexs=next;
    } 
    }



    //侧栏与滚动条
    var celan=$('.celan')[0];
    var celans1=$('div',celan);
    var celans=$('a',celan);
    var boxc=$('.shishang1');
    var arrc=[];
    var flagc=true;
    var stop;
    var flagss=[];
    var ch=document.documentElement.clientHeight;
    for (var i = 0; i < boxc.length; i++) {
        arrc.push(boxc[i].offsetTop);
        flagss.push(true)
    }
   

//预加载

    
window.onscroll=function(){
    stop=document.body.scrollTop||document.documentElement.scrollTop;
    //预加载
    for (var i = 0; i < arrc.length; i++) {
        if(arrc[i]<=stop+ch&&flagss[i]){
            flagss[i]=false;
            var imgss=$('img',boxc[i]);
            for (var j = 0; j < imgss.length; j++) {
            imgss[j].src=imgss[j].getAttribute('asrc');   
            };
        }
    };

         //出现侧栏
        if(700<stop){
            if(flagc){
            flagc=false;
            animate(celan,{top:20},500)}
        }else{
            if(!flagc)//双重判断
                flagc=true;
            animate(celan,{top:-600},500)
        };
        //走哪哪亮
        for (var i = 0; i < arrc.length; i++) {
            if (arrc[i]<stop+150) {
                for (var j = 0; j < celans.length; j++) {
                    celans1[j].style.opacity=0;
                };
            celans1[i].style.opacity=1;
            celans1[i].style.background='#a50000';
        };
        
        //按钮功能
        celans[9].onclick=function(){
            animate(document.body,{scrollTop:0},1000);
            animate(document.documentElement,{scrollTop:0},1000);
        }
    for (var m = 0; m < celans.length-1; m++) {
            celans[m].index=m;
            celans[m].onclick=function(){
            document.body.scrollTop=arrc[this.index];
            document.documentElement.scrollTop=arrc[this.index]            
            }
        };          
    for (var n = 0; n < celans1.length; n++) {
        celans1[n].index=n;
     celans1[n].onmouseover=function(){
            celans1[this.index].style.opacity=1;
            celans1[this.index].style.background='#a50000';
    };
     celans1[n].onmouseout=function(){
            celans1[this.index].style.opacity=0;
        }
}   
}



}
    
//内容边框线

    function  nr(a,i){
    var nrbg=$('.nrbg',a)[i];    
    var bg1=$('.bg1',nrbg);
    var bg2=$('.bg2',nrbg);
    var bg3=$('.bg3',nrbg);
    var bg4=$('.bg4',nrbg);

    nrbg.onmouseover=function(){
        animate(bg1[0],{width:218},500)
        animate(bg2[0],{height:258},500)
        animate(bg3[0],{width:218},500)
        animate(bg4[0],{height:258},500)
    }
    nrbg.onmouseout=function(){
        animate(bg1[0],{width:0},500)
        animate(bg2[0],{height:0},500)
        animate(bg3[0],{width:0},500)
        animate(bg4[0],{height:0},500)
    }
    }
    for (var i = 0; i < 5; i++) {
             for (var j = 0; j <4; j++) {
                nr(nrbox1[i],j)
             }
        };
    

//二维码
     var daobox=$('.daobox')[0];
     var weixin=$('.weixin')[0];
     var weixin1=$('.weixin1')[0];
     var weixin2=$('.weixin3')[0];

     hover(daobox,function(){
        weixin2.style.display='block';
        weixin1.style.color="red";
        weixin.style.backgroundPosition='267px 58px';
     },function(){
        weixin2.style.display='none';
        weixin1.style.color="";
        weixin.style.backgroundPosition='267px 88px';
     })

     var daobox1=$('.daobox')[1];
     var shouji=$('.shouji')[0];
     var shouji1=$('.shouji1')[0];
     var weixin3=$('.weixin2')[0];

     hover(daobox1,function(){
        weixin3.style.display='block';
        shouji1.style.color="red";
        shouji.style.backgroundPosition='0 -27px';
     },function(){
        weixin3.style.display='none';
        shouji1.style.color="";
        shouji.style.backgroundPosition='0 0';
     })

     //我的银泰

     var wd1=$(".wd1")[0];
     var wda=$('.wd2',wd1);

     hover(wd1,function(){
        for (var i = 0; i < wda.length; i++) {
            wda[i].style.display='block';
            wd1.style.background="#fff"
        };
     },function(){
        for (var i = 0; i <wda.length; i++) {
            wda[i].style.display='none';
            wd1.style.background="";
        };
     })
     //银泰首页
     var daobox1=$('.daobox1')[0];
     var daoboxa=$('a',daobox1);

     hover(daobox1,function(){
        daoboxa[0].style.backgroundPosition='267px 119px';
        daoboxa[1].style.color='red';
     },function(){
        daoboxa[0].style.backgroundPosition='267px 146px';
        daoboxa[1].style.color='';
     })
}
