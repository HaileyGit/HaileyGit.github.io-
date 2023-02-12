const quotes = [
    {
      quote: `내 총 끝은 빛나고 방아쇠는 심판을 내린다

      기꺼이 적에게 복수하고 증오엔 증오로 되갚으니

      오..신이시여

      나를 당신곁에 두시고

      성인들 중에 세우소서!
      
      남의 피를 쏟게 하는 자

      자기 피도 쏟게 하리라

      그것이 신의 뜻이라`,
      author: "",
    },
    {
      quote:`난 지금 미쳐가고있다.

      이 헤드폰에 내 모든 몸과

      영혼을 맡겼다.
      
      음악만이 나라에서 허락하는

      유일한 마약이니까
      
      이게 바로 지금의 나다`,
      author: "",
    },
    {
      quote:
        `나는 울지 못했다.

        지금도, 제대로 울지 못하고 있다.

        몇 번이나 후회했다.

        지금도 하고 있다.

        하지만 또 몇번이나 생각을 바꾼다.

        필경 우리는 그 이상 아무것도 할 수 없었다.

        마지막까지, 즐거웠다.

        주문처럼, 그렇게 되뇌인다.`,
      author: "",
    },
    {
      quote:
        `니가 오해할까봐 그러는데
        나 아무한테나 그러지않아

        나 아무한테나 마음주고
        아무나 기다리고

        아무한테나 연락하고
        아무한테나 웃어주고

        아무나 손잡고
        아무나 따라가고

        아무한테나 좋아한다 말하고
        아무한테나 보고싶다 말하고
        아무한테나 나는 그렇지 않아.`,
      author: "",
    },
    {
      quote:
        `난...ㄱ ㅏ 끔...
        눈물을 흘린 ㄷㅏ....
        ㄱㅏ끔은 눈물을 참을 수 없는 내가 별루ㄷㅏ...       

        맘이 ㅇㅏㅍㅏ서....       
        소ㄹㅣ치며... 울 수 있 ㄷㅏ는건....
        좋은ㄱㅓㅇㅑ.....
        
        ㅁㅓ... 꼭 슬 ㅍㅓㅇㅑ만 우는건 
        ㅇㅏ니잖ㅇㅏ...^^
        
        난...눈물ㅇㅣ.... 좋 다.....
        ㅇㅏ니...
        ㅁㅓ리가 ㅇㅏ닌....
        맘으로... 우는 ㄴㅐㄱㅏ좋ㄷㅏ....`,
      author: "",
    },
    {
      quote:
        `“왜 울었는데.”

        “양파 썰다가.”
        
        “왜 울었냐고.”
        
        “양파 때문이라고 대답했잖아.”
        
        “.. 내가 양파냐 ..”`,
      author: "",
    },
    
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;