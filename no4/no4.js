const data = document.querySelector("table tbody"); //mengambil elemen tbody
const newData = document.createElement("tr"); //membuat elemen baru
data.appendChild(newData); //menambahkan elemen baru ke dalam tbody

const newName = document.createElement("td"); //membuat elemen td baru
newName.textContent = "Charlie"; //menambah konten ke elemen td yang baru
newData.appendChild(newName); //menambahkan elemen baru ke newData

const newGrade = document.createElement("td"); //membuat elemen td baru
newGrade.textContent = "92"; //menambah konten
newData.appendChild(newGrade); //menambahkan elemen ke newdata

//mengubah konten
const bobScore = document.querySelector(
  "tbody tr:nth-child(2) td:nth-child(2)"
);
bobScore.innerHTML = "89";

const container = document.querySelector("tbody tr:nth-child(1)"); //mengakses atau mengambil elemen
container.classList.add("top-scorer"); //menambah nama class

const table = document.querySelector("table"); //mengambil elemen tabel
const tfoot = document.createElement("tfoot"); //menambah elemen tfoot
table.appendChild(tfoot); //menaruh elemen tfoot ke dalam tabel

const dataNew = document.createElement("tr"); //menambah elemen tr
tfoot.appendChild(dataNew); //menambah elemen tr kedalam elemen tfoot

const avarage = document.createElement("td"); //membuat elemen td
avarage.textContent = "Avarage"; //menambah konten td
dataNew.appendChild(avarage); //menmabah td ke dataNew

function averageResult() {
  //fungsi menghitung rata-rata
  const values = document.querySelectorAll("tbody tr"); //mengakses atau mengambil elemen tr dari tbody
  let total = 0; //menampung nilai sementara
  values.forEach((value) => {
    const val = parseFloat(value.cells[1].textContent); //ambil nilai angka dari kolom ke dua dan ubah ke number
    total += val; //menghitung nilai
  });
  return total / values.length;
}

const result = document.createElement("td"); //membuat elemen td baru
result.textContent = `${averageResult()}`; //menambah konten td dengan fungsi averageResult
dataNew.appendChild(result); //menambah elemen td ke dalam dataNew
