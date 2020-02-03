import React, {Component} from "react";
import {additionalInfo, signup} from "../../util/APIUtils";
import {Button, Form, Input, notification} from "antd";
import FormItem from "antd/lib/form/FormItem";






class AdditionalInfo extends Component {
    constructor(props) {

        super(props);
        this.state = {
            badHabits: false,
            kindOfActivity: false,
            jobOrJobless: false,
            maritalStatus: '',
            pets: false,
            sex: '',
            moreAboutUser: '',
            userId: this.props.match.params,
            date: new Date(),
            selectedDate: '',
            setSelectedDate: '',
            handleDateChange: ''

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeBadHabits = this.handleChangeBadHabits.bind(this);
        this.handleChangeKindOfActivity = this.handleChangeKindOfActivity.bind(this);
        this.handleChangeMaritalStatus = this.handleChangeMaritalStatus.bind(this);
        this.handleChangePets = this.handleChangePets.bind(this);
        this.handleChangeSex = this.handleChangeSex.bind(this);
        this.handleChangeJobOrJobless = this.handleChangeJobOrJobless.bind(this);
        this.handleChangeMoreAboutUser = this.handleChangeMoreAboutUser.bind(this);

    }

    handleChangeBadHabits(event) {
        this.setState({
            badHabits: event.target.value
        });
        // console.log(this.state.badHabits);
    }
    handleChangeMoreAboutUser(event) {
        this.setState({
            moreAboutUser: event.target.value
        });
        // console.log(this.state.badHabits);
    }

    handleChangeJobOrJobless(event) {
        this.setState({
            jobOrJobless: event.target.value
        });
        // console.log(this.state.badHabits);
    }
    handleChangeMaritalStatus(event) {
        this.setState({
            maritalStatus: event.target.value
        });
        // console.log(this.state.badHabits);
    }

    handleChangePets(event) {
        this.setState({
            pets: event.target.value
        });
        // console.log(this.state.badHabits);
    }

    handleChangeSex(event) {
        this.setState({
            sex: event.target.value
        });
        // console.log(this.state.badHabits);
    }

    handleChangeKindOfActivity(event) {
        this.setState({
            kindOfActivity: event.target.value
        });
        // console.log(this.state.badHabits);
    }

    handleSubmit(event) {
        event.preventDefault();

        const additionalInfoRequest = {
            badHabits: this.state.badHabits,
            kindOfActivity: this.state.kindOfActivity,
            maritalStatus: this.state.maritalStatus,
            pets: this.state.pets,
            sex: this.state.sex,
            moreAboutUser: this.state.moreAboutUser,
            userId: this.state.userId


        };
        console.log(this.state.userId);
        let username = this.state.userId;
        console.log(Object.values(username));
        additionalInfo(additionalInfoRequest, this.props.match.params)
            .then(response => {
                notification.success({
                    message: 'Find Neighbor App',
                    description: "Thank you! You're successfully registered. Please set your additional info!",
                });
                this.props.history.push("/"+Object.values(username)+"/filters");
            }).catch(error => {
            notification.error({
                message: 'Find Neighbor App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
    }

    validateMoreAboutYourself() {
        // First check for client side errors in username
        const moreAboutYourselfValue = this.state.moreAboutUser;
        const moreAboutUserValidation = this.validateUsername(moreAboutYourselfValue);

        if (moreAboutUserValidation.validateStatus === 'error') {
            this.setState({
                moreAboutYourself: moreAboutYourselfValue,
                ...moreAboutUserValidation

            });
            return;
        }

        this.setState({
            moreAboutYourself: {
                value: moreAboutYourselfValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });
    }

        render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <FormItem>
                <p>Do you have some bad habits?</p>
                <ul>
                    <li>
                        <label>
                            <input
                                type="radio"
                                value="true"
                                checked={this.state.badHabits === "true"}
                                onChange={this.handleChangeBadHabits}
                            />
                            Yes
                        </label>
                    </li>

                    <li>
                        <label>
                            <input
                                type="radio"
                                value="false"
                                checked={this.state.badHabits === "false"}
                                onChange={this.handleChangeBadHabits}
                            />
                            No
                        </label>
                    </li>
                </ul>
                </FormItem>

                <FormItem>
                    <p>Kind of activity</p>

                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="false"
                                    checked={this.state.kindOfActivity === "false"}
                                    onChange={this.handleChangeKindOfActivity}
                                />
                                I am a student
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="true"
                                    checked={this.state.kindOfActivity === "true"}
                                    onChange={this.handleChangeKindOfActivity}
                                />
                                I graduated from university/college
                            </label>
                        </li>

                    </ul>
                </FormItem>
                <FormItem>
                    <p>Are you working?</p>

                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="true"
                                    checked={this.state.jobOrJobless === "true"}
                                    onChange={this.handleChangeJobOrJobless}
                                />
                                Yes
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="false"
                                    checked={this.state.jobOrJobless === "false"}
                                    onChange={this.handleChangeJobOrJobless}
                                />
                                No
                            </label>
                        </li>

                    </ul>
                </FormItem>

                <FormItem>
                    <p>Gender</p>

                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="false"
                                    checked={this.state.sex === "false"}
                                    onChange={this.handleChangeSex}
                                />
                                Woman
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="true"
                                    checked={this.state.sex === "true"}
                                    onChange={this.handleChangeSex}
                                />
                                Man
                            </label>
                        </li>

                    </ul>
                </FormItem>
                <FormItem>
                    <p>Marital status</p>

                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="single"
                                    checked={this.state.maritalStatus === "single"}
                                    onChange={this.handleChangeMaritalStatus}
                                />
                                Single
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="married"
                                    checked={this.state.maritalStatus === "married"}
                                    onChange={this.handleChangeMaritalStatus}
                                />
                                Married
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="in the relationship"
                                    checked={this.state.maritalStatus === "in the relationship"}
                                    onChange={this.handleChangeMaritalStatus}
                                />
                                In the relationship
                            </label>
                        </li>

                    </ul>
                </FormItem>

                <FormItem>
                    <p>Do you have some pets?</p>
                    <i>If yes you can write more in "more about yourself"</i>

                    <ul>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="true"
                                    checked={this.state.pets === "true"}
                                    onChange={this.handleChangePets}
                                />
                                Yes
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="false"
                                    checked={this.state.pets === "false"}
                                    onChange={this.handleChangePets}
                                />
                                No
                            </label>
                        </li>

                    </ul>
                </FormItem>
                <FormItem
                    label="More About User"
                    hasFeedback
                  //  validateStatus={this.state.email.validateStatus}
                 //   help={this.state.email.errorMsg}
                    >
                    <Input
                        size="large"
                        name="moreAboutUser"
                        autoComplete="off"
                        placeholder="Here you can tell more about yourself. Please, write here about your bad habits, if you have any. And more about your pets."
                        value={this.state.moreAboutUser}
                       // onBlur={this.validateEmailAvailability}
                       onChange={(event) => this.handleChangeMoreAboutUser(event) }
                     />
                </FormItem>

                <button type="submit">Ok</button>
            </form>
        );
    }
}


export default  AdditionalInfo
