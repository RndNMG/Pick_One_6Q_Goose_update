function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SEWi42MAPK":
        Script1();
        break;
      case "5l9m3oaQkS0":
        Script2();
        break;
      case "68eyslZfJXG":
        Script3();
        break;
      case "6gxQ4pzMWF0":
        Script4();
        break;
      case "5y016N67NOS":
        Script5();
        break;
      case "5mCChd7jxAR":
        Script6();
        break;
      case "5nVazttbV0s":
        Script7();
        break;
      case "5VuFdkyj0ji":
        Script8();
        break;
      case "5ldEq9Ryd68":
        Script9();
        break;
      case "5lr4pmav8Jx":
        Script10();
        break;
      case "60NykaVkp6I":
        Script11();
        break;
      case "5j2jNfLtNW9":
        Script12();
        break;
      case "6US7PzhqLEX":
        Script13();
        break;
      case "693aNe3QIed":
        Script14();
        break;
      case "6nH6MVxkQZr":
        Script15();
        break;
      case "6Y8RrLOgEPt":
        Script16();
        break;
      case "5aXliOpqeyB":
        Script17();
        break;
      case "6Gky5XK1gms":
        Script18();
        break;
      case "64qUcV1L74R":
        Script19();
        break;
      case "6kvZ1GEz93C":
        Script20();
        break;
      case "5kKZE5b7mi3":
        Script21();
        break;
      case "5q0YiEgCDSC":
        Script22();
        break;
      case "6d1pT1LbUwJ":
        Script23();
        break;
      case "6bLDi94kdm5":
        Script24();
        break;
      case "6Y6g1ODnPTc":
        Script25();
        break;
      case "6jxJTLG4wId":
        Script26();
        break;
      case "5Vgm2M9mni1":
        Script27();
        break;
      case "6M4cIENJRCr":
        Script28();
        break;
      case "5vkMHdTBtB7":
        Script29();
        break;
      case "6grZwsk5IqV":
        Script30();
        break;
      case "5r5227WYjMJ":
        Script31();
        break;
      case "6EIkAPrvJuO":
        Script32();
        break;
      case "6IRZf1pJFjY":
        Script33();
        break;
      case "6frny9x9hxr":
        Script34();
        break;
      case "6hd1NbX5R4R":
        Script35();
        break;
      case "6KPD7rpQm4H":
        Script36();
        break;
      case "5ZiBs1kaOiD":
        Script37();
        break;
      case "60D5GK93JBA":
        Script38();
        break;
      case "5bU4ilFnJ3y":
        Script39();
        break;
      case "6Yi8724yHqa":
        Script40();
        break;
      case "6gRkmQt4fEU":
        Script41();
        break;
      case "5qFTTR8DKqW":
        Script42();
        break;
      case "64vADR1C90Z":
        Script43();
        break;
      case "5tf2ffCEBfM":
        Script44();
        break;
      case "5zAZVGivYzY":
        Script45();
        break;
      case "6MGglQrtxY5":
        Script46();
        break;
      case "5nk4D5SYgnC":
        Script47();
        break;
      case "6k45FNk3pXQ":
        Script48();
        break;
      case "6VDnxwe1Iug":
        Script49();
        break;
      case "6ZAhDqcnIWb":
        Script50();
        break;
      case "602EYvLwuub":
        Script51();
        break;
      case "6WTJbFPsi7J":
        Script52();
        break;
      case "5nRWQf8ET8c":
        Script53();
        break;
      case "6DK1tJIwfju":
        Script54();
        break;
      case "6eF4jXpIhoY":
        Script55();
        break;
      case "5pKzFNUFVP0":
        Script56();
        break;
      case "6ErfPHbfQtR":
        Script57();
        break;
      case "5rvPtFrc5Oz":
        Script58();
        break;
      case "6TFXGVQulGI":
        Script59();
        break;
      case "69w45yu4s8e":
        Script60();
        break;
  }
}

function Script1()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script2()
{
    var progressIframe = document.getElementsByTagName("iframe");
  if (parseInt(localStorage.getItem("currentSlide")) != 0) {
    setTimeout(() => {
      for (let i = 0; i < progressIframe.length; i++) {
        if (
          progressIframe[i].contentWindow.document.getElementsByTagName(
            "title"
          )[0].innerHTML == "progressWO"
        ) {
          progressIframe[i].contentWindow.IncreaseProgress("R");
          break;
        }
      }
    }, 250);
  }
}

function Script3()
{
  var FilePath =location.href.split("Content");
var scripts = FilePath [0] +"Scripts/script.js";
var script = document.createElement('script');
script.src = scripts;
script.type='text/javascript';
script.crossorigin='anonymous';
var done = false;
script.onload = script.onreadystatechange = function() {
if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
done = true;
}
};
document.getElementsByTagName("head")[0].appendChild(script);

}

function Script4()
{
  plyPause(false);
}

function Script5()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("R");
      break;
    }
  }
}

function Script6()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script7()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("W");
      break;
    }
  }
}

function Script8()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script9()
{
  plyPause(true);
}

function Script10()
{
    let player = GetPlayer();
  let hideDraft = player.GetVar("hideDraft");
  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script11()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script12()
{
    var progressIframe = document.getElementsByTagName("iframe");
  if (parseInt(localStorage.getItem("currentSlide")) != 0) {
    setTimeout(() => {
      for (let i = 0; i < progressIframe.length; i++) {
        if (
          progressIframe[i].contentWindow.document.getElementsByTagName(
            "title"
          )[0].innerHTML == "progressWO"
        ) {
          progressIframe[i].contentWindow.IncreaseProgress("R");
          break;
        }
      }
    }, 250);
  }
}

function Script13()
{
  plyPause(false);
}

function Script14()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("R");
      break;
    }
  }
}

function Script15()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script16()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("W");
      break;
    }
  }
}

function Script17()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script18()
{
  plyPause(true);
}

function Script19()
{
    let player = GetPlayer();
  let hideDraft = player.GetVar("hideDraft");
  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script20()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script21()
{
    var progressIframe = document.getElementsByTagName("iframe");
  if (parseInt(localStorage.getItem("currentSlide")) != 0) {
    setTimeout(() => {
      for (let i = 0; i < progressIframe.length; i++) {
        if (
          progressIframe[i].contentWindow.document.getElementsByTagName(
            "title"
          )[0].innerHTML == "progressWO"
        ) {
          progressIframe[i].contentWindow.IncreaseProgress("R");
          break;
        }
      }
    }, 250);
  }
}

function Script22()
{
  plyPause(false);
}

function Script23()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("R");
      break;
    }
  }
}

function Script24()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script25()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("W");
      break;
    }
  }
}

function Script26()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script27()
{
  plyPause(true);
}

function Script28()
{
    let player = GetPlayer();
  let hideDraft = player.GetVar("hideDraft");
  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script29()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script30()
{
    var progressIframe = document.getElementsByTagName("iframe");
  if (parseInt(localStorage.getItem("currentSlide")) != 0) {
    setTimeout(() => {
      for (let i = 0; i < progressIframe.length; i++) {
        if (
          progressIframe[i].contentWindow.document.getElementsByTagName(
            "title"
          )[0].innerHTML == "progressWO"
        ) {
          progressIframe[i].contentWindow.IncreaseProgress("R");
          break;
        }
      }
    }, 250);
  }
}

function Script31()
{
  plyPause(false);
}

function Script32()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("R");
      break;
    }
  }
}

function Script33()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script34()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("W");
      break;
    }
  }
}

function Script35()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script36()
{
  plyPause(true);
}

function Script37()
{
    let player = GetPlayer();
  let hideDraft = player.GetVar("hideDraft");
  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script38()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script39()
{
    var progressIframe = document.getElementsByTagName("iframe");
  if (parseInt(localStorage.getItem("currentSlide")) != 0) {
    setTimeout(() => {
      for (let i = 0; i < progressIframe.length; i++) {
        if (
          progressIframe[i].contentWindow.document.getElementsByTagName(
            "title"
          )[0].innerHTML == "progressWO"
        ) {
          progressIframe[i].contentWindow.IncreaseProgress("R");
          break;
        }
      }
    }, 250);
  }
}

function Script40()
{
  plyPause(false);
}

function Script41()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("R");
      break;
    }
  }
}

function Script42()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script43()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("W");
      break;
    }
  }
}

function Script44()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script45()
{
  plyPause(true);
}

function Script46()
{
    let player = GetPlayer();
  let hideDraft = player.GetVar("hideDraft");
  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script47()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script48()
{
    var progressIframe = document.getElementsByTagName("iframe");
  if (parseInt(localStorage.getItem("currentSlide")) != 0) {
    setTimeout(() => {
      for (let i = 0; i < progressIframe.length; i++) {
        if (
          progressIframe[i].contentWindow.document.getElementsByTagName(
            "title"
          )[0].innerHTML == "progressWO"
        ) {
          progressIframe[i].contentWindow.IncreaseProgress("R");
          break;
        }
      }
    }, 250);
  }
}

function Script49()
{
  plyPause(false);
}

function Script50()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("R");
      break;
    }
  }
}

function Script51()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script52()
{
    var progressIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < progressIframe.length; i++) {
    if (
      progressIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "progressWO"
    ) {
      progressIframe[i].contentWindow.IncreaseProgress("W");
      break;
    }
  }
}

function Script53()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script54()
{
  plyPause(true);
}

function Script55()
{
    let player = GetPlayer();
  let hideDraft = player.GetVar("hideDraft");
  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script56()
{
  plyPause(false);
}

function Script57()
{
  plyPause(true);
}

function Script58()
{
  plyPause(false);
}

function Script59()
{
  closeScreen();

}

function Script60()
{
  plyPause(true);
}

