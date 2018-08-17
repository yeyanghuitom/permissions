// JavaScript Document


function coolWeiPlayer(list){

    var play_mode = "order"; //取值：order: 顺序播放, single: 单曲播放, rand: 随机播放
    var loop_mode = "list"; //取值: list: 列表循环, single: 单曲循环, none: 不循环
	$.jPlayer.timeFormat.showHour = true;
	$("#player").jPlayer({
		ready:function (event){
			console.log("进入ready！");
            $("#list").get(0).selectedIndex = 0;

			$("#list").trigger("change");
			console.log("进入ready——执行完毕");
		},
		play:function(event)
		{
			$(".song-name").html(event.jPlayer.status.media.title);
			var id = event.jPlayer.status.media.id;
			if(id!="undefined")
			{
				//$("#download").attr("target","_blank");
				//$("#download").attr("href",$("#list").find("option:selected").val());
			}
			else
			{
				//$("#download").attr("target","");
				//$("#download").attr("href","#");
				return false;
			}
		},
		ended:function(event)
		{
			$(".song-name").html("播放完毕");
			if(play_mode=="single" && loop_mode=="single")
			{
				var index = $("#list").get(0).selectedIndex;
				$("#list").get(0).selectedIndex=index;
				$("#list").trigger("change");
			}
			else if(play_mode=="rand")
			{
				var max = document.getElementById("list").options.length;
				var targetIndex = GetRandomNum(0,max);
				$("#list").get(0).selectedIndex=targetIndex;
				$("#list").trigger("change");
			}else if(play_mode=="order"){
				
				var list  =$("#list").find("option:selected").attr("downloadid"),max = document.getElementById("list").options.length;
				 /*if(Number(list) == 1){
					console.log("进入1");
					$("#list").get(0).selectedIndex= 0 ;
					$("#list").trigger("change");
				}else */if( Number(list) < max-1 ){
					
					console.log("进入 != 1");
					$("#list").get(0).selectedIndex= Number(list)+1 ;
					$("#list").trigger("change");
				}
			}
			$(".song-name").html("播放完毕-（欢迎使用CoolWei!）");
		},
		timeupdate:function(event)
		{
			var percent = (event.jPlayer.status.currentTime / event.jPlayer.status.duration) *100;
			$(".seek-bar").css("width",percent + "%");
			$("#duration").html($.jPlayer.convertTime(event.jPlayer.status.duration));

		},
		supplied:"m4a",
		swfPath:"scripts",
		wmode:"window",
		loop:false,
		volume:1,
		cssSelectorAncestor: "",
		cssSelector:{
			currentTime:"#playtime",
			duration:"#totaltime",
			seekBar:".download-bar",

			playBar:".seek-bar",
			play: ".play",
			pause: ".pause",
			mute: ".mute",
			unmute: ".unmute",
			volumeBar: "#volumn",
			volumeBarValue: ".volumn-bar"
		}
	});

	//绑定停止按钮
	$(".btn-stop").click(function(){
		$("#playing-state").html("播放停止");
		$("#playing-songname").html("欢迎使用CoolWei!");
		//$("#player").jPlayer("clearMedia");
		$("#player").jPlayer("stop");
                return false;
	});

	//绑定列表选择事件
	$("#list").change(function(){
		var url = $("#list").find("option:selected").val();
		var songname = $("#list").find("option:selected").text();
		var id = $("#list").find("option:selected").attr("downloadid");
		$("#player").jPlayer("setMedia",{title:songname,m4a:url,id:id}).jPlayer("play");
	});

	//绑定上一曲，下一曲事件
	$(".pre,.next").click(function(){
		var targetIndex = -1;
		var index = $("#list").get(0).selectedIndex;
		var mode = null;
		var state = $("#playing-state").html();
	    /*
        if(state=="播放完毕")
		{
			mode = "rand";
		}
		else
		{
			mode = play_mode;
		}
        */
        mode = play_mode;
		switch(mode)
		{
			//随机播放
			case "rand":
			{
				var max = document.getElementById("list").options.length;
				if(loop_mode=="single")
				{
					//单曲循环模式,
					targetIndex=index;
				}
				else
				{
					//targetIndex = GetRandomNum(0,max);
					if(this.className=="pre mode-bg")
					{
						if(index==0)
						{
							targetIndex==document.getElementById("list").options.length-1;
						}
						else
						{
							targetIndex=index-1;
						}
					}
					else if(this.className=="next mode-bg")
					{
						if(index==document.getElementById("list").options.length-1)
						{
							targetIndex=0;
						}
						else
						{
							targetIndex=index+1;
						}
					}
				}
				break;
			}
			//单曲循环
			case "single":
			{
				if(this.className=="pre mode-bg")
				{
					if(index==0)
					{
						targetIndex=document.getElementById("list").options.length-1;
					}
					else
					{
						targetIndex=index-1;
					}
				}
				else if(this.className=="next mode-bg")
				{
					if(index==document.getElementById("list").options.length-1)
					{
						targetIndex=0;
					}
					else
					{
						targetIndex=index+1;
					}
				}
				break;
			}
			//顺序播放
			case "order":
			{
				if(loop_mode=="single")
				{
					//单曲循环模式,
					targetIndex=index;
				}
				else
				{
					if(this.className=="pre mode-bg")
					{

						if(index==0)
						{
							if(loop_mode=="list")
							{
								targetIndex = document.getElementById("list").options.length-1;
							}
							else if(loop_mode=="none")
							{
								$(".btn-stop").trigger("click");
							}
						}
						else
						{
							targetIndex = index - 1;
						}
					}
					else if(this.className=="next mode-bg")
					{
						//已经达到最后一个id
						if(index==document.getElementById("list").options.length-1)
						{
							if(loop_mode=="list")
							{
								targetIndex = 0;
							}
							else if(loop_mode=="none")
							{
								$(".btn-stop").trigger("click");
							}
						}
						else
						{
							targetIndex = index + 1;
						}
					}
					else
					{
						return false;
					}
				}
				break;
			}
		}
		if(targetIndex!=-1)
		{
			$("#list").get(0).selectedIndex=targetIndex;
			$("#list").trigger("change");
		}
		return false;
	});

	//绑定循环模式
	$(".controls span a").click(function(){
		$(".controls span a.order-mode").removeClass("order-mode-select");
		$(".controls span a.random-mode").removeClass("random-mode-select");
		$(".controls span a.single-mode").removeClass("single-mode-select");

		var current_classname = $(this).attr("class").split(" ")[0];
		$(this).addClass(current_classname + "-select");
		switch(current_classname)
		{
			case "order-mode":
			{
				play_mode = "order";
				loop_mode = "list";
				break;
			}
			case "single-mode":
			{
				play_mode = "single";
				loop_mode = "single";
				break;
			}
			case "random-mode":
			{
				play_mode = "rand";
				loop_mode = "list";
				break;
			}
		}
		return false;
	});
	//todo 控制加载
	
	function DATA(songname,songurl){
		songname = (document.getElementById("list").options.length + 1) + "." + songname;
		var opt = new Option(songname,songurl);
		opt.setAttribute("downloadid",arguments[2]);
		//opt.setAttribute("value",arguments[2]);
		document.getElementById("list").options.add(opt);
	}

	function GetRandomNum(Min,Max){
		var Range = Max - Min;
		var Rand = Math.random();
		return(Min + Math.round(Rand * Range));
	}

	function get_cookie(_name){
		var Res=eval('/'+_name+'=([^;]+)/').exec(document.cookie); return Res==null?'':unescape(Res[1]);
	};

	function chk_open() {
		if( 'Y' == get_cookie('open_player') )
		{
			location.href='close.htm';
		}else {
			setTimeout('chk_open()', 3000);
		}
	};
	window.chk_open = chk_open;
	chk_open();
	function coolWei(list){
		for(var i=0;i<list.length;i++){
			console.log(JSON.stringify([list[i].name,list[i].url,""+i]));
			DATA(list[i].name,list[i].url,""+i);
		}
	}
	window.coolWei = coolWei;
    coolWei(list);
	//coolWei(list);
};