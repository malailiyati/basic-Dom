const red = document.querySelector(".red"); //mengambil elemen class red
const yellow = document.querySelector(".yellow"); //mengambil elemen class yellow
const green = document.querySelector(".green"); //mengambil elemen class green

async function trafficLight() {
  while (true) {
    //loop terus menerus
    await new Promise((resolve) => {
      setTimeout(() => {
        red.style.opacity = 1; //lampu merah nyala
        yellow.style.opacity = 0.5;
        green.style.opacity = 0.5;
      }, 0); //delay awal
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        red.style.opacity = 0.5;
        yellow.style.opacity = 1; //lampu kuning nyala
        green.style.opacity = 0.5;
      }, 3000); //delay
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        red.style.opacity = 0.5;
        yellow.style.opacity = 0.5;
        green.style.opacity = 1; //lampu hijau nyala
      }, 2000); //delay
    });
  }
}

trafficLight(); //pemanggilan fungsi
