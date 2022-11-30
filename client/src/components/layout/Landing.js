import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import '../../App.css';

const Landing = ({isDoctorAuthenticated, isUserAuthenticated}) => {
    if(isDoctorAuthenticated){
        return <Redirect to="/dashboard" />
    } else if(isUserAuthenticated) {
        return <Redirect to="/appointment" />
    }

    return (
        <Fragment>
            <section id="landing">
                <div className="container">
                    <div className="heading">
                        <h1 className="main-heading">Find Your Best Doctor &</h1>
                        <h1 className="main-heading">Book Your <span className="main-span">Appointment.</span></h1>
                    </div>
                    <div className="signup">
                        <div className="doctor-signup">
                            <h2 className=" item heading-sub"><strong>For Doctors</strong></h2>
                            <p className="item description">Doctors, also known as physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, administer treatment, and counsel patients on their health and well-being.</p>
                            <Link to="/registerDoctor" type="button" className="item btn btn-info">Sign Up</Link>
                        </div>
                        <div className="user-signup">
                            <h2 className="item heading-sub"><strong>For Users</strong></h2>
                            <p className="item special description">A patient is any recipient of health care services that are performed by healthcare professionals. The patient is most often ill or injured and in need of treatment by a physician, nurse, optometrist, dentist, veterinarian, or other health care provider.</p>
                            <Link to="/registerUser" className="item btn btn-outline-info">Sign Up</Link>
                        </div>
                    </div>
                    <br />
                    <div className="img">
                        <div className="img-1">
                            <img src={require("../../img/undraw_doctor_kw5l.svg")}  />
                        </div>
                    </div>
                </div>
                <br />
            </section>
        </Fragment>
    );
};
Landing.propTypes = {
    isDoctorAuthenticated: PropTypes.bool.isRequired,
    isUserAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated,
    isUserAuthenticated: state.authUser.isUserAuthenticated
});

export default connect(mapStateToProps)(Landing);
