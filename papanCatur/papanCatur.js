const container = document.createElement("div"); //membuat elemen div baru
container.classList.add("my-container"); //menambah nama class
document.body.append(container); //menambah elemen div ke body

function papanCatur() {
  //fungsi membuat papan catur
  for (let i = 0; i < 64; i++) {
    //perulangan box
    const box = document.createElement("div"); //membuat elemen div baru
    box.classList.add("my-box"); //menambah nama class
    const row = Math.floor(i / 8); //menghitung baris
    const col = i % 8; //menghitung kolom
    if ((row + col) % 2 !== 0) {
      //jika row dan col tidak habis dibagi 2
      box.style.backgroundColor = "black"; //ubah warna jadi hitam
    }
    container.appendChild(box); //menambah semua div baru ke container
  }
}
papanCatur(); //memanggil fungsi
