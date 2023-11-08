//Working od SHOW MORE and Show LESS buttons in Library Content

const show_button=document.getElementById("show-up-down");
const hide_button=document.getElementById("show-down-down");

const a3 = document.getElementsByClassName("library-menu");
const a1=document.getElementById("up-down");

const a2=document.getElementsByClassName("aaa");
for(let x of a2){
    x.style.display="none";
}
show_button.addEventListener('click', function(){
        a3[0].style.height="426px";
        for(let x of a2){
            x.style.display="flex";
        }
    show_button.style.display="none";
})
hide_button.addEventListener('click', function(){
    a3[0].style.height="266px";
    for(let x of a2){
        x.style.display="none";
    }
show_button.style.display="flex";
})

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
        let monsubst=month-Number(datearray[1]);
        if(monsubst==1){
            return ("1 month ago")
        }else{
        return (`${month-Number(datearray[1])} months ago`)}
    }
    if(datearray[2]!=String(day) && datearray[0]==String(fullyear) && datearray[1]==String(month)){
        return (`${day-Number(datearray[2])} days ago`)
    }
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

//Working od SHOW MORE and Show LESS buttons in Subscriptions

const b1 = document.getElementsByClassName("bbbb");
for(let x of b1){
    x.style.display="none";
}
const show_button2=document.getElementById("show-up-up");
const hide_button2=document.getElementById("show-down-up");
const b3=document.getElementsByClassName("subscriptions");
show_button2.addEventListener('click', function(){
    b3[0].style.height="304px";
    for(let x of b1){
        x.style.display="flex";
    }
show_button2.style.display="none";
})
hide_button2.addEventListener('click', function(){
    b3[0].style.height="224px";
    for(let x of b1){
        x.style.display="none";
    }
show_button2.style.display="flex";
})
//
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
// data fetching from youtube api

fetch('https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=UC26G--WPTWML5bTN50vrbtw&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok' )
.then(re=>re.json())
.then(data=>{console.log(data)
});
fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCFsXccQmek5E6JfDFoqtuyg&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok' )
.then(re=>re.json())
.then(data=>{
    
    document.getElementById("sub1").src=data.items[0].snippet.thumbnails.high.url;
    document.getElementById("subname1").innerHTML=data.items[0].snippet.title;
    let vidsub=document.getElementsByClassName("vidsubname1");
    for(x of vidsub){
        x.innerHTML=data.items[0].snippet.title;
    }
    let subimages=document.getElementsByClassName("subimg1");
    for(let x of subimages){
        x.src=data.items[0].snippet.thumbnails.high.url;
    }   
});
    
    


fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCQJWtTnAHhEG5w4uN0udnUQ&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok' )
.then(re=>re.json())
.then(data=>{
    
    document.getElementById("sub2").src=data.items[0].snippet.thumbnails.default.url;
    document.getElementById("subname2").innerHTML=data.items[0].snippet.title;
    let vidsub=document.getElementsByClassName("vidsubname3");
    for(x of vidsub){
        x.innerHTML=data.items[0].snippet.title;
    }
    let subimages=document.getElementsByClassName("subimg3");
    for(let x of subimages){
        x.src=data.items[0].snippet.thumbnails.high.url;
    }

});
fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCs55OZ6PkvIjwtyyqEFk8JQ&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok' )
.then(re=>re.json())
.then(data=>{
    
    document.getElementById("sub3").src=data.items[0].snippet.thumbnails.high.url;
    document.getElementById("subname3").innerHTML=data.items[0].snippet.title;
    let vidsub=document.getElementsByClassName("vidsubname2");
    for(x of vidsub){
        x.innerHTML=data.items[0].snippet.title;
    }
    let subimages=document.getElementsByClassName("subimg2");
    for(let x of subimages){
        x.src=data.items[0].snippet.thumbnails.high.url;
    }

});
fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCKZozRVHRYsYHGEyNKuhhdA&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok' )
.then(re=>re.json())
.then(data=>{
    
    document.getElementById("sub4").src=data.items[0].snippet.thumbnails.default.url;
    document.getElementById("subname4").innerHTML=data.items[0].snippet.title;
    let vidsub=document.getElementsByClassName("vidsubname4");
    for(x of vidsub){
        x.innerHTML=data.items[0].snippet.title;
    }
    let subimages=document.getElementsByClassName("subimg4");
    for(let x of subimages){
        x.src=data.items[0].snippet.thumbnails.high.url;
    }

});
fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC-qTldS8DNIGOfIVc0G8t-w&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok' )
.then(re=>re.json())
.then(data=>{
    
    document.getElementById("sub5").src=data.items[0].snippet.thumbnails.default.url;
    document.getElementById("subname5").innerHTML=data.items[0].snippet.title;

});
// video list
let localstoreid;
fetch("https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet%2Cstatistics&id=hBE2fhHWYk4&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok")
.then(re=>re.json())
.then(data=>{
    
    document.getElementById("vid1").src=data.items[0].snippet.thumbnails.maxres.url;
});
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLt0Kv4yxOyma470HVQyTg_noLATvciY6u&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok')
.then(re=>re.json())
.then(data=>{
    
    let titles=document.getElementsByClassName("title1");
    let iframes1=document.getElementsByClassName("iframes1");

    let c = data.items;
    
    let thumbnails=document.getElementsByClassName("thumbnail");
    
    let durationtime=document.getElementsByClassName("durationtime");
    console.log(iframes1.length)
    for(let x =0; x<titles.length; x++){
        titles[x].innerHTML=c[x].snippet.title;
        thumbnails[x].src=c[x].snippet.thumbnails.maxres.url;
        
        let vididplayer=c[x].snippet.resourceId.videoId;
        console.log(vididplayer)
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet%2Cstatistics%2C%20player&id=${vididplayer}&maxResults=1&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
        .then(res=>res.json())
        .then(file=>{
             let views = file.items[0].statistics.viewCount;
             console.log(likescrt(views))
             let published = file.items[0].snippet.publishedAt;
             console.log(commenttime(published))
             durationtime[x].innerHTML=likescrt(views)+" views. "+commenttime(published);
            let time = file.items[0].contentDetails.duration;
            console.log(time)
            document.getElementsByClassName("vidplayertime")[x].innerHTML=crttime(time);
            
        })
    }
    for(let x =0; x<iframes1.length; x++){
          iframes1[x].addEventListener('click', function(){
            localStorage.setItem("name", c[x].snippet.resourceId.videoId);
            console.log(localStorage.getItem("name"))
          })
    }
})
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2C%20contentDetails&playlistId=PLMYRtZEVPTZ6nOq_HXP3ZIYdFyKVXALgZ&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok')
.then(re=>re.json())
.then(data=>{
    let iframes2=document.getElementsByClassName("iframes2");
    let titles=document.getElementsByClassName("title2");
   
    let c = data.items;
    let thumbnails=document.getElementsByClassName("thumbnail2");
 
    let durationtime=document.getElementsByClassName("durationtime2");
   
    for(let x =0; x<titles.length; x++){
        titles[x].innerHTML=c[x].snippet.title;
        thumbnails[x].src=c[x].snippet.thumbnails.maxres.url;
        durationtime[x].innerHTML=c[x].snippet.publishedAt;
        let vididplayer=c[x].snippet.resourceId.videoId;
        console.log(vididplayer)
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet%2Cstatistics%2C%20player&id=${vididplayer}&maxResults=1&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
        .then(res=>res.json())
        .then(file=>{
            let views = file.items[0].statistics.viewCount;
            console.log(likescrt(views))
            let published = file.items[0].snippet.publishedAt;
            console.log(commenttime(published))
            durationtime[x].innerHTML=likescrt(views)+" views. "+commenttime(published);
            let time = file.items[0].contentDetails.duration;
            console.log(time)
            document.getElementsByClassName("vidplayertime1")[x].innerHTML=crttime(time);
        })
        
    }
    for(let x =0; x<iframes2.length; x++){
        iframes2[x].addEventListener('click', function(){
          localStorage.setItem("name", c[x].snippet.resourceId.videoId);
          console.log(localStorage.getItem("name"))
        })
  }
})
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2C%20contentDetails&maxResults=10&playlistId=PLWz2DO39R-NWSr-33cRAbtYp52q2qkajK&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok')
.then(re=>re.json())
.then(data=>{
    
    let titles=document.getElementsByClassName("title3");
    let iframes3=document.getElementsByClassName("iframes3");
    let c = data.items;
    let thumbnails=document.getElementsByClassName("thumbnail3");
    
    let durationtime=document.getElementsByClassName("durationtime3");

    for(let x =0; x<titles.length; x++){
        titles[x].innerHTML=c[x].snippet.title;
        thumbnails[x].src=c[x].snippet.thumbnails.maxres.url;
        durationtime[x].innerHTML=c[x].snippet.publishedAt;
        let vididplayer=c[x].snippet.resourceId.videoId;
        console.log(vididplayer)
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet%2Cstatistics%2C%20player&id=${vididplayer}&maxResults=1&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
        .then(res=>res.json())
        .then(file=>{
            let views = file.items[0].statistics.viewCount;
            console.log(likescrt(views))
            let published = file.items[0].snippet.publishedAt;
            console.log(commenttime(published))
            durationtime[x].innerHTML=likescrt(views)+" views. "+commenttime(published);
            let time = file.items[0].contentDetails.duration;
            console.log(time)
            document.getElementsByClassName("vidplayertime2")[x].innerHTML=crttime(time);
        })
    }
    for(let x =0; x<iframes3.length; x++){
        iframes3[x].addEventListener('click', function(){
          localStorage.setItem("name", c[x].snippet.resourceId.videoId);
          console.log(localStorage.getItem("name"))
        })
  }
})
document.getElementsByClassName("maincontentpage")[0].style.display="none"
document.getElementById("sspg").style.display="none";
const channelids=['https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics%2C%20contentDetails&id=UCFsXccQmek5E6JfDFoqtuyg&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok','https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics%2C%20contentDetails&id=UCQJWtTnAHhEG5w4uN0udnUQ&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok',"https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics%2C%20contentDetails&id=UCs55OZ6PkvIjwtyyqEFk8JQ&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok",'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics%2C%20contentDetails&id=UCKZozRVHRYsYHGEyNKuhhdA&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok', 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics%2C%20contentDetails&id=UC-qTldS8DNIGOfIVc0G8t-w&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok']
const subscriberdata=document.getElementsByClassName("sub-buttons");

let vidids=['T-pkXRKVD_U', 'sX3idD5lLBA','2p43z7L-rt0','le_o1UklXUs','1VIfTUEAfTY']
const mainvideos=[`<iframe width='100%' height="100%" src="//www.youtube.com/embed/T-pkXRKVD_U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,`<iframe width="100%" height="100%" src="//www.youtube.com/embed/sX3idD5lLBA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,`<iframe width="100%" height="100%" src="//www.youtube.com/embed/2p43z7L-rt0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `<iframe width='100%' height="100%" src="//www.youtube.com/embed/le_o1UklXUs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,`<iframe width='100%' height="100%" src="//www.youtube.com/embed/1VIfTUEAfTY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`]
const playlistids=['PLt0Kv4yxOyma470HVQyTg_noLATvciY6u','PLWz2DO39R-NWfYJewx9evNliiKGPzN8jG','PLMYRtZEVPTZ6nOq_HXP3ZIYdFyKVXALgZ','PLGwmAEmjn4fk0-8ZwSpHlayweS0xf_jLS','PLDDTQpF8LWaUOJNAmYFiFK6_J_CoR8Xlv']
const playlistsubsvid=document.getElementsByClassName("vid5");
const imgplst=document.getElementsByClassName("imgplst");
for(let x=0; x<subscriberdata.length; x++){
    
    subscriberdata[x].addEventListener("click", function(){
        document.getElementById("sspg").style.display="flex";
        document.getElementsByClassName("maincontentpage")[0].style.display="none"
        fetch(channelids[x])
        .then(res=>res.json())
        .then(data=>{
            document.getElementById("subscriberprofile").src=data.items[0].snippet.thumbnails.high.url;
            document.getElementById("subsname11").innerHTML=data.items[0].snippet.title;
            let countsub = data.items[0].statistics.subscriberCount;
            document.getElementById("subscount").innerHTML=`${viewscrt(countsub)} subscribers`;
            document.getElementsByClassName("mainvideo")[0].innerHTML=mainvideos[x];
        })
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet%2Cstatistics%2C%20player&id=${vidids[x]}&maxResults=1&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
        .then(res=>res.json())
        .then(data=>{
            document.getElementById("maintitle").innerHTML=data.items[0].snippet.localized.title;
            document.getElementById("vidviews").innerHTML=`${viewscrt(data.items[0].statistics.viewCount) } views.   3 weeks ago`;
            document.getElementById("viddescription").innerHTML=data.items[0].snippet.localized.description;
        })
        const playlistvidids=[];
        fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2C%20contentDetails&maxResults=10&playlistId=${playlistids[x]}&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
        .then(res=>res.json())
        .then(data=>{
            
            const itemslist1=data.items;
            for(let x of itemslist1){
                playlistvidids.push(x.contentDetails.videoId);
            }
            console.log(playlistvidids.length);
            for(let y=0; y<playlistvidids.length; y++){
            fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2C%20snippet%2Cplayer%20%2Cstatistics&id=${playlistvidids[y]}&key=AIzaSyA8VrUga1Wvy6uHgtQ5XrXNoPfM8K1tfok`)
            .then(res=>res.json())
            .then(data=>{
                for(let z of imgplst){
                z.src=data.items[0].snippet.thumbnails.maxres.url;
               
            }
            let vid5title=document.getElementsByClassName("vid5title");
            for(let x of vid5title){
                x.innerHTML=data.items[0].snippet.title;

            }
            let vid5sub=document.getElementsByClassName("vid5sub");
            for(let x of vid5sub){
                x.innerHTML=data.items[0].snippet.channelTitle;

            }
            let vid5views=document.getElementsByClassName("vid5views");
            for(let x of vid5views){
                x.innerHTML=data.items[0].statistics.viewCount + " views. "+ " 1 year ago";

            }


            })
            }

        })

    })
}
document.getElementsByClassName("input1")[0].addEventListener("keypress", function(event){
    if(event.key=="Enter"){
        console.log(document.getElementsByClassName("input1")[0].value)
    if(document.getElementsByClassName("input1")[0].value="null"){
    document.getElementsByClassName("maincontentpage")[0].style.display="flex"
    document.getElementById("sspg").style.display="none";
    document.getElementsByClassName("input1")[0].value="";}
}
})
const lines3=document.getElementById("lines3");
let bool='true';








