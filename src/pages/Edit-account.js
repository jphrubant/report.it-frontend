import React, { Component } from "react";

class Edit-account extends Component {
    state={
            
    }

    render() {
        return (
            <div>
        <h1>Edit Account Information</h1>
        
        <p>Only fields marked with a * are mandatory</p>
        <form onSubmit={this.handleFormSubmit}>
        <label>email:*</label>
        <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
        />
        <br />

        <label>Password:*</label>
        <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
        />
        <br />
        <hr />

        <label>Date of birth</label>
        <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={this.handleChange}
        />
        <br />

        <label>Sex:</label>
        <select type="text"
            name="sex"
            value={sex}
            onChange={this.handleChange}>
            <option> - Select - </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Trans">Trans</option>
            <option value="Intersex">Intersex</option>
            <option value="Other">Other</option>
        </select>
        <br />

        <label>Sexual Orientation:</label>
        <select type="text"
            name="sexualOrientation"
            value={sexualOrientation}
            onChange={this.handleChange}>
            <option> - Select - </option>
            <option value="Heterosexual">Heterosexual</option>
            <option value="Homosexual">Homosexual</option>
            <option value="Bisexual">Bisexual</option>
            <option value="Asexual">Asexual</option>
            <option value="Other">Other</option>
        </select>
        <br />

        <label>Ethnicity:</label>
        <select type="text"
            name="ethnicity"
            value={ethnicity}
            onChange={this.handleChange}>
            <option> - Select - </option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Asian">Asian</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Hispanic">Hispanic</option>
            <option value="Latinx">Latinx</option>
            <option value="Mixed">Mixed</option>
            <option value="Other">Other</option>
        </select>
        <br />

        <label>Nationality:</label>
        <input
            type="nationality"
            name="nationality"
            value={nationality}
            onChange={this.handleChange}
        />
        <br />

        <input type="submit" value="Signup" />
        </form>
      </div>
        )
    }
}

export default Edit-account;