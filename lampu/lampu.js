const red = document.querySelector(".red"); //mengambil elemen class red
const yellow = document.querySelector(".yellow"); //mengambil elemen class yellow
const green = document.querySelector(".green"); //mengambil elemen class green

async function trafficLight() {
  while (true) {
    await new Promise((resolve) => {
      setTimeout(() => {
        red.style.opacity = 1; //lampu merah nyala
        yellow.style.opacity = 0.5;
        green.style.opacity = 0.5;
        resolve();
      }, 3000); //delay awal
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        red.style.opacity = 0.5;
        yellow.style.opacity = 1; //lampu kuning nyala
        green.style.opacity = 0.5;
        resolve();
      }, 2000); //delay
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        red.style.opacity = 0.5;
        yellow.style.opacity = 0.5;
        green.style.opacity = 1; //lampu hijau nyala
        resolve();
      }, 3000); //delay
    });
  }
}

trafficLight(); //pemanggilan fungsi
