import { useState } from "react";

const StudentManager = () => {
  const [manageData, setManageData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState({});
  const [edit, setEdit] = useState(null);

  const errorHandle = () => {
    const newError = {};
    if (!name.trim()) {
      newError.name = "Name is required.";
    } else if (name.trim().length < 3) {
      newError.name = "Name must be at least 3 characters.";
    }
    if (!email.trim()) {
      newError.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = "Enter a valid email.";
    }
    if (!age.trim()) {
      newError.age = "Age is required.";
    } else if (Number(age) < 1 || Number(age) > 100) {
      newError.age = "Age must be between 1 and 100.";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (!errorHandle()) {
      return;
    }
    const data = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      age: age,
    };
    setManageData([...manageData, data]);
    setName("");
    setEmail("");
    setAge("");
    setError({});
  };

  const editStudent = (student) => {
      setName(student.name);
      setEmail(student.email);
      setAge(student.age); 
      setEdit(student.id);
  };

  const deleteHandle = (id) => {
    setManageData(manageData.filter((data) => data.id !== id));
  }

  return (
    <div className="bw_wrap_sec">
        <h1>Student Manager</h1>
        <div className="bw_container_full">
            <div className="bw_student_manager">
            <form className="bw_student_form" onSubmit={submitHandle}>
                <div className="bw_label_input">
                <label htmlFor="name" className="bw_label">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="bw_input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {error.name && <p>{error.name}</p>}
                </div>
                <div className="bw_label_input">
                <label htmlFor="email" className="bw_label">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="bw_input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error.email && <p>{error.email}</p>}
                </div>
                <div className="bw_label_input">
                <label htmlFor="age" className="bw_label">
                    Age
                </label>
                <input
                    type="tel"
                    name="age"
                    id="age"
                    maxLength={2}
                    className="bw_input"
                    value={age}
                    onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                        setAge(value);
                    }
                    }}
                />
                {error.age && <p>{error.age}</p>}
                </div>
                <div className="bw_btn_wrap_right">
                <button type="submit" className="bw_btn bw_primary_btn">
                  {edit ? "Update" : "Submit"}
                </button>
                </div>
            </form>
            <div className="bw_student_card_list">
                {manageData.map((student) => (
                <div className="bw_student_card" key={student.id}>
                    <div className="bw_contact_details">
                    <h3>{student.name}</h3>
                    <h4>{student.email}</h4>
                    <h4>{student.age}</h4>
                    </div>
                    <div className="bw_btn_wrap_right">
                    <button type="button" className="bw_btn bw_primary_btn" onClick={() => editStudent(student)}>
                        Edit
                    </button>
                    <button type="button" className="bw_btn bw_danger_btn" onClick={() => deleteHandle(student.id)}>
                        Delete
                    </button>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    </div>
  );
};

export default StudentManager;