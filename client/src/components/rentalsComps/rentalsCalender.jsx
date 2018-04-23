import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';


export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // dateVal: this.props.dateSelected,
      month: moment(this.props.dateSelected),
      selected: moment(this.props.dateSelected).startOf('day'),
      product: '',
      datesRented: [],
      rentedDayArr: []
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dateSelected !== this.props.dateSelected) {
      // console.log(this.props.dateSelected, nextProps.dateSelected);
      this.setState({ month: moment(nextProps.dateSelected), selected: moment(nextProps.dateSelected).startOf('day') });
      // console.log('dates' + this.state.datesRented);
      // console.log(this.state);
    }

    if (nextProps.prodId !== this.props.productId) {
      // console.log('changed ' + nextProps.prodId);
      this.setState({ product: nextProps.prodId });
      // console.log(this.state.product);
      fetch(`/api/products/dates/${nextProps.prodId}`)
        .then((response) => response.json())
        .then((responseJson) => {
          let resArr = [];
          responseJson.map((x) => {
            if (moment(x.date_rented).year() == moment(this.state.month).year() && moment(x.date_rented).month() == moment(this.state.month).month() ) {
            resArr.push(moment(x.date_rented).date());
            // }
            // console.log('yo' + resArr)
          }})
          this.setState({ rentedDayArr: resArr });
          // this.setState({ datesRented: resArr })
          console.log('daysRented' + resArr);

        })

    }
  }

  previous() {
    // console.log(this.state.month)
    const {
      month,
    } = this.state;

    this.setState({
      month: month.subtract(1, 'month'),
    });
  }

  next() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.add(1, 'month'),
    });
  }

  select(day) {
    this.setState({
      selected: this.props.dateSelected,          ///// sets selected date
      month: day.date.clone(),
    });
    //   console.log(day.date);
    // console.log(this.props.dateSelected);
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
    } = this.state;

    while (!done) {
      weeks.push(
        <Week key={date}
          date={date.clone()}
          month={month}
          select={(day) => this.select(day)}
          selected={selected}
          rentedDayArr={this.state.rentedDayArr}
          datesRented={this.state.datesRented} />
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
    return (
      <section className="calendar">
        <header className="header">
          <div className="month-display row">
            {/* <i className="arrow fa fa-angle-left" onClick={this.previous} /> */}
            {this.renderMonthLabel()}
            {/* <i className="arrow fa fa-angle-right" onClick={this.next} /> */}
          </div>
          <DayNames />
        </header>
        {this.renderWeeks()}
      </section>
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
      rentedDayArr
      // datesRented
    } = this.props;

    let k = 0

    for (var i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(this.props.rentedDayArr, "day"),
        isRented: this.props.rentedDayArr.indexOf(date.date()),        //this.props.select),
        // isRented: this.props.datesRented.indexOf(new Date(date)),      ////// 'date' is not an actual date
        date: date
      };


      // () => {
      //   this.props.datesRented.map((x) => {
      //     if (this.props.datesRented !== []) {
      //       day.isRented.push(date.isSame(x.date_rented))
            
      //       // console.log('not null');
      //       // day.isRented =  date.isSame(moment(this.props.datesRented.date_rented))
      //       // console.log(date.isSame(this.props.datesRented.date_rented), this.props.datesRented.date_rented) 
      //     }
      //   })
      // }



      days.push(
        <Day key={k}
          day={day}
          selected={selected}
          select={select}
          isRented={day.isRented} 
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
        number
      },
      select,
      selected
    } = this.props;

    // console.log(this.state.datesRented)

    return (
      <span
        key={this.props.dateSelected}
        className={"day" + (isRented != -1 ? " rented" : "") + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")}
        onClick={() => select(day)}>{number}</span>
    );
  }
}