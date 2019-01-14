var timerM = document.querySelector('#timerM'),
  timerS = document.querySelector('#timerS'),
  listElement = document.querySelector('ol'),
  listLi = document.querySelectorAll('.list-item')[1],
  caption = document.querySelector('h2'),
  phase = 0,
  btnc = document.querySelector('#btn'),
  ok = 0,
  winBlock = document.querySelector('#win'),
  btnIni = document.querySelector('.btnInicio'),
  stage = document.querySelector('#fase'),
  alter = false,
  insert = false,
  timeStart = 0,
  btnPass = document.querySelector('#btnPass'),
  msg = document.querySelector('.msg'),
  intervalo = 0,
  seconds = 0,
  minutes = 0,
  timeR = document.querySelector('#timeR'),
  record = document.querySelector('#record'),
  reset = false,
  q = 0;

function game() {
  if (phase === 0) {
    start();
  }
  if (phase === 1) {
    act1();
    listElement.style.display = 'block';
    timerM.style.display = 'block';
    timerS.style.display = 'block';
    timeStart = 1;
    stage.style.display = 'block';
    stage.innerText = "Fase 1";
  }
  if (phase === 2) {
    act2();
    listElement.style.display = 'block';
    timerM.style.display = 'block';
    timerS.style.display = 'block';
    timeStart = 1;
    stage.style.display = 'block';
    stage.innerText = "Fase 2";
    selected();
  }
  if (reset === true) {
    time(1);
    ok = 0;
    listLi.style.border = '2px solid rgba(0, 0, 0, 0)';
    listLi.previousElementSibling.style.border = '2px solid rgba(0, 0, 0, 0)';
    listLi.nextElementSibling.style.border = '2px solid rgba(0, 0, 0, 0)';
  }

}

function start() {
  caption.innerText = 'Pressione o Botão Para começar a Jogar';
}


function startG() {
  btnIni.style.display = 'none';
  phase = 1;
  var s = 0;
  var m = 0;
  game();
  time(1);
  timerS.innerText = "0" + s
  timerM.innerText = "Tempo " + "0" + m + ":"
}

function time(op) {
  if (op === 1) {
    timerM.style.display = "block";
    var s = 1;
    var m = 0;
    intervalo = window.setInterval(function () {
      if (s == 60) {
        m++;
        s = 0;
      }
      if (s < 10) timerS.innerText = "0" + s;
      else
        timerS.innerText = s;
      if (m == 60) {
        s = 0;
        m = 0;
      }
      if (m < 10) timerM.innerText = "Tempo " + "0" + m + ":";
      else
        timerM.innerText = m;
      seconds = s;
      minutes = m;
      s++;
    }, 1000);
  } else {
    var s = 0 - 100;
    var m = 0 - 100;
  }
  if (reset === true) {
    s = 0;
    m = 0;
    reset = false;
  }
}


function notLook() {
  listLi.previousElementSibling.style.border = '2px solid rgba(0, 0, 0, 0)';
  listLi.nextElementSibling.style.border = '2px solid rgba(0, 0, 0, 0)';
  listLi.style.border = '2px solid rgba(0, 0, 0, 0)';
}

function selected(alt) {
  if (alt != 0) {
    alter = false;
  }
  if (alt < 3) {
    insert = true;
  }
  if (alt === 1) {
    listLi.style.border = '2px solid black';
    listLi.previousElementSibling.style.border = '2px solid rgba(0, 0, 0, 0)';
    listLi.nextElementSibling.style.border = '2px solid rgba(0, 0, 0, 0)';
    ok = 1;
    if (ok === 1) {
      showBtn();
      ok = 0;
    }
  }
  if (alt === 0) {
    listLi.style.border = '2px solid rgba(0, 0, 0, 0)';
    listLi.previousElementSibling.style.border = '2px solid black';
    listLi.nextElementSibling.style.border = '2px solid rgba(0, 0, 0, 0)';
    ok = 1;
    alter = true;
    if (ok === 1) {
      showBtn();
      ok = 0;
    }
  }

  if (alt === 2) {
    ok = 0;
    listLi.style.border = '2px solid rgba(0, 0, 0, 0)';
    listLi.previousElementSibling.style.border = '2px solid  rgba(0, 0, 0, 0)';
    listLi.nextElementSibling.style.border = '2px solid black';
    ok = 1;
    if (ok === 1) {
      showBtn();
      ok = 0;
    }
  }
  if (q == 1) {
    /*Quest 2*/
    if (alt === 1) {
      alter = true;
      listLi.style.border = '2px solid black';
      listLi.previousElementSibling.style.border = '2px solid rgba(0, 0, 0, 0)';
      listLi.nextElementSibling.style.border = '2px solid rgba(0, 0, 0, 0)';
      ok = 1;
      if (ok === 1) {
        showBtn();
        ok = 0;
      }
    }
    if (alt === 0) {
      listLi.style.border = '2px solid rgba(0, 0, 0, 0)';
      listLi.previousElementSibling.style.border = '2px solid black';
      listLi.nextElementSibling.style.border = '2px solid rgba(0, 0, 0, 0)';
      ok = 1;
      alter = false;
      if (ok === 1) {
        showBtn();
        ok = 0;
      }
    }

    if (alt === 2) {
      alter = false;
      ok = 0;
      listLi.style.border = '2px solid rgba(0, 0, 0, 0)';
      listLi.previousElementSibling.style.border = '2px solid  rgba(0, 0, 0, 0)';
      listLi.nextElementSibling.style.border = '2px solid black';
      ok = 1;
      if (ok === 1) {
        showBtn();
        ok = 0;
      }
    }
  }
}

function insertB(event) {
  if (insert == true) {
    event.target.value = insert;
    if (event.keyCode === 13) {
      trueQuest();
    }
  }
  if (phase == 1) {
    event.target.value = selected();
    if (event.keyCode === 49) {
      selected(0);
      alter = true;
      insert = true;
    } else if (event.keyCode === 50) {
      selected(1);
      insert = true;
    } else if (event.keyCode === 51) {
      selected(2);
      insert = true;
    }
  }
  if (alter === true) {
    if (event.keyCode === 13) {
      falseAlt();
    }
  }
}

function act1(item) {
  listItem = ['Madrid', 'Africa', 'Berlim'];
  caption.innerText = 'Qual é A capital da Espanha??';
  listLi.previousElementSibling.innerHTML = `${listItem[0]}`;
  listLi.innerHTML = `${listItem[1]}`;
  listLi.nextElementSibling.innerHTML = `${listItem[2]}`;
}

function act2() {
  listItem = ['Presidente dos Estados Unidos', 'Primeiro Ministro da Inglaterra', 'Rei da França'];
  caption.innerText = 'Quem foi Winston Churchill??';
  listLi.previousElementSibling.innerHTML = `${listItem[0]}`;
  listLi.innerHTML = `${listItem[1]}`;
  listLi.nextElementSibling.innerHTML = `${listItem[2]}`;
}

function showBtn() {
  if (ok === 1) {
    btnc.style.display = 'block';
  } else {
    btnc.style.display = 'none';

  }
}

function trueQuest() {
  if (alter === true) {
    window.clearInterval(intervalo);
    reset = true;
    winBlock.style.display = 'block';
    btnc.style.display = 'none';
    msg.innerHTML = 'Parabéns, Você acertou!';
    winBlock.style.backgroundColor = 'rgba(5, 212, 5, 0.876)';
    btnPass.innerHTML = '>>>';
    listElement.style.display = 'none';
    timerM.style.display = 'none';
    timerS.style.display = 'none';
    timeStart = 1;
    stage.style.display = 'none';
    timeR.innerText = "Tempo " + "0" + minutes + ":" + seconds + "s";
    q = 1;

  } else if (alter === false) {
    reset = true;
    window.clearInterval(intervalo);
    winBlock.style.display = 'block';
    btnc.style.display = 'none';
    msg.innerHTML = 'Reposta Errada!';
    winBlock.style.backgroundColor = 'rgba(255, 0, 0, 0.863)';
    btnPass.innerHTML = 'Retornar';
    listElement.style.display = 'none';
    timerM.style.display = 'none';
    timerS.style.display = 'none';
    timeStart = 1;
    stage.style.display = 'none';
    timeR.style.display = 'none';
  }
}

function falseAlt() {
  if (alter === false) {
    winBlock.style.display = 'none';
    game();
  }
  if (alter === true) {
    winBlock.style.display = 'none';
    phase = 2;
    game();
  }

}

window.onload = time;
game();