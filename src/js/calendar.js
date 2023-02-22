import { ref } from './calendar/refs-calendar';
import todayDate from './calendar/todayDate';
import onCalendarFormClick from './calendar/onCalendarFormClick';
import { save } from './localStorageService';
import addLeadingZero from './calendar/addLeadingZero';

// ------- CALENDAR MAIN SCRIPT ---------

todayDate();// getting current date year and month for API at start

export default function jsCalendar() {
  // getting new Date, current year and month
  let date = new Date();
  let currYear = date.getFullYear();
  let currMonth = date.getMonth();

  //main functions start
  ref.calendarForm.addEventListener('click', onCalendarFormClick);
    renderCalendar();
  ref.prevNextArrows.addEventListener('click', onArrowsClick);//listening click on month and year arrows
  ref.days.addEventListener('click', onDaysClick);//listening click on days


  //Functions  
  function renderCalendar() {

    // storing full name of all months in array
    const months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];


    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();//getting first day of month
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();//getting last date of month
    const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();//getting last day of month
    const lastDateOfPrevMonth = new Date(currYear, currMonth, 0).getDate();//getting last date of previous month

    let liTag = "";

    for (let i = firstDayOfMonth - 1; i > 0; i -= 1) {// creating li for previous month last days
      liTag += `<li class='inactive'>${lastDateOfPrevMonth - i + 1}</li>`;
    }
    if (firstDayOfMonth === 0) {
      for (let i = 6; i > 0; i -= 1) {// creating li for previous month last days in case of Sunday
        liTag += `<li class='inactive'>${lastDateOfPrevMonth - i + 1}</li>`;
      }
    }
    for (let i = 1; i <= lastDateOfMonth; i += 1) {// creating li for all days of current month
      //adding active class to li if the current day, month and year matched 
      const isToday = i === date.getDate() && currMonth === new Date().getMonth()
        && currYear === new Date().getFullYear() ? 'active' : '';
      liTag += `<li class='${isToday} usual'>${i}</li>`;
    }
    if (lastDayOfMonth !== 0) { // if not Sunday
      for (let i = lastDayOfMonth; i < 7; i += 1) {// creating li of next month first days
        liTag += `<li class='inactive'>${i - lastDayOfMonth + 1}</li>`;
      }
    }
    ref.currentMonthYear.textContent = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    ref.days.innerHTML = liTag;
  }
  
  function onArrowsClick(e) {//adding click events on month and year arrows
    const clickedIconRef = e.target;
    console.log('clickedIconRef :>> ', clickedIconRef);
 
    // if clicked icon is previous icon then decrement current month or year by 1 else increment it by 1
    switch (clickedIconRef.id) {
      case 'month__prev':
        currMonth -= 1;
        break;
      case 'month__next':
        currMonth += 1;
        break;
      case 'year__prev':
        currYear -= 1;
        break;
      case 'year__next':
        currYear += 1;
        break;
    }
    console.log('currMonth :>> ', currMonth);
    if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
  }

  function onDaysClick(e) { //adding click events on days
    const clickedDate = e.target.innerText;
    console.log('e :>> ', e);

    if (e.target.className === ' usual') {//to exclude selection of inactive dates

      // e.target.classList.add('selected');


      displayDate = `${addLeadingZero(clickedDate)}/${addLeadingZero(currMonth + 1)}/${currYear}`;
      ref.calendarDisplayDate.textContent = displayDate;

      const selectedDate = `${currYear}${addLeadingZero(currMonth + 1)}${addLeadingZero(clickedDate)}`;
      // console.log('selectedDate :>> ', selectedDate);
      save('selectedDateKey', selectedDate);
    }
  }

}