import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
      english: true,
      maths: false,
      physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] =
      useState("");
  const [about, setAbout] = useState("");

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
        ...prev,
        [sub]: !prev[sub],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
        firstName,
        lastName,
        email,
        contact,
        gender,
        subjects,
        resume,
        url,
        selectedOption,
        about
    );
    // Add your form submission logic here
  };
  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
        english: true,
        maths: false,
        physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };



  return (
    <div className="App">
      <form>
        <h1>Form in React</h1>
        <label for="firstname">
          First Name*
        </label>
        <input 
          type="text" 
          value={firstName}
          id="firstname"
          name="firstname"
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
          placeholder="Enter First Name"
          required
          />
        <label for="lastname">Last Name*</label>
        <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) =>
                setLastName(e.target.value)
            }
            placeholder="Enter Last Name"
            required
        />
        <label for="email">Enter Email* </label>
        <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) =>
                setEmail(e.target.value)
            }
            placeholder="Enter email"
            required
        />
        <label for="tel">Contact* </label>
        <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) =>
                setContact(e.target.value)
            }
            placeholder="Enter Mobile Number"
            required
        />
        <label for="gender">Gender*</label>
        <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) =>
                setGender(e.target.value)
            }
        />
        Male
        <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) =>
                setGender(e.target.value)
            }
        />
        Female
        <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) =>
                setGender(e.target.value)
            }
        />
        Other
        <label for="lang">
            Your best Subject
        </label>
        <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subjects.english === true}
            onChange={(e) =>
                handleSubjectChange("english")
            }
        />
        English
        <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subjects.maths === true}
            onChange={(e) =>
                handleSubjectChange("maths")
            }
        />
        Maths
        <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subjects.physics === true}
            onChange={(e) =>
                handleSubjectChange("physics")
            }
        />
        Physics
        <label for="url">Enter URL*</label>
        <input 
        type="url"
        id="url"
        name="url"
        placeholder='Enter URL'
        required
        onChange={(e) => {
          setUrl(e.target.value)
        }}
        />
        <label>Select your choice</label>
        <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) =>
                setSelectedOption(
                    e.target.value
                )
            }
        >
          <option
              value=""
              disabled
              selected={selectedOption === ""}
          >
              Select your choice
          </option>
          <optgroup label="Beginners">
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">
                JavaScript
            </option>
          </optgroup>
          <optgroup label="Advanced">
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">Express</option>
            <option value="t">MongoDB</option>
          </optgroup> 
        </select>
        <label for="about">About</label>
        <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) =>
                setAbout(e.target.value)
            }
            placeholder="About your self"
            required
        ></textarea>
        <button
            type="reset"
            value="reset"
            onClick={() => handleReset()}
        >
            Reset
        </button>
        <button
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit(e)}
        >
            Submit
        </button>
      </form>
    </div>
  );
}

export default App;
