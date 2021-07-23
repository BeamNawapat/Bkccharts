(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var createTextVersion = require("textversionjs");

function Caller() {
  document.getElementById("chartdiv").innerHTML = "";
  document.getElementById("selectordiv").innerHTML = "";

  StopInterval();
  StopSelectInterval();
}

function Persian(callname, graph) {
  Caller();
  document.title = "Persian | Bkccharts";
  if (graph === "line") {
    call(
      "0x195e6075ce87146b8402f50ddda7d5705c90cd2d",
      "per",
      "PER",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0x195e6075ce87146b8402f50ddda7d5705c90cd2d",
      "per",
      "PER",
      callname,
      "candlestick"
    );
  }
}

function KKUB(callname, graph) {
  Caller();
  document.title = "KKUB | Bkccharts";
  if (graph === "line") {
    call(
      "0x19dade57B0BBCE7D5E859ba02846820f5c0c2b09",
      "kkub",
      "KKUB",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0x19dade57B0BBCE7D5E859ba02846820f5c0c2b09",
      "kkub",
      "KKUB",
      callname,
      "candlestick"
    );
  }
}

function WKUB(callname, graph) {
  Caller();
  document.title = "WKUB | Bkccharts";
  if (graph === "line") {
    call(
      "0xDa91a1aee4d7829c118cD6218CDA2cB2C56dd010",
      "wkub",
      "WKUB",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0xDa91a1aee4d7829c118cD6218CDA2cB2C56dd010",
      "wkub",
      "WKUB",
      callname,
      "candlestick"
    );
  }
}

function VON(callname, graph) {
  Caller();
  document.title = "Vonder | Bkccharts";
  if (graph === "line") {
    call(
      "0xF63CCF17D1edfAc627bB3a000DddeC6b25a01C9e",
      "von",
      "VON",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0xF63CCF17D1edfAc627bB3a000DddeC6b25a01C9e",
      "von",
      "VON",
      callname,
      "candlestick"
    );
  }
}

function MVP(callname, graph) {
  Caller();
  document.title = "MVP | Bkccharts";
  if (graph === "line") {
    call(
      "0x67eBD850304c70d983B2d1b93ea79c7CD6c3F6b5",
      "mvp",
      "MVP",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0x67eBD850304c70d983B2d1b93ea79c7CD6c3F6b5",
      "mvp",
      "MVP",
      callname,
      "candlestick"
    );
  }
}

function MKB(callname, graph) {
  Caller();
  document.title = "MKB | Bkccharts";
  if (graph === "line") {
    call(
      "0xDD7847deD760a8e7FB882B4A9B0e990323415ed9",
      "mkb",
      "MKB",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0xDD7847deD760a8e7FB882B4A9B0e990323415ed9",
      "mkb",
      "MKB",
      callname,
      "candlestick"
    );
  }
}

function kUST(callname, graph) {
  Caller();
  document.title = "kUST | Bkccharts";
  if (graph === "line") {
    call(
      "0x84dd607c9975AaF2cc358E05414B86e27A7c172b",
      "kust",
      "kUST",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0x84dd607c9975AaF2cc358E05414B86e27A7c172b",
      "kust",
      "kUST",
      callname,
      "candlestick"
    );
  }
}

function kMMP(callname, graph) {
  Caller();
  document.title = "kMMP | Bkccharts";
  if (graph === "line") {
    call(
      "0x2920712a36270ba6C48a3D23998D6CFbbe0A677B",
      "kmmp",
      "kMMP",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0x2920712a36270ba6C48a3D23998D6CFbbe0A677B",
      "kmmp",
      "kMMP",
      callname,
      "candlestick"
    );
  }
}

function kDAI(callname, graph) {
  Caller();
  document.title = "kDAI | Bkccharts";
  if (graph === "line") {
    call(
      "0x8bBB504B8a0e855f0F504F8D07061270aa40F928",
      "kdai",
      "kDAI",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0x8bBB504B8a0e855f0F504F8D07061270aa40F928",
      "kdai",
      "kDAI",
      callname,
      "candlestick"
    );
  }
}

function kCOUPON(callname, graph) {
  Caller();
  document.title = "kCOUPON | Bkccharts";
  if (graph === "line") {
    call(
      "0xED7B8606270295d1b3b60b99c051de4D7D2f7ff2",
      "kcoupon",
      "kCOUPON",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0xED7B8606270295d1b3b60b99c051de4D7D2f7ff2",
      "kcoupon",
      "kCOUPON",
      callname,
      "candlestick"
    );
  }
}

function kCake(callname, graph) {
  Caller();
  document.title = "kCake | Bkccharts";
  if (graph === "line") {
    call(
      "0xe5bdEe3A8c245d9027cD9a460179aF60fe978222",
      "kcake",
      "kCake",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0xe5bdEe3A8c245d9027cD9a460179aF60fe978222",
      "kcake",
      "kCake",
      callname,
      "candlestick"
    );
  }
}

function kBNB(callname, graph) {
  Caller();
  document.title = "kBNB | Bkccharts";
  if (graph === "line") {
    call(
      "0xD6aB567E5715b7419eB0949A811D00D40F887D73",
      "kbnb",
      "kBNB",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0xD6aB567E5715b7419eB0949A811D00D40F887D73",
      "kbnb",
      "kBNB",
      callname,
      "candlestick"
    );
  }
}

function GDR(callname, graph) {
  Caller();
  document.title = "GDR | Bkccharts";
  if (graph === "line") {
    call(
      "0x7E7a450fE8BA3d6f551B3912Fa2765F923b89C5D",
      "gdr",
      "GDR",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0x7E7a450fE8BA3d6f551B3912Fa2765F923b89C5D",
      "gdr",
      "GDR",
      callname,
      "candlestick"
    );
  }
}

function kDOLLY(callname, graph) {
  Caller();
  document.title = "kDOLLY | Bkccharts";
  if (graph === "line") {
    call(
      "0xDD2bb4e845Bd97580020d8F9F58Ec95Bf549c3D9",
      "kdolly",
      "kDOLLY",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0xDD2bb4e845Bd97580020d8F9F58Ec95Bf549c3D9",
      "kdolly",
      "kDOLLY",
      callname,
      "candlestick"
    );
  }
}

function Kuy(callname, graph) {
  Caller();
  document.title = "Kuy | Bkccharts";
  if (graph === "line") {
    call(
      "0x2009A60434dc8c8f772c9969d64868bDc2bF17B2",
      "kuy",
      "KUY",
      callname,
      "line"
    );
  }
  if (graph === "candlestick") {
    call(
      "0x2009A60434dc8c8f772c9969d64868bDc2bF17B2",
      "kuy",
      "KUY",
      callname,
      "candlestick"
    );
  }
}

function Yak(callname, graph) {
  Caller();
  document.title = "Yakk | Bkccharts";
  if (graph === "line") {
    call(
      "0xd3F61df898965c529a942985049E60592C451410",
      "yak",
      "YAKK",
      callname,
      "line"
    );
  }
  if (graph === "candlestick") {
    call(
      "0xd3F61df898965c529a942985049E60592C451410",
      "yak",
      "YAKK",
      callname,
      "candlestick"
    );
  }
}

function Aday(callname, graph) {
  Caller();
  document.title = "Aday | Bkccharts";
  if (graph === "line") {
    call(
      "0xDD2bb4e845Bd97580020d8F9F58Ec95Bf549c3D9",
      "aday",
      "ADAY",
      callname,
      "line"
    );
  }
  if (graph === "candlestick") {
    call(
      "0xDD2bb4e845Bd97580020d8F9F58Ec95Bf549c3D9",
      "aday",
      "ADAY",
      callname,
      "candlestick"
    );
  }
}

function Pet(callname, graph) {
  Caller();
  document.title = "Pet | Bkccharts";
  if (graph === "line") {
    call(
      "0xF63CCF17D1edfAc627bB3a000DddeC6b25a01C9e",
      "pet",
      "PET",
      callname,
      "line"
    );
  }
  if (graph === "candlestick") {
    call(
      "0xF63CCF17D1edfAc627bB3a000DddeC6b25a01C9e",
      "pet",
      "PET",
      callname,
      "candlestick"
    );
  }
}

function Tuk(callname, graph) {
  Caller();
  document.title = "Tuk | Bkccharts";
  if (graph === "line") {
    call(
      "0xAAD64d9b17f86b3ba803369b0d59392b3744ab13",
      "tuk",
      "TUK",
      callname,
      "line"
    );
  }

  if (graph === "candlestick") {
    call(
      "0xAAD64d9b17f86b3ba803369b0d59392b3744ab13",
      "tuk",
      "TUK",
      callname,
      "candlestick"
    );
  }
}

function First1(callname, graph) {
  Caller();
  document.title = "1First | Bkccharts";
  if (graph === "line") {
    call(
      "0x085AEf5BE089Ac245bCe436a3620f289E3f57e5e",
      "first1",
      "1FIRST",
      callname,
      "line"
    );
  }
  if (graph === "candlestick") {
    call(
      "0x085AEf5BE089Ac245bCe436a3620f289E3f57e5e",
      "first1",
      "1FIRST",
      callname,
      "candlestick"
    );
  }
}

function Hello(callname, graph) {
  Caller();
  document.title = "Hello | Bkccharts";
  document.getElementById("PROJECT").innerHTML = "Projects Hello";
  document.getElementById("PROJECTMESSAGE").innerHTML =
    "<span>มีการทำร้าน</span><span style='color:#FFFF80'> E-commerce</span>, <span style='color:#83FF8F'>การประมูลของต่างๆ</span> , <span style='color:#83DFFF'>สามารถฟาร์มร่วมกับเหรียญอื่น</span> เช่น <span style='color:#83FF8F'>Kuy</span>, <span style='color:#FF8387'>VON</span>";
  if (graph === "line") {
    call(
      "0x7B47523ebcBcAD9F15a09EA5cE927f665326204C",
      "hello",
      "Hello",
      callname,
      "line"
    );
  }
  if (graph === "candlestick") {
    call(
      "0x7B47523ebcBcAD9F15a09EA5cE927f665326204C",
      "hello",
      "Hello",
      callname,
      "candlestick"
    );
  }
}

function Fefc(callname, graph) {
  Caller();
  document.title = "Fefc | Bkccharts";
  if (graph === "line") {
    call(
      "0xc0BDC30fAF89082c6fAc4CFb9B836da91821C236",
      "48th",
      "FEFC",
      callname,
      "line"
    );
  }
  if (graph === "candlestick") {
    call(
      "0xc0BDC30fAF89082c6fAc4CFb9B836da91821C236",
      "48th",
      "FEFC",
      callname,
      "candlestick"
    );
  }
}

function Lucky(callname, graph) {
  Caller();
  document.title = "Lucky | Bkccharts";
  if (graph === "line") {
    call(
      "0xBD19370Bd3267b5526325BBCE1860e51a1350Cfc",
      "lucky",
      "LUCKY",
      callname,
      "line"
    );
  }
  if (graph === "candlestick") {
    call(
      "0xBD19370Bd3267b5526325BBCE1860e51a1350Cfc",
      "lucky",
      "LUCKY",
      callname,
      "candlestick"
    );
  }
}

setTimeout(() => {
  WKUB("", "candlestick");
  document.getElementById(
    "navbarDropdown"
  ).innerHTML = `<img width="25" src="img/usdgreen.png" alt="USD" /> USD`;
  document.getElementById(
    "navbargraph"
  ).innerHTML = `<img width="25" src="img/candle.png" alt="Candle" /> Candle`;
}, 100);

function StopSelectInterval() {}

/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

let Pricegetdata;
let datapush;
let pushdatareal;

function fromNow(value) {
  var valuechange = moment(value).add(543, "years").toDate();
  return valuechange;
}

function getDateTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }
  var dateTime = day + "/" + month + "/" + year + " " + hour + ":" + minute;
  return dateTime;
}

//! Call Function //
function call(address, name, caller, symbol, graphset, output) {
  chart = null;

  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  var datanew = [];

  // example usage: realtime clock
  setInterval(function () {
    currentTime = getDateTime();
    currentTime;
  }, 10000);

  var addressrouter;
  var url = "https://api.bkc.loremboard.finance/prices";

  var url2 = "https://nodeserverwithcatcrypto.herokuapp.com/api/" + name;

  const jsonput = [];

  var symboladdress = "$";
  var symaddgraph = "$";

  if (symbol === "thb") {
    var symboladdress = "฿";
    var symaddgraph = "฿";
  }

  var price = 0;

  setTimeout(() => {
    fetch("https://api.bkc.loremboard.finance/fiat", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        price = data.rates.THB;
      });
  }, 100);

  setInterval(function () {
    fetch("https://api.bkc.loremboard.finance/fiat", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        price = data.rates.THB;
      });
  }, 5000);

  setTimeout(() => {
    fetch(url, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        var callerdata;
        if (caller === "PER") {
          var callerdata = data.prices.PER;
        }
        if (caller === "KUY") {
          var callerdata = data.prices.KUY;
        }
        if (caller === "YAKK") {
          var callerdata = data.prices.YAKK;
        }
        if (caller === "ADAY") {
          var callerdata = data.prices.ADAY;
        }
        if (caller === "PET") {
          var callerdata = data.prices.PET;
        }
        if (caller === "TUK") {
          var callerdata = data.prices.TUK;
        }
        if (caller === "1FIRST") {
          var callerdata = data.prices["1FIRST"];
        }
        if (caller === "Hello") {
          var callerdata = data.prices.Hello;
        }
        if (caller === "FEFC") {
          var callerdata = data.prices.FEFC;
        }
        if (caller === "LUCKY") {
          var callerdata = data.prices.LUCKY;
        }
        if (caller === "VON") {
          var callerdata = data.prices.VON;
        }
        if (caller === "KKUB") {
          var callerdata = data.prices.KKUB;
        }
        if (caller === "MVP") {
          var callerdata = data.prices.MVP;
        }
        if (caller === "MKB") {
          var callerdata = data.prices.MKB;
        }
        if (caller === "kUST") {
          var callerdata = data.prices.kUST;
        }
        if (caller === "kMMP") {
          var callerdata = data.prices.kMMP;
        }
        if (caller === "kDAI") {
          var callerdata = data.prices.kDAI;
        }
        if (caller === "kCOUPON") {
          var callerdata = data.prices.kCOUPON;
        }
        if (caller === "kCake") {
          var callerdata = data.prices.kCake;
        }
        if (caller === "kBNB") {
          var callerdata = data.prices.kBNB;
        }
        if (caller === "GDR") {
          var callerdata = data.prices.GDR;
        }
        if (caller === "kDOLLY") {
          var callerdata = data.prices.kDOLLY;
        }
        if (caller === "WKUB") {
          var callerdata = data.prices.WKUB;
        }

        if (symbol === "thb") {
          document.getElementById("PRICE").innerHTML =
            "Price : " + callerdata * price + " " + symboladdress;
        } else {
          document.getElementById("PRICE").innerHTML =
            "Price : " + callerdata + " " + symboladdress;
        }
      });
  }, 1000);

  pushdatareal = setTimeout(() => {
    fetch(url2, {
      method: "GET",
      headers: {
        Authorization: "Basic aGVyb2t1OTk4OjExMTN6YTk2c2Rzcw=="
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((item) => {
          if (symbol === "thb") {
            jsonput.push({
              date: fromNow(item.date),
              price: item.close * price,
              close: item.close * price,
              open: item.open * price,
              low: item.low * price,
              high: item.high * price
            });
          } else {
            jsonput.push({
              date: fromNow(item.date),
              price: item.close,
              close: item.close,
              open: item.open,
              low: item.low,
              high: item.high
            });
          }
        });
      });
  }, 1000);

  Pricegetdata = setInterval(function () {
    fetch(url, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        var callerdata;
        if (caller === "PER") {
          var callerdata = data.prices.PER;
        }
        if (caller === "KUY") {
          var callerdata = data.prices.KUY;
        }
        if (caller === "YAKK") {
          var callerdata = data.prices.YAKK;
        }
        if (caller === "ADAY") {
          var callerdata = data.prices.ADAY;
        }
        if (caller === "PET") {
          var callerdata = data.prices.PET;
        }
        if (caller === "TUK") {
          var callerdata = data.prices.TUK;
        }
        if (caller === "1FIRST") {
          var callerdata = data.prices["1FIRST"];
        }
        if (caller === "Hello") {
          var callerdata = data.prices.Hello;
        }
        if (caller === "FEFC") {
          var callerdata = data.prices.FEFC;
        }
        if (caller === "LUCKY") {
          var callerdata = data.prices.LUCKY;
        }
        if (caller === "VON") {
          var callerdata = data.prices.VON;
        }
        if (caller === "KKUB") {
          var callerdata = data.prices.KKUB;
        }
        if (caller === "MVP") {
          var callerdata = data.prices.MVP;
        }
        if (caller === "MKB") {
          var callerdata = data.prices.MKB;
        }
        if (caller === "kUST") {
          var callerdata = data.prices.kUST;
        }
        if (caller === "kMMP") {
          var callerdata = data.prices.kMMP;
        }
        if (caller === "kDAI") {
          var callerdata = data.prices.kDAI;
        }
        if (caller === "kCOUPON") {
          var callerdata = data.prices.kCOUPON;
        }
        if (caller === "kCake") {
          var callerdata = data.prices.kCake;
        }
        if (caller === "kBNB") {
          var callerdata = data.prices.kBNB;
        }
        if (caller === "GDR") {
          var callerdata = data.prices.GDR;
        }
        if (caller === "kDOLLY") {
          var callerdata = data.prices.kDOLLY;
        }
        if (caller === "WKUB") {
          var callerdata = data.prices.WKUB;
        }

        if (symbol === "thb") {
          document.getElementById("PRICE").innerHTML =
            "Price : " + callerdata * price + " " + symboladdress;
        } else {
          document.getElementById("PRICE").innerHTML =
            "Price : " + callerdata + " " + symboladdress;
        }
      });
  }, 5000);

  datapush = setInterval(function () {
    var date = new Date();
    if (date.getMinutes() % 5 == 0) {
      fetch(url2, {
        method: "GET",
        headers: {
          Authorization: "Basic aGVyb2t1OTk4OjExMTN6YTk2c2Rzcw=="
        }
      })
        .then((response) => response.json())
        .then((data) => {
          const jsonput = [];
          const newData = data.map((item) => {
            if (symbol === "thb") {
              jsonput.push({
                date: fromNow(item.date),
                close: item.close * price,
                open: item.open * price,
                low: item.low * price,
                high: item.high * price
              });
            } else {
              jsonput.push({
                date: fromNow(item.date),
                close: item.close,
                open: item.open,
                low: item.low,
                high: item.high
              });
            }
          });
        });
    }
  }, 60000);

  var chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.paddingRight = 20;
  chart.responsive.enabled = true;
  chart.responsive.rules.push({
    relevant: function (target) {
      if (target.pixelWidth <= 400) {
        return true;
      }
      return false;
    },
    state: function (target, stateId) {
      // Code that creates a new SpriteState object to be
      // applied to target if Rule is "relevant"
      return;
    }
  });

  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.grid.template.location = 0;
  dateAxis.minZoomCount = 5;

  // this makes the data to be grouped
  dateAxis.groupData = true;
  dateAxis.groupCount = 500;
  dateAxis.renderer.inside = true;

  setTimeout(function () {
    chart.data = jsonput;
  }, 5000);

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.numberFormatter = new am4core.NumberFormatter();
  valueAxis.numberFormatter.numberFormat = "#.#################";
  if (graphset === "line") {
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "price";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.fillOpacity = 1;
    series.strokeWidth = 2.5;
    series.tensionX = 0.8;
    series.tooltip.label.textAlign = "middle";
    series.tooltipText =
      "{price.formatNumber('#.###############')} " + symaddgraph;
  }

  if (graphset === "candlestick") {
    var series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "close";
    series.dataFields.openValueY = "open";
    series.dataFields.lowValueY = "low";
    series.dataFields.highValueY = "high";
    series.tooltipText = `[bold]{date.formatDate('dd/MM/yyyy HH:mm')}[/]
Open: {open.formatNumber('#.##################')} ${symaddgraph}
High: {high.formatNumber('#.##################')} ${symaddgraph}
Low: {low.formatNumber('#.##################')} ${symaddgraph}
Close: {close.formatNumber('#.##################')} ${symaddgraph}`;

    series.dropFromOpenState.properties.fill = am4core.color("#ef5350");
    series.dropFromOpenState.properties.stroke = am4core.color("#ef5350");

    series.riseFromOpenState.properties.fill = am4core.color("#26a69a");
    series.riseFromOpenState.properties.stroke = am4core.color("#26a69a");
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.fillOpacity = 1;
    series.tooltip.label.textAlign = "middle";
  }

  chart.cursor = new am4charts.XYCursor();
  chart.cursor.xAxis = dateAxis;
  chart.exporting.menu = new am4core.ExportMenu();
  chart.exporting.menu.items = [
    {
      label: "<span class='whitess exportset'>Export</span>",
      menu: [
        {
          type: "png",
          label: "<span class='whitess'>PNG</span>"
        },
        {
          type: "json",
          label: "<span class='whitess'>JSON</span>"
        },
        {
          label: "<span class='whitess'>PDF</span>",
          type: "pdf"
        }
      ]
    }
  ];
  chart.exporting.menu.paddingRight = 20;

  chart.exporting.menu.align = "left";
  chart.exporting.menu.verticalAlign = "top";
  chart.exporting.formatOptions.getKey("pdf").addURL = true;
  chart.exporting.useWebFonts = false;
  var pdf = chart.exporting.formatOptions.getKey("pdf");
  pdf.font = am4fonts_sarabun_thai;
  chart.exporting.webFontFilter = /Mali/;

  var detailproject = document.getElementById("PROJECTMESSAGE").innerHTML;
  var pricepro = document.getElementById("PRICE").innerHTML;

  chart.exporting.adapter.add("pdfmakeDocument", function (pdf, target) {
    // pdf.doc holds the pdfmake document definition
    var pricepro = document.getElementById("PRICE").innerHTML;
    var detailproject = document.getElementById("PROJECTMESSAGE").innerHTML;
    var textVersion = createTextVersion(detailproject);
    console.log(detailproject)
    console.log(textVersion)

    pdf.doc.content.unshift({
      text: "Charts Price of " + caller,
      margin: [00, 30],
      style: {
        fontSize: 20,
        bold: true
      }
    });

    pdf.doc.content.push({
      alignment: "center",
      columns: [
        {
          text: pricepro,
          align: "center"
        }
      ],
      columnGap: 20,
      margin: [0, 30]
    });

    pdf.doc.content.push({
      alignment: "justify",
      columns: [
        {
          text: "Project Details\n" + textVersion,
          align: "center"
        }
      ],
      columnGap: 20
    });

    return pdf;
  });

  valueAxis.cursorTooltipEnabled = true;
  valueAxis.renderer.labels.template.adapter.add("text", function (text) {
    return text + " " + symaddgraph;
  });

  var scrollbarX = new am4core.Scrollbar();
  scrollbarX.marginBottom = 20;
  chart.scrollbarX = scrollbarX;
  chart.scrollbarX.startGrip.disabled = true;
  chart.scrollbarX.endGrip.disabled = true;
  chart.scrollbarX.background.fill = am4core.color("#fff");
  chart.scrollbarX.thumb.background.fill = am4core.color("#fff");
  chart.scrollbarX.startGrip.background.fill = am4core.color("#fff");
  chart.scrollbarX.endGrip.background.fill = am4core.color("#fff");
  chart.scrollbarX.stroke = am4core.color("#000");

  chart.scrollbarX.thumb.background.states.getKey("hover").properties.fill =
    am4core.color("#7ACBFF");
  chart.scrollbarX.thumb.background.states.getKey("down").properties.fill =
    am4core.color("#7ACBFF");
  // Add range selector
  var selector = new am4plugins_rangeSelector.DateAxisRangeSelector();
  selector.container = document.getElementById("selectordiv");
  selector.axis = dateAxis;
  selector.inputDateFormat = "dd/MM/yyyy HH:mm";

  chart.events.on("datavalidated", function (ev) {
    selector.setPeriodInterval({ timeUnit: "day", count: 1 });
  });

  selector.periods.unshift({
    name: "1W",
    interval: { timeUnit: "week", count: 1 }
  });
  selector.periods.unshift({
    name: "1D",
    interval: { timeUnit: "day", count: 1 }
  });
  selector.periods.unshift({
    name: "4h",
    interval: { timeUnit: "hour", count: 4 }
  });
  selector.periods.unshift({
    name: "1h",
    interval: { timeUnit: "hour", count: 1 }
  });
  selector.periods.unshift({
    name: "30m",
    interval: { timeUnit: "minute", count: 30 }
  });
  selector.periods.unshift({
    name: "15m",
    interval: { timeUnit: "minute", count: 15 }
  });
  selector.periods.unshift({
    name: "10m",
    interval: { timeUnit: "minute", count: 10 }
  });
  selector.periods.unshift({
    name: "5m",
    interval: { timeUnit: "minute", count: 5 }
  });

  chart.preloader.disabled = true;

  var indicator;
  var indicatorInterval;

  function showIndicator() {
    if (!indicator) {
      indicator = chart.tooltipContainer.createChild(am4core.Container);
      indicator.background.fill = am4core.color("#fff");
      indicator.background.fillOpacity = 0.8;
      indicator.width = am4core.percent(100);
      indicator.height = am4core.percent(100);

      var indicatorLabel = indicator.createChild(am4core.Label);
      indicatorLabel.text = "Loading ...";
      indicatorLabel.align = "center";
      indicatorLabel.valign = "middle";
      indicatorLabel.fontSize = 20;
      indicatorLabel.dy = 50;

      var hourglass = indicator.createChild(am4core.Image);
      hourglass.href = "./img/logo/googleload.svg";
      hourglass.align = "center";
      hourglass.valign = "middle";
      hourglass.horizontalCenter = "middle";
      hourglass.verticalCenter = "middle";
      hourglass.scale = 0.7;
    }

    indicator.hide(0);
    indicator.show();

    clearInterval(indicatorInterval);

    indicatorInterval = setInterval(function () {
      hourglass.animate(
        [
          {
            from: 0,
            to: 360,
            property: "rotation"
          }
        ],
        1000
      );
    }, 2000);
  }

  function hideIndicator() {
    indicator.hide();
    clearInterval(indicatorInterval);
  }

  showIndicator();
  setTimeout(() => {
    hideIndicator();
  }, 4800);
}

function StopInterval() {
  clearInterval(pushdatareal);
  clearInterval(datapush);
  clearInterval(Pricegetdata);
}

$("#setselector").change(function () {
  var check = document.getElementById("navbargraph").innerText;
  var symbol = document.getElementById("navbarDropdown").innerText;

  if (check === " Candle") {
    //Y USD CANDLE//
    if (symbol === " USD") {
      if ($(this).val() === "PER") {
        Persian("", "candlestick");
      }
      if ($(this).val() === "KUY") {
        Kuy("", "candlestick");
      }
      if ($(this).val() === "YAKK") {
        Yak("", "candlestick");
      }
      if ($(this).val() === "ADAY") {
        Aday("", "candlestick");
      }
      if ($(this).val() === "PET") {
        Pet("", "candlestick");
      }
      if ($(this).val() === "TUK") {
        Tuk("", "candlestick");
      }
      if ($(this).val() === "1FIRST") {
        First1("", "candlestick");
      }
      if ($(this).val() === "HELLO") {
        Hello("", "candlestick");
      }
      if ($(this).val() === "FEFC") {
        Fefc("", "candlestick");
      }
      if ($(this).val() === "LUCKY") {
        Lucky("", "candlestick");
      }
      if ($(this).val() === "VON") {
        VON("", "candlestick");
      }
      if ($(this).val() === "KKUB") {
        KKUB("", "candlestick");
      }
      if ($(this).val() === "MVP") {
        MVP("", "candlestick");
      }
      if ($(this).val() === "MKB") {
        MKB("", "candlestick");
      }
      if ($(this).val() === "kUST") {
        kUST("", "candlestick");
      }
      if ($(this).val() === "kMMP") {
        kMMP("", "candlestick");
      }
      if ($(this).val() === "kDAI") {
        kDAI("", "candlestick");
      }
      if ($(this).val() === "kCOUPON") {
        kCOUPON("", "candlestick");
      }
      if ($(this).val() === "kCake") {
        kCake("", "candlestick");
      }
      if ($(this).val() === "kBNB") {
        kBNB("", "candlestick");
      }
      if ($(this).val() === "GDR") {
        GDR("", "candlestick");
      }
      if ($(this).val() === "kDOLLY") {
        kDOLLY("", "candlestick");
      }
      if ($(this).val() === "WKUB") {
        WKUB("", "candlestick");
      }
    }
    // Y THB CANDLE //
    if (symbol === " THB") {
      if ($(this).val() === "PER") {
        Persian("thb", "candlestick");
      }
      if ($(this).val() === "KUY") {
        Kuy("thb", "candlestick");
      }
      if ($(this).val() === "YAKK") {
        Yak("thb", "candlestick");
      }
      if ($(this).val() === "ADAY") {
        Aday("thb", "candlestick");
      }
      if ($(this).val() === "PET") {
        Pet("thb", "candlestick");
      }
      if ($(this).val() === "TUK") {
        Tuk("thb", "candlestick");
      }
      if ($(this).val() === "1FIRST") {
        First1("thb", "candlestick");
      }
      if ($(this).val() === "HELLO") {
        Hello("thb", "candlestick");
      }
      if ($(this).val() === "FEFC") {
        Fefc("thb", "candlestick");
      }
      if ($(this).val() === "LUCKY") {
        Lucky("thb", "candlestick");
      }
      if ($(this).val() === "VON") {
        VON("thb", "candlestick");
      }
      if ($(this).val() === "KKUB") {
        KKUB("thb", "candlestick");
      }
      if ($(this).val() === "MVP") {
        MVP("thb", "candlestick");
      }
      if ($(this).val() === "MKB") {
        MKB("thb", "candlestick");
      }
      if ($(this).val() === "kUST") {
        kUST("thb", "candlestick");
      }
      if ($(this).val() === "kMMP") {
        kMMP("thb", "candlestick");
      }
      if ($(this).val() === "kDAI") {
        kDAI("thb", "candlestick");
      }
      if ($(this).val() === "kCOUPON") {
        kCOUPON("thb", "candlestick");
      }
      if ($(this).val() === "kCake") {
        kCake("thb", "candlestick");
      }
      if ($(this).val() === "kBNB") {
        kBNB("thb", "candlestick");
      }
      if ($(this).val() === "GDR") {
        GDR("thb", "candlestick");
      }
      if ($(this).val() === "kDOLLY") {
        kDOLLY("thb", "candlestick");
      }
      if ($(this).val() === "WKUB") {
        WKUB("thb", "candlestick");
      }
    }
  }

  if (check === " Line") {
    //Y USD LINE//
    if (symbol === " USD") {
      if ($(this).val() === "PER") {
        Persian("", "line");
      }
      if ($(this).val() === "KUY") {
        Kuy("", "line");
      }
      if ($(this).val() === "YAKK") {
        Yak("", "line");
      }
      if ($(this).val() === "ADAY") {
        Aday("", "line");
      }
      if ($(this).val() === "PET") {
        Pet("", "line");
      }
      if ($(this).val() === "TUK") {
        Tuk("", "line");
      }
      if ($(this).val() === "1FIRST") {
        First1("", "line");
      }
      if ($(this).val() === "HELLO") {
        Hello("", "line");
      }
      if ($(this).val() === "FEFC") {
        Fefc("", "line");
      }
      if ($(this).val() === "LUCKY") {
        Lucky("", "line");
      }
      if ($(this).val() === "VON") {
        VON("", "line");
      }
      if ($(this).val() === "KKUB") {
        KKUB("", "line");
      }
      if ($(this).val() === "MVP") {
        MVP("", "line");
      }
      if ($(this).val() === "MKB") {
        MKB("", "line");
      }
      if ($(this).val() === "kUST") {
        kUST("", "line");
      }
      if ($(this).val() === "kMMP") {
        kMMP("", "line");
      }
      if ($(this).val() === "kDAI") {
        kDAI("", "line");
      }
      if ($(this).val() === "kCOUPON") {
        kCOUPON("", "line");
      }
      if ($(this).val() === "kCake") {
        kCake("", "line");
      }
      if ($(this).val() === "kBNB") {
        kBNB("", "line");
      }
      if ($(this).val() === "GDR") {
        GDR("", "line");
      }
      if ($(this).val() === "kDOLLY") {
        kDOLLY("", "line");
      }
      if ($(this).val() === "WKUB") {
        WKUB("", "line");
      }
    }

    // Y THB LINE //
    if (symbol === " THB") {
      if ($(this).val() === "PER") {
        Persian("thb", "line");
      }
      if ($(this).val() === "KUY") {
        Kuy("thb", "line");
      }
      if ($(this).val() === "YAKK") {
        Yak("thb", "line");
      }
      if ($(this).val() === "ADAY") {
        Aday("thb", "line");
      }
      if ($(this).val() === "PET") {
        Pet("thb", "line");
      }
      if ($(this).val() === "TUK") {
        Tuk("thb", "line");
      }
      if ($(this).val() === "1FIRST") {
        First1("thb", "line");
      }
      if ($(this).val() === "HELLO") {
        Hello("thb", "line");
      }
      if ($(this).val() === "FEFC") {
        Fefc("thb", "line");
      }
      if ($(this).val() === "LUCKY") {
        Lucky("thb", "line");
      }
      if ($(this).val() === "VON") {
        VON("thb", "line");
      }
      if ($(this).val() === "KKUB") {
        KKUB("thb", "line");
      }
      if ($(this).val() === "MVP") {
        MVP("thb", "line");
      }
      if ($(this).val() === "MKB") {
        MKB("thb", "line");
      }
      if ($(this).val() === "kUST") {
        kUST("thb", "line");
      }
      if ($(this).val() === "kMMP") {
        kMMP("thb", "line");
      }
      if ($(this).val() === "kDAI") {
        kDAI("thb", "line");
      }
      if ($(this).val() === "kCOUPON") {
        kCOUPON("thb", "line");
      }
      if ($(this).val() === "kCake") {
        kCake("thb", "line");
      }
      if ($(this).val() === "kBNB") {
        kBNB("thb", "line");
      }
      if ($(this).val() === "GDR") {
        GDR("thb", "line");
      }
      if ($(this).val() === "kDOLLY") {
        kDOLLY("thb", "line");
      }
      if ($(this).val() === "WKUB") {
        WKUB("thb", "line");
      }
    }
  }
});

function candle() {
  var valoftokens = document.getElementById("setselector").value;
  var symbol = document.getElementById("navbarDropdown").innerText;
  document.getElementById(
    "navbargraph"
  ).innerHTML = `<img width="25" src="img/candle.png" alt="Candle" /> Candle`;

  //Y USD CANDLE//
  if (symbol === " USD") {
    if (valoftokens === "PER") {
      Persian("", "candlestick");
    }
    if (valoftokens === "KUY") {
      Kuy("", "candlestick");
    }
    if (valoftokens === "YAKK") {
      Yak("", "candlestick");
    }
    if (valoftokens === "ADAY") {
      Aday("", "candlestick");
    }
    if (valoftokens === "PET") {
      Pet("", "candlestick");
    }
    if (valoftokens === "TUK") {
      Tuk("", "candlestick");
    }
    if (valoftokens === "1FIRST") {
      First1("", "candlestick");
    }
    if (valoftokens === "Hello") {
      Hello("", "candlestick");
    }
    if (valoftokens === "FEFC") {
      Fefc("", "candlestick");
    }
    if (valoftokens === "LUCKY") {
      Lucky("", "candlestick");
    }
    if (valoftokens === "VON") {
      VON("", "candlestick");
    }
    if (valoftokens === "KKUB") {
      KKUB("", "candlestick");
    }
    if (valoftokens === "MVP") {
      MVP("", "candlestick");
    }
    if (valoftokens === "MKB") {
      MKB("", "candlestick");
    }
    if (valoftokens === "kUST") {
      kUST("", "candlestick");
    }
    if (valoftokens === "kMMP") {
      kMMP("", "candlestick");
    }
    if (valoftokens === "kDAI") {
      kDAI("", "candlestick");
    }
    if (valoftokens === "kCOUPON") {
      kCOUPON("", "candlestick");
    }
    if (valoftokens === "kCake") {
      kCake("", "candlestick");
    }
    if (valoftokens === "kBNB") {
      kBNB("", "candlestick");
    }
    if (valoftokens === "GDR") {
      GDR("", "candlestick");
    }
    if (valoftokens === "kDOLLY") {
      kDOLLY("", "candlestick");
    }
    if (valoftokens === "WKUB") {
      WKUB("", "candlestick");
    }
  }
  // Y THB CANDLE //
  if (symbol === " THB") {
    if (valoftokens === "PER") {
      Persian("thb", "candlestick");
    }
    if (valoftokens === "KUY") {
      Kuy("thb", "candlestick");
    }
    if (valoftokens === "YAKK") {
      Yak("thb", "candlestick");
    }
    if (valoftokens === "ADAY") {
      Aday("thb", "candlestick");
    }
    if (valoftokens === "PET") {
      Pet("thb", "candlestick");
    }
    if (valoftokens === "TUK") {
      Tuk("thb", "candlestick");
    }
    if (valoftokens === "1FIRST") {
      First1("thb", "candlestick");
    }
    if (valoftokens === "Hello") {
      Hello("thb", "candlestick");
    }
    if (valoftokens === "FEFC") {
      Fefc("thb", "candlestick");
    }
    if (valoftokens === "LUCKY") {
      Lucky("thb", "candlestick");
    }
    if (valoftokens === "VON") {
      VON("thb", "candlestick");
    }
    if (valoftokens === "KKUB") {
      KKUB("thb", "candlestick");
    }
    if (valoftokens === "MVP") {
      MVP("thb", "candlestick");
    }
    if (valoftokens === "MKB") {
      MKB("thb", "candlestick");
    }
    if (valoftokens === "kUST") {
      kUST("thb", "candlestick");
    }
    if (valoftokens === "kMMP") {
      kMMP("thb", "candlestick");
    }
    if (valoftokens === "kDAI") {
      kDAI("thb", "candlestick");
    }
    if (valoftokens === "kCOUPON") {
      kCOUPON("thb", "candlestick");
    }
    if (valoftokens === "kCake") {
      kCake("thb", "candlestick");
    }
    if (valoftokens === "kBNB") {
      kBNB("thb", "candlestick");
    }
    if (valoftokens === "GDR") {
      GDR("thb", "candlestick");
    }
    if (valoftokens === "kDOLLY") {
      kDOLLY("thb", "candlestick");
    }
    if (valoftokens === "WKUB") {
      WKUB("thb", "candlestick");
    }
  }
}

function line() {
  var valoftokens = document.getElementById("setselector").value;
  var symbol = document.getElementById("navbarDropdown").innerText;
  document.getElementById(
    "navbargraph"
  ).innerHTML = `<img width="25" src="img/line.png" alt="Line" /> Line`;

  //Y USD LINE//
  if (symbol === " USD") {
    if (valoftokens === "PER") {
      Persian("", "line");
    }
    if (valoftokens === "KUY") {
      Kuy("", "line");
    }
    if (valoftokens === "YAKK") {
      Yak("", "line");
    }
    if (valoftokens === "ADAY") {
      Aday("", "line");
    }
    if (valoftokens === "PET") {
      Pet("", "line");
    }
    if (valoftokens === "TUK") {
      Tuk("", "line");
    }
    if (valoftokens === "1FIRST") {
      First1("", "line");
    }
    if (valoftokens === "Hello") {
      Hello("", "line");
    }
    if (valoftokens === "FEFC") {
      Fefc("", "line");
    }
    if (valoftokens === "LUCKY") {
      Lucky("", "line");
    }
    if (valoftokens === "VON") {
      VON("", "line");
    }
    if (valoftokens === "KKUB") {
      KKUB("", "line");
    }
    if (valoftokens === "MVP") {
      MVP("", "line");
    }
    if (valoftokens === "MKB") {
      MKB("", "line");
    }
    if (valoftokens === "kUST") {
      kUST("", "line");
    }
    if (valoftokens === "kMMP") {
      kMMP("", "line");
    }
    if (valoftokens === "kDAI") {
      kDAI("", "line");
    }
    if (valoftokens === "kCOUPON") {
      kCOUPON("", "line");
    }
    if (valoftokens === "kCake") {
      kCake("", "line");
    }
    if (valoftokens === "kBNB") {
      kBNB("", "line");
    }
    if (valoftokens === "GDR") {
      GDR("", "line");
    }
    if (valoftokens === "kDOLLY") {
      kDOLLY("", "line");
    }
    if (valoftokens === "WKUB") {
      WKUB("", "line");
    }
  }
  // Y THB LINE //
  if (symbol === " THB") {
    if (valoftokens === "PER") {
      Persian("thb", "line");
    }
    if (valoftokens === "KUY") {
      Kuy("thb", "line");
    }
    if (valoftokens === "YAKK") {
      Yak("thb", "line");
    }
    if (valoftokens === "ADAY") {
      Aday("thb", "line");
    }
    if (valoftokens === "PET") {
      Pet("thb", "line");
    }
    if (valoftokens === "TUK") {
      Tuk("thb", "line");
    }
    if (valoftokens === "1FIRST") {
      First1("thb", "line");
    }
    if (valoftokens === "Hello") {
      Hello("thb", "line");
    }
    if (valoftokens === "FEFC") {
      Fefc("thb", "line");
    }
    if (valoftokens === "LUCKY") {
      Lucky("thb", "line");
    }
    if (valoftokens === "VON") {
      VON("thb", "line");
    }
    if (valoftokens === "KKUB") {
      KKUB("thb", "line");
    }
    if (valoftokens === "MVP") {
      MVP("thb", "line");
    }
    if (valoftokens === "MKB") {
      MKB("thb", "line");
    }
    if (valoftokens === "kUST") {
      kUST("thb", "line");
    }
    if (valoftokens === "kMMP") {
      kMMP("thb", "line");
    }
    if (valoftokens === "kDAI") {
      kDAI("thb", "line");
    }
    if (valoftokens === "kCOUPON") {
      kCOUPON("thb", "line");
    }
    if (valoftokens === "kCake") {
      kCake("thb", "line");
    }
    if (valoftokens === "kBNB") {
      kBNB("thb", "line");
    }
    if (valoftokens === "GDR") {
      GDR("thb", "line");
    }
    if (valoftokens === "kDOLLY") {
      kDOLLY("thb", "line");
    }
    if (valoftokens === "WKUB") {
      WKUB("thb", "line");
    }
  }
}

function USD() {
  document.getElementById(
    "navbarDropdown"
  ).innerHTML = `<img width="25" src="img/usdgreen.png" alt="USD" /> USD`;
  var symbol = document.getElementById("navbarDropdown").innerText;
  var valoftokens = document.getElementById("setselector").value;
  var checkgrapher = document.getElementById("navbargraph").innerText;
  //Y USD LINE//
  if (checkgrapher === " Line") {
    if (valoftokens === "PER") {
      Persian("", "line");
    }
    if (valoftokens === "KUY") {
      Kuy("", "line");
    }
    if (valoftokens === "YAKK") {
      Yak("", "line");
    }
    if (valoftokens === "ADAY") {
      Aday("", "line");
    }
    if (valoftokens === "PET") {
      Pet("", "line");
    }
    if (valoftokens === "TUK") {
      Tuk("", "line");
    }
    if (valoftokens === "1FIRST") {
      First1("", "line");
    }
    if (valoftokens === "Hello") {
      Hello("", "line");
    }
    if (valoftokens === "FEFC") {
      Fefc("", "line");
    }
    if (valoftokens === "LUCKY") {
      Lucky("", "line");
    }
    if (valoftokens === "VON") {
      VON("", "line");
    }
    if (valoftokens === "KKUB") {
      KKUB("", "line");
    }
    if (valoftokens === "MVP") {
      MVP("", "line");
    }
    if (valoftokens === "MKB") {
      MKB("", "line");
    }
    if (valoftokens === "kUST") {
      kUST("", "line");
    }
    if (valoftokens === "kMMP") {
      kMMP("", "line");
    }
    if (valoftokens === "kDAI") {
      kDAI("", "line");
    }
    if (valoftokens === "kCOUPON") {
      kCOUPON("", "line");
    }
    if (valoftokens === "kCake") {
      kCake("", "line");
    }
    if (valoftokens === "kBNB") {
      kBNB("", "line");
    }
    if (valoftokens === "GDR") {
      GDR("", "line");
    }
    if (valoftokens === "kDOLLY") {
      kDOLLY("", "line");
    }
    if (valoftokens === "WKUB") {
      WKUB("", "line");
    }
  }
  if (checkgrapher === " Candle") {
    if (valoftokens === "PER") {
      Persian("", "candlestick");
    }
    if (valoftokens === "KUY") {
      Kuy("", "candlestick");
    }
    if (valoftokens === "YAKK") {
      Yak("", "candlestick");
    }
    if (valoftokens === "ADAY") {
      Aday("", "candlestick");
    }
    if (valoftokens === "PET") {
      Pet("", "candlestick");
    }
    if (valoftokens === "TUK") {
      Tuk("", "candlestick");
    }
    if (valoftokens === "1FIRST") {
      First1("", "candlestick");
    }
    if (valoftokens === "Hello") {
      Hello("", "candlestick");
    }
    if (valoftokens === "FEFC") {
      Fefc("", "candlestick");
    }
    if (valoftokens === "LUCKY") {
      Lucky("", "candlestick");
    }
    if (valoftokens === "VON") {
      VON("", "candlestick");
    }
    if (valoftokens === "KKUB") {
      KKUB("", "candlestick");
    }
    if (valoftokens === "MVP") {
      MVP("", "candlestick");
    }
    if (valoftokens === "MKB") {
      MKB("", "candlestick");
    }
    if (valoftokens === "kUST") {
      kUST("", "candlestick");
    }
    if (valoftokens === "kMMP") {
      kMMP("", "candlestick");
    }
    if (valoftokens === "kDAI") {
      kDAI("", "candlestick");
    }
    if (valoftokens === "kCOUPON") {
      kCOUPON("", "candlestick");
    }
    if (valoftokens === "kCake") {
      kCake("", "candlestick");
    }
    if (valoftokens === "kBNB") {
      kBNB("", "candlestick");
    }
    if (valoftokens === "GDR") {
      GDR("", "candlestick");
    }
    if (valoftokens === "kDOLLY") {
      kDOLLY("", "candlestick");
    }
    if (valoftokens === "WKUB") {
      WKUB("", "candlestick");
    }
  }
}

function THB() {
  document.getElementById(
    "navbarDropdown"
  ).innerHTML = `<img width="25" src="img/thb.png" alt="THB" /> THB`;
  // Y THB LINE //
  var symbol = document.getElementById("navbarDropdown").innerText;
  var valoftokens = document.getElementById("setselector").value;
  var checkgrapher = document.getElementById("navbargraph").innerText;
  //Y USD LINE//
  if (checkgrapher === " Line") {
    if (valoftokens === "PER") {
      Persian("thb", "line");
    }
    if (valoftokens === "KUY") {
      Kuy("thb", "line");
    }
    if (valoftokens === "YAKK") {
      Yak("thb", "line");
    }
    if (valoftokens === "ADAY") {
      Aday("thb", "line");
    }
    if (valoftokens === "PET") {
      Pet("thb", "line");
    }
    if (valoftokens === "TUK") {
      Tuk("thb", "line");
    }
    if (valoftokens === "1FIRST") {
      First1("thb", "line");
    }
    if (valoftokens === "Hello") {
      Hello("thb", "line");
    }
    if (valoftokens === "FEFC") {
      Fefc("thb", "line");
    }
    if (valoftokens === "LUCKY") {
      Lucky("thb", "line");
    }
    if (valoftokens === "VON") {
      VON("thb", "line");
    }
    if (valoftokens === "KKUB") {
      KKUB("thb", "line");
    }
    if (valoftokens === "MVP") {
      MVP("thb", "line");
    }
    if (valoftokens === "MKB") {
      MKB("thb", "line");
    }
    if (valoftokens === "kUST") {
      kUST("thb", "line");
    }
    if (valoftokens === "kMMP") {
      kMMP("thb", "line");
    }
    if (valoftokens === "kDAI") {
      kDAI("thb", "line");
    }
    if (valoftokens === "kCOUPON") {
      kCOUPON("thb", "line");
    }
    if (valoftokens === "kCake") {
      kCake("thb", "line");
    }
    if (valoftokens === "kBNB") {
      kBNB("thb", "line");
    }
    if (valoftokens === "GDR") {
      GDR("thb", "line");
    }
    if (valoftokens === "kDOLLY") {
      kDOLLY("thb", "line");
    }
    if (valoftokens === "WKUB") {
      WKUB("thb", "line");
    }
  }
  if (checkgrapher === " Candle") {
    if (valoftokens === "PER") {
      Persian("thb", "candlestick");
    }
    if (valoftokens === "KUY") {
      Kuy("thb", "candlestick");
    }
    if (valoftokens === "YAKK") {
      Yak("thb", "candlestick");
    }
    if (valoftokens === "ADAY") {
      Aday("thb", "candlestick");
    }
    if (valoftokens === "PET") {
      Pet("thb", "candlestick");
    }
    if (valoftokens === "TUK") {
      Tuk("thb", "candlestick");
    }
    if (valoftokens === "1FIRST") {
      First1("thb", "candlestick");
    }
    if (valoftokens === "Hello") {
      Hello("thb", "candlestick");
    }
    if (valoftokens === "FEFC") {
      Fefc("thb", "candlestick");
    }
    if (valoftokens === "LUCKY") {
      Lucky("thb", "candlestick");
    }
    if (valoftokens === "VON") {
      VON("thb", "candlestick");
    }
    if (valoftokens === "KKUB") {
      KKUB("thb", "candlestick");
    }
    if (valoftokens === "MVP") {
      MVP("thb", "candlestick");
    }
    if (valoftokens === "MKB") {
      MKB("thb", "candlestick");
    }
    if (valoftokens === "kUST") {
      kUST("thb", "candlestick");
    }
    if (valoftokens === "kMMP") {
      kMMP("thb", "candlestick");
    }
    if (valoftokens === "kDAI") {
      kDAI("thb", "candlestick");
    }
    if (valoftokens === "kCOUPON") {
      kCOUPON("thb", "candlestick");
    }
    if (valoftokens === "kCake") {
      kCake("thb", "candlestick");
    }
    if (valoftokens === "kBNB") {
      kBNB("thb", "candlestick");
    }
    if (valoftokens === "GDR") {
      GDR("thb", "candlestick");
    }
    if (valoftokens === "kDOLLY") {
      kDOLLY("thb", "candlestick");
    }
    if (valoftokens === "WKUB") {
      WKUB("thb", "candlestick");
    }
  }
}

},{"textversionjs":2}],2:[function(require,module,exports){
var populateChar = function(ch, amount){
	var result = "";
	for(var i=0; i<amount; i += 1){
		result += ch;
	}
	return result;
};

function htmlToPlainText(htmlText, styleConfig) {

	// define default styleConfig
	var linkProcess = null;
	var imgProcess = null;
	var headingStyle = "underline"; // hashify, breakline
	var listStyle = "indention"; // indention, linebreak
	var uIndentionChar = "-";
	var listIndentionTabs = 3;
	var oIndentionChar = "-";
	var keepNbsps = false;

	// or accept user defined config
	if(!!styleConfig){
		if(typeof styleConfig.linkProcess === "function") {
			linkProcess = styleConfig.linkProcess;
		}
		if(typeof styleConfig.imgProcess === "function") {
			imgProcess = styleConfig.imgProcess;
		}
		if(!!styleConfig.headingStyle) {
			headingStyle = styleConfig.headingStyle;
		}
		if(!!styleConfig.listStyle) {
			listStyle = styleConfig.listStyle;
		}
		if(!!styleConfig.uIndentionChar) {
			uIndentionChar = styleConfig.uIndentionChar;
		}
		if(!!styleConfig.listIndentionTabs) {
			listIndentionTabs = styleConfig.listIndentionTabs;
		}
		if(!!styleConfig.oIndentionChar) {
			oIndentionChar = styleConfig.oIndentionChar;
		}
		if(!!styleConfig.keepNbsps) {
			keepNbsps = styleConfig.keepNbsps;
		}
	}

	var uIndention = populateChar(uIndentionChar, listIndentionTabs);

	// removel all \n linebreaks
	var tmp = String(htmlText).replace(/\n|\r/g, " ");

	// remove everything before and after <body> tags including the tag itself
	const bodyEndMatch = tmp.match(/<\/body>/i);
	if (bodyEndMatch) {
		tmp = tmp.substring(0, bodyEndMatch.index);
	}
	const bodyStartMatch = tmp.match(/<body[^>]*>/i);
	if (bodyStartMatch) {
		tmp = tmp.substring(bodyStartMatch.index + bodyStartMatch[0].length, tmp.length);
	}

	// remove inbody scripts and styles
	tmp = tmp.replace(/<(script|style)( [^>]*)*>((?!<\/\1( [^>]*)*>).)*<\/\1>/gi, "");

	// remove all tags except that are being handled separately
	tmp = tmp.replace(/<(\/)?((?!h[1-6]( [^>]*)*>)(?!img( [^>]*)*>)(?!a( [^>]*)*>)(?!ul( [^>]*)*>)(?!ol( [^>]*)*>)(?!li( [^>]*)*>)(?!p( [^>]*)*>)(?!div( [^>]*)*>)(?!td( [^>]*)*>)(?!br( [^>]*)*>)[^>\/])[^<>]*>/gi, "");

	// remove or replace images - replacement texts with <> tags will be removed also, if not intentional, try to use other notation
	tmp = tmp.replace(/<img([^>]*)>/gi, function(str, imAttrs) {
		var imSrc = "";
		var imAlt = "";
		var imSrcResult = (/src="([^"]*)"/i).exec(imAttrs);
		var imAltResult = (/alt="([^"]*)"/i).exec(imAttrs);
		if(imSrcResult !== null){
			imSrc = imSrcResult[1];
		}
		if(imAltResult !== null){
			imAlt = imAltResult[1];
		}
		if(typeof(imgProcess) === "function") {
			return imgProcess(imSrc, imAlt);
		}
		if(imAlt === ""){
			return "![image] ("+ imSrc + ")";
		}
		return "![" + imAlt+"] ("+ imSrc + ")";
	});


	function createListReplaceCb() {
		return function(match, listType, listAttributes, listBody) {
			var liIndex = 0;
			if(listAttributes && /start="([0-9]+)"/i.test(listAttributes)) {
				liIndex = (/start="([0-9]+)"/i.exec(listAttributes)[1])-1;
			}
			var plainListItem = "<p>" + listBody.replace(/<li[^>]*>(((?!<li[^>]*>)(?!<\/li>).)*)<\/li>/gi, function(str, listItem) {
				var actSubIndex = 0;
				var plainListLine = listItem.replace(/(^|(<br \/>))(?!<p>)/gi, function(){
					if(listType === "o" && actSubIndex === 0){
						liIndex += 1;
						actSubIndex += 1;
						return "<br />" + liIndex + populateChar(oIndentionChar, listIndentionTabs-(String(liIndex).length));
					}
					return "<br />" + uIndention;
				});
				return plainListLine;
			})+"</p>";
			return plainListItem;
		};
	}

	// handle lists
	if(listStyle === "linebreak"){
		tmp = tmp.replace(/<\/?ul[^>]*>|<\/?ol[^>]*>|<\/?li[^>]*>/gi, "\n");
	}
	else if(listStyle === "indention"){
		while( /<(o|u)l[^>]*>(.*)<\/\1l>/gi.test(tmp)){
			tmp = tmp.replace(/<(o|u)l([^>]*)>(((?!<(o|u)l[^>]*>)(?!<\/(o|u)l>).)*)<\/\1l>/gi, createListReplaceCb());
		}
	}

	// handle headings
	if(headingStyle === "linebreak") {
		tmp = tmp.replace(/<h([1-6])[^>]*>([^<]*)<\/h\1>/gi, "\n$2\n");
	}
	else if(headingStyle === "underline") {
		tmp = tmp.replace(/<h1[^>]*>(((?!<\/h1>).)*)<\/h1>/gi, function(str, p1) {
			return "\n&nbsp;\n" + p1 + "\n" + populateChar("=", p1.length) + "\n&nbsp;\n";
		});
		tmp = tmp.replace(/<h2[^>]*>(((?!<\/h2>).)*)<\/h2>/gi, function(str, p1) {
			return "\n&nbsp;\n" + p1 + "\n" + populateChar("-", p1.length) + "\n&nbsp;\n";
		});
		tmp = tmp.replace(/<h([3-6])[^>]*>(((?!<\/h\1>).)*)<\/h\1>/gi, function(str, p1, p2) {
			return "\n&nbsp;\n" + p2 + "\n&nbsp;\n";
		});
	}
	else if(headingStyle === "hashify") {
		tmp = tmp.replace(/<h([1-6])[^>]*>([^<]*)<\/h\1>/gi, function(str, p1, p2) {
			return "\n&nbsp;\n" + populateChar("#", p1) + " " + p2 + "\n&nbsp;\n";
		});
	}

	// replace <br>s, <td>s, <divs> and <p>s with linebreaks
	tmp = tmp.replace(/<br( [^>]*)*>|<p( [^>]*)*>|<\/p( [^>]*)*>|<div( [^>]*)*>|<\/div( [^>]*)*>|<td( [^>]*)*>|<\/td( [^>]*)*>/gi, "\n");

	// replace <a href>b<a> links with b (href) or as described in the linkProcess function
	tmp = tmp.replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a[^>]*>/gi, function(str, href, linkText) {
		if(typeof linkProcess === "function") {
			return linkProcess(href, linkText);
		}
		return " [" + linkText+"] ("+ href + ") ";
	});

	// remove whitespace from empty lines excluding nbsp
	tmp = tmp.replace(/\n[ \t\f]*/gi, "\n");

	// remove duplicated empty lines
	tmp = tmp.replace(/\n\n+/gi, "\n");

	if (keepNbsps) {
		// remove duplicated spaces including non braking spaces
		tmp = tmp.replace(/( |\t)+/gi, " ");
		tmp = tmp.replace(/&nbsp;/gi, " ");
	} else {
		// remove duplicated spaces including non braking spaces
		tmp = tmp.replace(/( |&nbsp;|\t)+/gi, " ");
	}

	// remove line starter spaces
	tmp = tmp.replace(/\n +/gi, "\n");

	// remove content starter spaces
	tmp = tmp.replace(/^ +/gi, "");

	// remove first empty line
	while(tmp.indexOf("\n") === 0){
		tmp = tmp.substring(1);
	}

	// put a new line at the end
	if(tmp.length === 0 || tmp.lastIndexOf("\n") !== tmp.length-1){
		tmp += "\n";
	}

	return tmp;
}


(function (name, definition){
	if (this && typeof this.define === "function"){ // AMD
		this.define(definition);
	} else if (typeof module !== "undefined" && module.exports) { // Node.js
		module.exports = definition();
	} else { // Browser
		var theModule = definition();
		var global = this;
		var old = global[name];
		theModule.noConflict = function () {
			global[name] = old;
			return theModule;
		};
		global[name] = theModule;
	}
})("createTextVersion", function () {
	return htmlToPlainText;
});

},{}]},{},[1]);
