const setup = {
  rows: 10,
  seats: 7,
  letters: ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L"],
};

const DB = [];

generateRows();

function generateRows() {
  let cinemaParent = document.querySelector(".cinema-rows-container");

  for (let lettersRow = 0; lettersRow < setup.rows; lettersRow++) {
    cinemaParent.innerHTML += `<div class="d-flex justify-content-around ${setup.letters[lettersRow]}">
        <div class="seats">${setup.letters[lettersRow]}</div>`;
    for (let seats = 1; seats <= setup.seats; seats++) {
      document.querySelector(
        `.${setup.letters[lettersRow]}`
      ).innerHTML += `<div class="seats" onclick="selectSeat('${setup.letters[lettersRow]}',${seats})">${seats}</div>`;
    }
    cinemaParent.innerHTML += `</div>`;
  }
}

function selectSeat(letter, numberSeat) {
  document.querySelector(
    ".title-form"
  ).innerHTML = `La silla seleccionada es: ${letter + numberSeat}`;
  document.querySelector(
    ".send-button-container"
  ).innerHTML = `<button type="button" class="btn btn-success mt-3" onclick="reserve('${letter}', ${numberSeat})">Enviar</button>`;
}

function reserve(letter, numberSeat) {
  const person = document.querySelector("#name").value;
  const cc = document.querySelector("#cc").value;
  const seatCode = letter + numberSeat;

  //   const persons = [
  //     { name: "Karen", age: 19 },
  //     { name: "Toño", age: 40 },
  //     { name: "Yamile", age: 25 },
  //   ];
  //   persons[1].name;

  //   for (let index = 0; index < persons.length; index++) {
  //     console.log(person[index].name)
  //   }
  DB.push({ person, cc, seatCode });

  console.log(DB);

  showTable();
}

const showTable = () => {
  const parentTablePeople = document.querySelector(".table-people");
  parentTablePeople.innerHTML = "";

  // for (let index = 0; index < DB.length; index++) {
  //     parentTablePeople.innerHTML += `<tr><td>${DB[index].person}</td><td>${DB[index].cc}</td><td>${DB[index].seatCode}</td><td>Delete</td></tr>`
  // }

  for (const index in DB) {
    parentTablePeople.innerHTML += `<tr><td>${DB[index].person}</td><td>${DB[index].cc}</td><td>${DB[index].seatCode}</td>
    <td><button class="btn btn-success mt-3" onclick="deleteReservation('${DB[index].seatCode}')">Delete</button></td></tr>`;
  }
};

const deleteReservation = (seatCode) => {
  console.log(seatCode);

  const indexObject = DB.findIndex((object) => object.seatCode == seatCode);

  console.log(indexObject);

  DB.splice(indexObject, 1);
  showTable();
};
