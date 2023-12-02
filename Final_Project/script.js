const curDate = new Date();
let curYear = curDate.getFullYear();
let curMonth = curDate.getMonth() + 1;
let maxYear = curYear + 1;

document.addEventListener("DOMContentLoaded", () => {
  const calendar = new VanillaCalendar("#calendar", {
    settings: {
      range: {
        min: curYear + "-" + curMonth + "-" + "01",
        max: maxYear + "-" + curMonth + "-" + "01",
      },
    },
    popups: {
      "2023-12-03": {
        html: `<div>
            <p style="background-color: rgb(179 195 189)">We close at 3PM</p>
          </div>`,
      },
      "2023-12-17": {
        html: `<div>
            <p style="background-color: rgb(179 195 189)">We close at 3PM</p>
          </div>`,
      },
      "2023-12-24": {
        html: `<div>
            <p style="background-color: rgb(179 195 189)">We are closed for Christmas preparation</p>
          </div>`,
      },
      "2023-12-25": {
        html: `<div>
            <p style="background-color: rgb(179 195 189)">We have Stollen and decorations ready for Christmas</p>
          </div>`,
      },
    },
  });
  calendar.init();
});

document.addEventListener("DOM");
