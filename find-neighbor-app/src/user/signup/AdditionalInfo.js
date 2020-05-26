import React, {Component} from "react";
import {additionalInfo, signup} from "../../util/APIUtils";
import {Button, Form, Input, notification} from "antd";
import FormItem from "antd/lib/form/FormItem";
import Calendar from 'react-calendar-pane';
import moment, { calendarFormat } from 'moment';
import ReactPhoneInput from "react-phone-input-2";
import "./Signup.css";


import date from 'react-calendar-pane';

class AdditionalInfo extends Component {
    constructor(props) {

        super(props);
        const src = '../../ProfilePicture.png';
        this.state = {
            selectedDate:moment(),
            badHabits: false,
            kindOfActivity: false,
            jobOrJobless: false,
            maritalStatus: '',
            pets: false,
            sex: '',
            moreAboutUser: '',
            userId: this.props.match.params,
            handleDateChange: '',
            age: 0,
            phone: ''

        }
        this.profilePictureRef = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeBadHabits = this.handleChangeBadHabits.bind(this);
        this.handleChangeKindOfActivity = this.handleChangeKindOfActivity.bind(this);
        this.handleChangeMaritalStatus = this.handleChangeMaritalStatus.bind(this);
        this.handleChangePets = this.handleChangePets.bind(this);
        this.handleChangeSex = this.handleChangeSex.bind(this);
        this.handleChangeJobOrJobless = this.handleChangeJobOrJobless.bind(this);
        this.handleChangeMoreAboutUser = this.handleChangeMoreAboutUser.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    }

    onSelect=(e)=>{
        this.setState({selectedDate:e})
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

    handlePhoneNumber = value => {
        console.log(value);
        this.setState({ phone: value }, () => {
            console.log(this.state.phone);
        });
    };

    handleImageChange(e){
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () =>{
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        this.state.age = getAge(this.state.selectedDate)
        console.log(this.state.age);
        const additionalInfoRequest = {
            preview: this.state.preview,
            badHabits: this.state.badHabits,
            kindOfActivity: this.state.kindOfActivity,
            maritalStatus: this.state.maritalStatus,
            pets: this.state.pets,
            sex: this.state.sex,
            moreAboutUser: this.state.moreAboutUser,
            userId: this.state.userId,
            age: this.state.age,
            phoneNumber: this.state.phone
        };

        let username = this.state.userId;

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
                <h4>Set your age</h4>
                <p> The date you've selected is: {this.state.selectedDate.format('YYYY-MM-DD')} </p>
                <Calendar date={moment("23/09/1999", "DD/MM/YYYY")} onSelect={this.onSelect} />
                <FormItem>
                <b>Do you have some bad habits?</b>
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
                    <b>Kind of activity</b>

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
                    <b>Are you working?</b>

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
                    <b>Gender</b>

                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="man"
                                    checked={this.state.sex === "man"}
                                    onChange={this.handleChangeSex}
                                />
                                Man
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
                                Woman
                            </label>
                        </li>

                    </ul>
                </FormItem>
                <FormItem>
                    <b>Marital status</b>

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
                    <b>Do you have some pets?</b>
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
                <div className='phoneNumberStyle'>
                    <b>Phone number:</b>
                    <ReactPhoneInput
                        inputExtraProps={{
                            name: "phone",
                            required: true,
                            autoFocus: true
                        }}
                        defaultCountry={"sg"}
                        value={this.state.phone}
                        onChange={this.handlePhoneNumber}
                    />
                </div>
                <FormItem>
                <b> More about yourself</b>
                    <Input
                        size="large"
                        name="moreAboutUser"
                        autoComplete="off"
                        placeholder="Here you can tell more about yourself.
                        Please, write here about your bad habits, if you have any. And more about your pets."
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

function getAge(selectedDate) {
    let today = new Date();
    let birthDate = new Date(selectedDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export default  AdditionalInfo
