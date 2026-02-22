const eventCards = document.getElementById("eventCards");
const form = document.getElementById("eventForm");

let events = [];

form.addEventListener("submit", function(e){
  e.preventDefault();

  const data = new FormData(form);

  const event = {
    name: form[0].value,
    org: form[1].value,
    date: form[2].value,
    desc: form[3].value
  };

  events.push(event);
  renderEvents();
  form.reset();
  alert("Event Submitted Successfully!");
});

function renderEvents(){
  eventCards.innerHTML = "";
  events.forEach(e => {
    eventCards.innerHTML += `
      <div class="card">
        <h3>${e.name}</h3>
        <p><b>By:</b> ${e.org}</p>
        <p><b>Date:</b> ${e.date}</p>
        <p>${e.desc}</p>
      </div>
    `;
  });
}
