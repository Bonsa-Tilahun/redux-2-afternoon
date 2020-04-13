import React, { Component } from 'react';
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import {connect } from 'react-redux'
import {requestUserData} from '../../ducks/userReducer'
import {requestBudgetData,addPurchase,removePurchase} from '../../ducks/budgetReducer'
import './Budget.css';


class Budget extends Component {
componentDidMount = () =>{
  console.log("before data request: ", this.props)
  this.props.requestUserData()
  this.props.requestBudgetData()
}
render() {
  console.log("after data request: ", this.props)
    const {loading} = this.props.budget
    return (
      <Background>
        {loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav user={this.props.user}/>
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase addPurchase={this.props.addPurchase}/>
              <DisplayPurchases purchases={this.props.budget.purchases} removePurchase={this.props.removePurchase} />
            </div>
            <div className='chart-container'>
              <Chart1 budgetLimit={this.props.budget.budgetLimit}/>
              <Chart2 />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

const mapStateToProps = reduxState => {
  return {budget:reduxState.budget, user: reduxState.user}
}

export default connect(mapStateToProps, {requestUserData, requestBudgetData, addPurchase, removePurchase})(Budget);
