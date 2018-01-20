import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchPayments } from "../actions/merchantActions";
import PropTypes from "prop-types";
import jwt from "jsonwebtoken";

class Pagination extends Component {
    state = {
        currentPage: 1,
        start: 1,
        end: 5
    }
    businessShortcode = jwt.decode(this.props.token, { complete: true}).payload.businessShortcode
    next = () =>{
        if(this.state.end < this.props.pages){
            let businessShortcode = this.businessShortcode;
            this.setState({
                start: this.state.start + 1,
                end: this.state.end + 1
            });
            this.props.searchPayments({ businessShortcode, page: (this.state.currentPage + 1)});
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }

    previous = () => {
        if(this.state.end > 1) {
            let businessShortcode = this.businessShortcode;
            this.setState({
                start: this.state.start - 1,
                end: this.state.end - 1
            });
            this.props.searchPayments({ businessShortcode, page: (this.state.currentPage - 1)});
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    }
    navigate = (pageNumber) => {
        let businessShortcode = this.businessShortcode;
        this.setState({
            currentPage: pageNumber
        });
        this.props.searchPayments({ businessShortcode, page: pageNumber});
    }
    render(){
        let paginationButtons = [];
        const { start, end } = this.state;
        const { pages } = this.props;
        let disableNext = end + 1 > pages;
        let disablePrevious = start < 2;
        if(pages >= 5){
            for(let i = start ; i < (end + 1); i++){
                paginationButtons.push(<button onClick={() => this.navigate(i)}className={classnames("w3-bar-item w3-button", {"primary-color": i === this.state.currentPage})}>{i}</button>);
            }
        }else{
            for(let i = 1 ; i <= pages; i++){
                paginationButtons.push(<button onClick={() => this.navigate(i)}className={classnames("w3-bar-item w3-button", {"primary-color": i === this.state.currentPage})}>{i}</button>);
            }
        }
        return(
            <div className="w3-center w3-margin-top">
            <div className="w3-bar w3-border w3-round">
                <button disabled={disablePrevious} className="w3-bar-item w3-button" onClick={this.previous}>&laquo;</button>
                {paginationButtons}
                <button  disabled={disableNext} className="w3-bar-item w3-button" onClick={this.next}>&raquo;</button>
            </div>
        </div>
        );
    }
}


Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    token: PropTypes.string.isRequired,
    searchPayments: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        pages: state.merchant.payments.pages,
        token: state.merchant.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ searchPayments } ,dispatch);
}

export default connect(mapStateToProps)(Pagination);