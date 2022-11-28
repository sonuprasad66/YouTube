//const api_key=`AIzaSyDJkIhENoDVi2_ceHKV47UThGS3o_jKJB4`

let popular = async () => {
  //let query=document.getElementById("search").value;
  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyDJkIhENoDVi2_ceHKV47UThGS3o_jKJB4`;
  let res = await fetch(url);
  let data = await res.json();
  append2(data.items);
  console.log(data);
};
popular();

let append2 = (data) => {
  console.log(data);
  let container = document.getElementById("results");
  container.innerHTML = null;
  data.forEach(({ id, snippet: { title, thumbnails } }) => {
    //console.log(thumbnails)

    let div = document.createElement("div");
    let iframe = document.createElement("img");
    iframe.src = thumbnails.default.url;
    //iframe.allow="fullscreen";
    let h3 = document.createElement("h4");
    h3.innerText = title;
    let vid = {
      id,
      title,
    };
    //localStorage.setItem("video",JSON.stringify(video))
    div.append(iframe, h3);
    container.append(div);
    div.onclick = () => {
      playVid(vid);
    };
  });
  let playVid = (vid) => {
    localStorage.setItem("video", JSON.stringify(vid));
    window.location.href = "video2.html";
  };
};
