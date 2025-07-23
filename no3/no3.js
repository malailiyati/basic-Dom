const container = document.createElement("div"); //membuat elemen div baru
container.classList.add("profile-card"); //menambah nama class
document.body.append(container); //manambah elemen div ke body

const name = document.createElement("h2"); //membuat elemen h2 baru
name.textContent = " John Doe"; //menambah konten h2
container.append(name); //menambah elemen h2 ke div

const information = document.createElement("p"); //membuat elemen p baru
information.textContent = "Umur:30, profesi: Web Developer"; //menambah konten elemen p
container.append(information); //menambah elemen p ke div

const myHobbies = document.createElement("ul"); //membuat elemen ul baru
container.append(myHobbies); //menambah elemen ul ke div

const hobby = document.createElement("li"); //membuat elemen li baru
hobby.textContent = "Reading"; //menambah konten li
myHobbies.append(hobby); //menambah elemen li ke ul

const hobby2 = document.createElement("li"); //membuat elemen li baru
hobby2.textContent = "Hiking"; //menambah konten li
myHobbies.append(hobby2); //menambah elemen li ke ul

const hobby3 = document.createElement("li"); //membuat elemen li baru
hobby3.textContent = "Photography"; //menambah konten li
myHobbies.append(hobby3); //menambah elemen li ke ul
