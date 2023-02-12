const musicLists = [	
    "Y (Please Tell Me Why) - ",
    "내 입술... 따뜻한 커피처럼 - 샵(S#arp)",
    "몽환의 숲 (feat. 이루마)- 키네틱플로우(K-Flow)",
    "여자이니까 - 키스(Kiss)",
    "BK Love - MC 스나이퍼(MC Sniper)",
    "눈의꽃 - 박효신",
    "Love Love Love (feat. 융진 Of Casker) - 에픽하이 (EPIK HIGH)",
    "수취인불명 - 프리스타일(Free Style)"];

const listShow = musicLists[Math.floor(Math.random() * musicLists.length)];

const playList = document.getElementById("musicList");
playList.innerText = listShow


