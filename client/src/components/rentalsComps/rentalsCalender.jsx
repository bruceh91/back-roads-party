import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';


export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment(this.props.dateSelected),
      selected: moment(this.props.dateSelected).startOf('day'),
      product: '',
      datesRented: [],
      rentedDayArr: [],
      rentedNumArr: [],
      rentedTotal: 0,
      quantRented: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dateSelected !== this.props.dateSelected) {
      this.setState({ month: moment(nextProps.dateSelected), selected: moment(nextProps.dateSelected).startOf('day') });
    }

    if (nextProps.prodId !== this.props.productId) {
      this.setState({ product: nextProps.prodId });
      fetch(`/api/products/dates/${nextProps.prodId}`)
        .then((response) => response.json())
        .then((responseJson) => {
          let resArr = [0];
          let numArr = [0];
          let totalArr = [0];
          responseJson.map((x) => {
            if (moment(x.date_rented).year() == moment(this.state.month).year() && moment(x.date_rented).month() == moment(this.state.month).month()) {
              resArr.push(moment(x.date_rented).date());
              numArr.push(x.number_rented);
            }
            totalArr.push(x.total_number)
          })
          this.setState({ rentedDayArr: resArr, rentedNumArr: numArr, rentedTotal: totalArr[1] });
          console.log('numRented  ' + numArr[resArr.indexOf(moment(this.props.dateSelected).date())]);

          function countInArray(array, what) {
            var count = 0;
            for (var i = 0; i < array.length; i++) {
              if (array[i] === what) {
                count++;
              }
            }
            return count;
          }

          let numCount = countInArray(resArr, moment(this.props.dateSelected).date())

          console.log(numCount + '  numCount');

          function show(x) {
            let answer = 0
            let temp = resArr.indexOf(moment(x).date())
            for (let i = 0; i < numCount; i++) {
              answer += numArr[resArr.indexOf(moment(x).date(), temp)];
              temp = resArr.indexOf(moment(x).date(), temp + 1);
            }

            console.log('answer ' + answer)


            return answer
          }

          this.setState({ quantRented: show(this.props.dateSelected) })
          console.log('state' + this.state.quantRented);
        }
        )
    }
  }


  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month.clone().startOf("month").add("w" - 1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const {
      selected,
      month,
      quantRented
    } = this.state;

    while (!done) {
      weeks.push(
        <Week key={date}
          date={date.clone()}
          month={month}
          select={(day) => this.select(day)}
          selected={selected}
          rentedDayArr={this.state.rentedDayArr}
          rentedNumArr={this.state.rentedNumArr}
          datesRented={this.state.datesRented}
          quantRented={this.state.quantRented}
          rentedTotal={this.state.rentedTotal} />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  renderMonthLabel() {
    const {
      month,
    } = this.state;

    return <span className="month-label"><h3>{month.format("MMM")} {month.format("YYYY")}</h3></span>;
  }


render() {
  return (<div>
    {this.state.quantRented == 0 ?
      (<div>
        <h6 className='text-center m-1' >number available: {this.state.rentedTotal}</h6>
      </div>)
      :
      (<div>
        <h6 className='text-center m-1' >number available: {this.state.rentedTotal - this.state.quantRented}</h6>
      </div>)
    }
    <section className="calendar">
      <header className="header">
        <div className="month-display row">
          {this.renderMonthLabel()}
        </div>
        <DayNames />
      </header>
      {this.renderWeeks()}
    </section>
  </div>
  );
}
}

class DayNames extends React.Component {
  render() {

    return (
      <div className="row day-names">
        <span className="day">S</span>
        <span className="day">M</span>
        <span className="day">T</span>
        <span className="day">W</span>
        <span className="day">T</span>
        <span className="day">F</span>
        <span className="day">S</span>
      </div>
    );
  }
}

class Week extends React.Component {
  render() {
    let days = [];
    let {
      date,
    } = this.props;

    const {
      month,
      selected,
      select,
      rentedDayArr,
      rentedNumArr,
      rentedTotal,
      quantRented
    } = this.props;

    let k = 0

    for (var i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(this.props.rentedDayArr, "day"),
        isRented: this.props.rentedDayArr.indexOf(date.date()),
        isSoldOut: this.props.rentedNumArr[this.props.rentedDayArr.indexOf(date.date())] >= this.props.rentedTotal,
        date: date
      };

      days.push(
        <Day key={k}
          day={day}
          selected={selected}
          select={select}
          isRented={day.isRented}
          quantRented={this.props.quantRented}
          isSoldOut={day.isSoldOut}
        />
      );
      k++;
      date = date.clone();
      date.add(1, "day");
    }

    return (
      <div className="row week" key={days[0]}>
        {days}
      </div>
    );
  }

}

class Day extends React.Component {
  render() {
    const {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
        isRented,
        isSoldOut,
        number
      },
      quantRented,
      select,
      selected
    } = this.props;

    return (
      <span
        key={this.props.dateSelected}
        className={"day" + (isRented != -1 ? " rented" : "") + (isSoldOut ? " soldOut" : "") + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")}
      >{number}</span>
    );
  }
}