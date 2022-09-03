function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5t27Lc4tYhx":
        Script1();
        break;
      case "6cugmXHCj3d":
        Script2();
        break;
      case "5f23E5r5wXO":
        Script3();
        break;
      case "6DCyUbAycud":
        Script4();
        break;
      case "5gi00WNFHsj":
        Script5();
        break;
      case "6h2C3xJ4KWE":
        Script6();
        break;
      case "6a8PgjIFUkr":
        Script7();
        break;
      case "5tC4Dxiydo9":
        Script8();
        break;
      case "68bgJun4H5y":
        Script9();
        break;
      case "6gLHOFeZmeq":
        Script10();
        break;
      case "6gkl3r5HTjk":
        Script11();
        break;
      case "65vIvnkfyOq":
        Script12();
        break;
      case "6OdUzZvNQ4S":
        Script13();
        break;
      case "6049Pny6Gfj":
        Script14();
        break;
      case "6HuN5iLU2bh":
        Script15();
        break;
      case "5nzC3IlA74F":
        Script16();
        break;
      case "5etsyzCYBXg":
        Script17();
        break;
      case "5XFDNiM0PDL":
        Script18();
        break;
      case "6q665EiWZB8":
        Script19();
        break;
      case "6IL8m10v2dX":
        Script20();
        break;
      case "6NbyU7t26aj":
        Script21();
        break;
      case "6LHeKJoowlN":
        Script22();
        break;
      case "6lest2htAKH":
        Script23();
        break;
      case "6PPifWSs9Jn":
        Script24();
        break;
      case "6nihZFNnc11":
        Script25();
        break;
      case "6OYEpGjuTKO":
        Script26();
        break;
      case "6hSYXGaTouJ":
        Script27();
        break;
      case "6jMW4gvFrhT":
        Script28();
        break;
      case "60RpLWmS17N":
        Script29();
        break;
      case "6hwexlgSgjR":
        Script30();
        break;
      case "6oErAQLtG0r":
        Script31();
        break;
      case "6doSNVicGcr":
        Script32();
        break;
      case "6q3R2erirSb":
        Script33();
        break;
      case "5qq7OLAPPxs":
        Script34();
        break;
      case "6XZk9UH0Ief":
        Script35();
        break;
      case "6f8iV8sCEsP":
        Script36();
        break;
      case "6JtHGpRFzgT":
        Script37();
        break;
      case "5zqe6LhI1fO":
        Script38();
        break;
      case "6FqSmM6sM1C":
        Script39();
        break;
      case "5rgErGxPr0y":
        Script40();
        break;
      case "6dVVVr1AaA1":
        Script41();
        break;
      case "5v7Lgjp41nZ":
        Script42();
        break;
      case "663uQRmfrzn":
        Script43();
        break;
      case "6Hzv2Q7lTk9":
        Script44();
        break;
      case "6V1wnPxZueQ":
        Script45();
        break;
      case "5bb51RhsJ5c":
        Script46();
        break;
      case "6bZ5UdAHVm9":
        Script47();
        break;
      case "6VfKcnAmXch":
        Script48();
        break;
      case "5UhuFlW5ov6":
        Script49();
        break;
      case "5nSKM1FRoBR":
        Script50();
        break;
      case "5vP65HHtu8p":
        Script51();
        break;
      case "5WXiRYfRnGs":
        Script52();
        break;
      case "69XwABd2kDL":
        Script53();
        break;
      case "5ncbFlEl2qP":
        Script54();
        break;
      case "6bbPV2zpw2a":
        Script55();
        break;
      case "620NxBC01nJ":
        Script56();
        break;
      case "5yIRWAqanaO":
        Script57();
        break;
      case "6QgMtrbDv3c":
        Script58();
        break;
      case "6RktlJYCDL1":
        Script59();
        break;
      case "5uwAZHI33zR":
        Script60();
        break;
      case "64wap0EXJcl":
        Script61();
        break;
      case "6WdZMz4Cwxq":
        Script62();
        break;
      case "5mTBnTIWfUl":
        Script63();
        break;
      case "5vR29OIx3Xs":
        Script64();
        break;
      case "6VkMLV9slhs":
        Script65();
        break;
      case "5bcGTxM650X":
        Script66();
        break;
      case "5ztvyyGHJ1G":
        Script67();
        break;
      case "5ju1gZT7xIv":
        Script68();
        break;
      case "60sZq4DXxyD":
        Script69();
        break;
      case "5vP2do2fVmm":
        Script70();
        break;
      case "5oGXgoafbA0":
        Script71();
        break;
      case "5VmErb06wpo":
        Script72();
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
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script5()
{
  plyPause(false);
}

function Script6()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script7()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script8()
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

function Script9()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script10()
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

function Script11()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script12()
{
  plyPause(true);
}

function Script13()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script14()
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

function Script15()
{
  plyPause(false);
}

function Script16()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script17()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script18()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script19()
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

function Script20()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script21()
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

function Script22()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script23()
{
  plyPause(true);
}

function Script24()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script25()
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

function Script26()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script27()
{
  plyPause(false);
}

function Script28()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script29()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script30()
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

function Script31()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script32()
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

function Script33()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script34()
{
  plyPause(true);
}

function Script35()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script36()
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

function Script37()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script38()
{
  plyPause(false);
}

function Script39()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script40()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
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
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script47()
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

function Script48()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script49()
{
  plyPause(false);
}

function Script50()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script51()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script52()
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

function Script53()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script54()
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

function Script55()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script56()
{
  plyPause(true);
}

function Script57()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script58()
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

function Script59()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script60()
{
  plyPause(false);
}

function Script61()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script62()
{
    let player = GetPlayer();

  var draftIframe = document.getElementsByTagName("iframe");
  for (let i = 0; i < draftIframe.length; i++) {
  let hideDraft = player.GetVar("hideDraft");
    if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == false
    ) {
      draftIframe[i].closest(".webobject").style.display = "none";
      draftIframe[i].contentWindow.document.body.style.opacity = "0";
      break;
    } else if (
      draftIframe[i].contentWindow.document.getElementsByTagName("title")[0]
        .innerHTML === "draftWO" &&
      hideDraft == true
    ) {
      draftIframe[i].closest(".webobject").style.display = "block";
      draftIframe[i].contentWindow.document.body.style.opacity = "1";
      break;
    }
  }
}

function Script63()
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

function Script64()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script65()
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

function Script66()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script67()
{
  plyPause(true);
}

function Script68()
{
  plyPause(false);
}

function Script69()
{
  closeScreen();

}

function Script70()
{
  plyPause(true);
}

function Script71()
{
  plyPause(false);
}

function Script72()
{
  plyPause(true);
}

