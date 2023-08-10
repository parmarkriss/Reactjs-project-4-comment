import React, { useState } from 'react';
import './style.css';

const Table = () => {
    const [input, setInput] = useState([
        {
            fullName: '',
            emailAddress: '',
            salary: ''
        }
    ]);

    const addMore = () => {
        let singleField = { fullName: '', emailAddress: '', salary: '' };
        let data = [...input, singleField];
        setInput(data);
    };

    const deleteData = (index) => {
        let data = [...input];
        data.splice(index, 1);
        setInput(data);
    };

    const handleChange = (index, field, value) => {
        let data = [...input];
        data[index][field] = value;
        setInput(data);
    };

    return (
        <div>
            <h1>Add and Delete Table Rows Dynamically</h1>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Salary</th>
                        <th>
                            <button onClick={addMore}>+</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {input.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    value={item.fullName}
                                    onChange={(e) => handleChange(index, 'fullName', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.emailAddress}
                                    onChange={(e) => handleChange(index, 'emailAddress', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.salary}
                                    onChange={(e) => handleChange(index, 'salary', e.target.value)}
                                />
                            </td>
                            <td>
                                <button className="btn" onClick={() => deleteData(index)}>
                                    -
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
