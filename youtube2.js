let localid=localStorage.getItem("name");
console.log(localid)
function viewscrt(a){
    let a1 = a.split('').reverse().join('');
    let a3 = [];
    if(a1.length>3){
        for(let x = 0; x<a1.length; x=x+3){
              let b1 =a1.slice(x, x+3);
              a3.push(b1.split('').reverse().join(''));
        }
        return(a3.reverse().join(","));

    }
    else{
        return a;
    }
    
}
function uploaddate(date){
    let odate=date.slice(0,10);
    let odatearray=odate.split("-");
    let today=new Date(date);
    
    let mon = String(today).slice(4,8);
    return (`${mon} ${odatearray[2]}, ${odatearray[0]} `);
}
function likescrt(like){
    if(like.length<=3){
        return like;
    }
    if(like.length==4){
        return (`${like.charAt(0)}.${like.charAt(1)}k`)
    }
    if(like.length==5){
        return (`${like.charAt(0)}${like.charAt(1)}k`)
    }
    if(like.length==6){
        return (`${like.charAt(0)}${like.charAt(1)}${like.charAt(2)}k`)
    }
    if(like.length==7){
        return (`${like.charAt(0)}.${like.charAt(1)}M`)
    }
    if(like.length==8){
        return (`${like.charAt(0)}${like.charAt(1)}.${like.charAt(2)}M`)
    }
}
function commenttime(date){
    let commentdate=date.slice(0,10);
    let datearray=commentdate.split("-");
    let todaydate=new Date();
    let fullyear = todaydate.getFullYear();
    let month=todaydate.getMonth()+1;
    let day=todaydate.getDate();
    if(fullyear-Number(datearray[0])==1){
        return("1 year ago");
    }
    if(datearray[0]!=String(fullyear) && fullyear-Number(datearray[0])!=1 ){
        return (`${fullyear-Number(datearray[0])} year
         ago`)
    }
    if(datearray[1]!=String(month) && datearray[0]==String(fullyear)){
        return (`${month-Number(datearray[1])} months ago`)
    }
    if(datearray[2]!=String(day) && datearray[0]==String(fullyear) && datearray[1]==String(month)){
        return (`${day-Number(datearray[2])} days ago`)
    }
}
function crttime(time){
    if(time.includes('M')){
        let t = time.indexOf("T")
        let m = time.indexOf("M")
        let seconds =time.slice(m+1, time.length-1)
        let minutes = time.slice(t+1,m)
        return `${minutes}:${seconds}`
    }
    if(!time.includes('M')){
        let t = time.indexOf("T")
        let seconds =time.slice(t+1, time.length-1)
        return `00: ${seconds}`
    }
}

document.getElementsByClassName("iframeplayer")[0].innerHTML=  `<iframe width='100%' height="100%" src="//www.youtube.com/embed/${localid}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${localid}&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
.then(res=>res.json())
.then(data=>{
    document.getElementsByClassName("titleframe")[0].innerHTML=data.items[0].snippet.title;
    let vidviews=viewscrt(data.items[0].statistics.viewCount);
  
    
    let uploaddate1=uploaddate(data.items[0].snippet.publishedAt);
    document.getElementsByClassName("totalsubs")[0].innerHTML=`${vidviews} views. ${uploaddate1}`
    document.getElementById("nolikes").innerHTML=likescrt(data.items[0].statistics.likeCount);
    let channelid = data.items[0].snippet.channelId;
    console.log(channelid);
    document.getElementById("videodescription").innerHTML=data.items[0].snippet.description;
    
    document.getElementById("nocomments").innerHTML=`${likescrt(data.items[0].statistics.commentCount)} Comments`
    fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails%2C%20snippet%2C%20statistics&id=${channelid}&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
    .then(res=>res.json())
    .then(file=>{
        document.getElementById("subcimg").src=file.items[0].snippet.thumbnails.high.url;
        document.getElementById("subsctitle").innerHTML=file.items[0].snippet.title;
        document.getElementById("subsccount").innerHTML=`${likescrt(file.items[0].statistics.subscriberCount)} subscribers`
        document.getElementById("allsubsname").innerHTML=file.items[0].snippet.title;

        
    })
    

})
let innercomment=
`<div class="comments">
                     <div style="width:56px; height:40px; padding:0px 16px 0px 0px">
                         <img class="commentimage" src="">

                     </div>
                     <div style="flex:1; height:100% " class="replycontent">
                         <div style="width:100%; height:22px; padding-bottom: 2px;">
                             <span class="commentsubname">barbell pitch</span>
                             <span class="commenttime">8 hours ago</span>
                         </div>
                         <div class="commentdescription">

                         </div>
                         <div style="width:100%; height:38px; padding-top:4px; display: flex; align-items: center;">
                               <div style="width:55px; height:100%; display: flex; padding:8px;">
                                 <img src="Icons/smallliked.png">
                                 <div class="likedcomments">5</div>

                             </div>
                             <img src="Icons/smalldislike.png">
                             <div class="replybutton1">REPLY</div>
                             
                         </div>
                         
                          
                     </div>

                 </div>`
let innerreplies = `<div class="replies">
<div style="width:56px; height:40px; padding:0px 16px 0px 0px">
    <img class="replyimage" src="">

</div>
<div style="flex:1; height:100%; ">
    <div style="width:100%; height:22px; padding-bottom: 2px;">
        <span class="replysubname">barbell pitch</span>
        <span class="replytime">8 hours ago</span>
    </div>
    <div class="replydescription">

    </div>
    <div style="width:100%; height:38px;  padding-top:4px; display: flex; align-items: center;">
          <div style="width:55px; height:100%; display: flex; padding:8px;">
            <img src="Icons/smallliked.png">
            <div class="likedreplycount">5</div>

        </div>
        <img src="Icons/smalldislike.png">
        <div class="replybutton3">REPLY</div>
    </div>

</div>

</div>`
let innn = `<div style="width:100%; height:50px; border:1px solid white">`
fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=replies%2C%20snippet&maxResults=50&videoId=${localid}&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
.then(res=>res.json())
.then(data=>{
    let commentlength=data.items.length;
    console.log(commentlength);
    let commentsections;
    let replycontents;
    let commentsdata=[];
    let allcomments = [];
    let sr;
    for(let x=0; x<commentlength; x++){
        document.getElementsByClassName("commentsection")[0].innerHTML+=innercomment;
        document.getElementsByClassName("commentimage")[x];
        document.getElementsByClassName("commentimage")[x].src = data.items[x].snippet.topLevelComment.snippet.authorProfileImageUrl;
        document.getElementsByClassName("commentsubname")[x].innerHTML= data.items[x].snippet.topLevelComment.snippet.authorDisplayName;
        document.getElementsByClassName("commentdescription")[x].innerHTML=data.items[x].snippet.topLevelComment.snippet.textOriginal;
        document.getElementsByClassName("likedcomments")[x].innerHTML=data.items[x].snippet.topLevelComment.snippet.likeCount;
        document.getElementsByClassName("commenttime")[x].innerHTML=commenttime(data.items[x].snippet.topLevelComment.snippet.publishedAt);
        let replycount = data.items[x].snippet.totalReplyCount;
        
       
        commentsections=document.getElementsByClassName("comments")
        replycontents=document.getElementsByClassName("replycontent")
        if(data.items[x].snippet.totalReplyCount!=0){
        commentsdata.push(data.items[x].replies.comments)}

        
    } 
    
    console.log(commentsdata)
    for(let x=0; x<replycontents.length;x++){
        let dd;
        if(data.items[x].snippet.totalReplyCount!=0){
            let dds = data.items[x].replies.comments.length
            console.log(dds+" 7448454")
            for(let y=0; y<dds; y++){
                document.getElementsByClassName("replycontent")[x].innerHTML+=innerreplies
            }
        }
    }
    sr =document.getElementsByClassName("replybutton1")
    for(let x = 0; x<commentsdata.length; x++){
        
        for(let y=0; y<commentsdata[x].length; y++){
            allcomments.push(commentsdata[x][y])
        }
    }
    console.log(allcomments)
    for(let x = 0;x<allcomments.length; x++){
          document.getElementsByClassName("replyimage")[x].src = allcomments[x].snippet.authorProfileImageUrl
          document.getElementsByClassName("replysubname")[x].innerHTML = allcomments[x].snippet.authorDisplayName
          document.getElementsByClassName("replytime")[x].innerHTML = commenttime(allcomments[x].snippet.publishedAt)
          document.getElementsByClassName("replydescription")[x].innerHTML =allcomments[x].snippet.textOriginal;
          document.getElementsByClassName("likedreplycount")[x].innerHTML =allcomments[x].snippet.likeCount;

    }



    
    
   
}

    
)

console.log(document.getElementsByClassName("replycontent"))
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLt0Kv4yxOyma470HVQyTg_noLATvciY6u&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok')
.then(re=>re.json())
.then(data=>{
    
    let titles=document.getElementsByClassName("vidplayertitle");
    

    let c = data.items;
    
    let thumbnails=document.getElementsByClassName("vidplayerimg");
    let vidplayersub=document.getElementsByClassName("vidplayersubname")
    let durationtime=document.getElementsByClassName("vidplayerviews");
    
    for(let x =0; x<titles.length; x++){
        titles[x].innerHTML=c[x].snippet.title;
        thumbnails[x].src=c[x].snippet.thumbnails.maxres.url;
        
        vidplayersub[x].innerHTML=c[x].snippet.channelTitle;
        let vididplayer=c[x].snippet.resourceId.videoId;
        let durtime=commenttime(c[x].snippet.publishedAt);
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet%2Cstatistics%2C%20player&id=${vididplayer}&maxResults=1&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
        .then(res=>res.json())
        .then(file=>{
            let vidplayerviews=`${likescrt(file.items[0].statistics.viewCount)} views. `;
            console.log(vidplayerviews)
            durationtime[x].innerHTML=vidplayerviews+durtime;
            let time = file.items[0].contentDetails.duration;
            console.log(time)
            document.getElementsByClassName("vidplayertime")[x].innerHTML=crttime(time);
        })
    }
})
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLMYRtZEVPTZ6nOq_HXP3ZIYdFyKVXALgZ&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok')
.then(re=>re.json())
.then(data=>{
    
    let titles=document.getElementsByClassName("vidplayertitle1");
    

    let c = data.items;
    
    let thumbnails=document.getElementsByClassName("vidplayerimg1");
    let vidplayersub=document.getElementsByClassName("vidplayersubname1")
    let durationtime=document.getElementsByClassName("vidplayerviews1");
    
    for(let x =0; x<titles.length; x++){
        titles[x].innerHTML=c[x].snippet.title;
        thumbnails[x].src=c[x].snippet.thumbnails.maxres.url;
        
        vidplayersub[x].innerHTML=c[x].snippet.channelTitle;
        let vididplayer=c[x].snippet.resourceId.videoId;
        let durtime=commenttime(c[x].snippet.publishedAt);
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet%2Cstatistics%2C%20player&id=${vididplayer}&maxResults=1&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
        .then(res=>res.json())
        .then(file=>{
            let vidplayerviews=`${likescrt(file.items[0].statistics.viewCount)} views. `;
            console.log(vidplayerviews)
            durationtime[x].innerHTML=vidplayerviews+durtime;
            let time = file.items[0].contentDetails.duration;
            console.log(time)
            document.getElementsByClassName("vidplayertime1")[x].innerHTML=crttime(time);
        })
    }
})
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLWz2DO39R-NWSr-33cRAbtYp52q2qkajK&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok')
.then(re=>re.json())
.then(data=>{
    
    let titles=document.getElementsByClassName("vidplayertitle2");
    

    let c = data.items;
    
    let thumbnails=document.getElementsByClassName("vidplayerimg2");
    let vidplayersub=document.getElementsByClassName("vidplayersubname2")
    let durationtime=document.getElementsByClassName("vidplayerviews2");
    
    for(let x =0; x<titles.length; x++){
        titles[x].innerHTML=c[x].snippet.title;
        thumbnails[x].src=c[x].snippet.thumbnails.maxres.url;
        
        vidplayersub[x].innerHTML=c[x].snippet.channelTitle;
        let vididplayer=c[x].snippet.resourceId.videoId;
        let durtime=commenttime(c[x].snippet.publishedAt);
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet%2Cstatistics%2C%20player&id=${vididplayer}&maxResults=1&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
        .then(res=>res.json())
        .then(file=>{
            let vidplayerviews=`${likescrt(file.items[0].statistics.viewCount)} views. `;
            console.log(vidplayerviews)
            durationtime[x].innerHTML=vidplayerviews+durtime;
            let time = file.items[0].contentDetails.duration;
            console.log(time)
            document.getElementsByClassName("vidplayertime2")[x].innerHTML=crttime(time);
        })
    }
    
})
