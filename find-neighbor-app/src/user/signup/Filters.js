import React, {Component} from "react";
import {additionalInfo, filterRequest, signup} from "../../util/APIUtils";
import {Button, Form, Input, notification} from "antd";
import FormItem from "antd/lib/form/FormItem";

class Filters extends Component {
    constructor(props) {

        super(props);
        this.state = {
            startAge: '',
            endAge: '',
            sex: '',
            pets: '',
            badHabits: '',
            startPrice: '',
            endPrice: '',
            userId: this.props.match.params

        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChangeBadHabits = this.handleChangeBadHabits.bind(this);
        this.handleChangePets = this.handleChangePets.bind(this);
        this.handleChangeSex = this.handleChangeSex.bind(this);
        this.validateStartAge=this.validateStartAge.bind(this);
        this.validateEndAge=this.validateEndAge.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleEndAge=this.handleEndAge.bind(this);
        this.handleStartPrice=this.handleStartPrice.bind(this);
        this.handleEndPrice=this.handleEndPrice.bind(this);
        this.isFormInvalid=this.isFormInvalid.bind(this);

    }


    handleChangeSex(event) {
        this.setState({
            sex: event.target.value
        });
    }

    handleStartPrice(event) {
        this.setState({
            startPrice: event.target.value
        });
    }

    handleEndPrice(event) {
        this.setState({
            endPrice: event.target.value
        });
    }

    handleChangeBadHabits(event) {
        this.setState({
            badHabits: event.target.value
        });
    }

    handleChangePets(event) {
        this.setState({
            pets: event.target.value
        });
    }

    handleEndAge(event) {
        this.setState({
            endAge: event.target.value
        });
    }



    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.userId);
        let username = this.state.userId;
        console.log(Object.values(username));
        const filtersInfoRequest = {
            badHabits: this.state.badHabits,
            pets: this.state.pets,
            sex: this.state.sex,
            startAge: this.state.startAge,
            endAge: this.state.endAge,
            startPrice: this.state.startPrice,
            endPrice: this.state.endPrice,
            userId: this.state.userId
        };

        filterRequest(filtersInfoRequest, this.props.match.params)
            .then(response => {
                console.log(this.props.match.params);
                let username = this.props.match.params;
                console.log(username);
                notification.success({
                    message: 'Find Neighbor App',
                    description: "Thank you!",
                });

                this.props.history.push("/"+Object.values(username)+"/address");
            }).catch(error => {
            notification.error({
                message: 'Find Neighbor App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });

    }

    isFormInvalid() {
        return !(this.state.startAge.validateStatus === 'success'&&this.state.endAge.validateStatus === 'success'
        );
    }

    handleInputChange(event, validationFun) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue,
            ...validationFun(inputValue)
        });
    }
    validateStartAge = (startAge) => {
        if(startAge < 14) {
            return {
                validateStatus: 'error',
                errorMsg: 'Start age may not be less than 14'
            }
        }
        if(startAge > 120){
            return {
                validateStatus: 'error',
                errorMsg: 'Start age may not be more than 120'
            }
        }
        else {
            return {
                validateStatus: "success",
                errorMsg: null
            }
        }
    }
        validateEndAge = (endAge) => {
            if(endAge < this.state.startAge) {
                return {
                    validateStatus: 'error',
                    errorMsg: 'End age may not be less than start age'
                }
            }
            if (endAge > 200) {
                return {
                    validateStatus: 'error',
                    errorMsg: 'End age may not be more than 200'
                }
            }else {
                return {
                    validateStatus: "success",
                    errorMsg: null
                }
            }
        }




    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Here you can set your preferences</p>
                <FormItem
                    hasFeedback
                    validateStatus={this.state.validateStatus}
                    help={this.state.errorMsg}>
                    <p>Please set your target age</p>
                    From <Input
                        size="small"
                        name="startAge"
                        type="number"
                        autoComplete="off"
                        value={this.state.startAge}
                        onBlur={this.validateStartAge}
                        onChange={(event) =>
                            this.handleInputChange(event, this.validateStartAge)} /> to  <Input
                    size="small"
                    name="endAge"
                    type="number"
                    autoComplete="off"
                    value={this.state.endAge}
                    onBlur={this.validateEndAge}
                    onChange={(event) =>
                        this.handleInputChange(event, this.validateEndAge)} />
                </FormItem>
                <FormItem>
                    <p>Please set the desired price for the apartment</p>
                    From <Input
                    size="small"
                    name="startPrice"
                    type="number"
                    autoComplete="off"
                    value={this.state.startPrice}
                    onChange={this.handleStartPrice} /> to  <Input
                    size="small"
                    name="endPrice"
                    type="number"
                    autoComplete="off"
                    value={this.state.endPrice}
                    onChange={
                        this.handleEndPrice} />
                </FormItem>
                <FormItem>
                    <p>Sex of your future neighbor: is it important for you?</p>

                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="man"
                                    checked={this.state.sex === "man"}
                                    onChange={this.handleChangeSex}
                                />
                                Yes, I want to live with a man
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="woman"
                                    checked={this.state.sex === "woman"}
                                    onChange={this.handleChangeSex}
                                />
                                Yes, I want to live with a woman
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="-"
                                    checked={this.state.sex === "-"}
                                    onChange={this.handleChangeSex}
                                />
                                No difference
                            </label>
                        </li>
                    </ul>
                </FormItem>
                <FormItem>
                    <p>How about pets?</p>
                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="yes"
                                    checked={this.state.pets === "yes"}
                                    onChange={this.handleChangePets}
                                />
                                Yes
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="no"
                                    checked={this.state.pets === "no"}
                                    onChange={this.handleChangePets}
                                />
                                No
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="-"
                                    checked={this.state.pets === "-"}
                                    onChange={this.handleChangePets}
                                />
                                Don`t know
                            </label>
                        </li>
                    </ul>
                </FormItem>

                <FormItem>
                    <p>Are you against bad habits?</p>
                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="yes"
                                    checked={this.state.badHabits === "yes"}
                                    onChange={this.handleChangeBadHabits}
                                />
                                Yes
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="no"
                                    checked={this.state.badHabits === "no"}
                                    onChange={this.handleChangeBadHabits}
                                />
                                No
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="-"
                                    checked={this.state.badHabits === "-"}
                                    onChange={this.handleChangeBadHabits}
                                />
                                Don`t know
                            </label>
                        </li>
                    </ul>
                </FormItem>



                <button type="submit">Ok</button>
            </form>

        );
    }
}


export default  Filters
