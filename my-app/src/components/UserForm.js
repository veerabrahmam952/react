import React from "react";

function UserForm() {
    const [name, setName] = React.useState('');
    const [selectedOption, setSelectedOption] = React.useState('');
    const [selectedRadio, setSelectedRadio] = React.useState('');
    const [selectedCheckbox, setSelectedCheckbox] = React.useState(false);
    const handleCheckBox = (event) => {
        console.log(event.target.checked);
        setSelectedCheckbox(event.target.checked);
    };
    return(
        <>
        <input type="text" placeholder="Enter your name"  value={name} onChange={(e) => setName(e.target.value)}/>
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        <input type="radio" id="option1" name="options" value="option1" checked={selectedRadio === 'option1'}  onChange={(e) => setSelectedRadio(e.target.value)}/> Option 1
        <input type="radio" id="option2" name="options" value="option2" checked={selectedRadio === 'option2'}  onChange={(e) => setSelectedRadio(e.target.value)}/> Option 2
        <input type="radio" id="option3" name="options" value="option3" checked={selectedRadio === 'option3'}  onChange={(e) => setSelectedRadio(e.target.value)}/> Option 3
        <input type="checkbox" id="subscribe" name="subscribe" value="subscribe" checked={selectedCheckbox} onChange={(e) => handleCheckBox(e)} />
        {name} <br />
        {selectedCheckbox ? "Subscribed" : "Not Subscribed"} <br />
        </>
    )
}

function SingleForm() {
    const [form, setForm] = React.useState({
        name: '',
        selectedOption: '',
        selectedRadio: '',
        selectedCheckbox: false
    });
    function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Single Form</h2>
            <input type="text" placeholder="Enter your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <select value={form.selectedOption} onChange={(e) => setForm({ ...form, selectedOption: e.target.value })}>
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <input type="radio" id="option1" name="options" value="option1" checked={form.selectedRadio === 'option1'} onChange={(e) => setForm({ ...form, selectedRadio: e.target.value })} /> Option 1
            <input type="radio" id="option2" name="options" value="option2" checked={form.selectedRadio === 'option2'} onChange={(e) => setForm({ ...form, selectedRadio: e.target.value })} /> Option 2
            <input type="radio" id="option3" name="options" value="option3" checked={form.selectedRadio === 'option3'} onChange={(e) => setForm({ ...form, selectedRadio: e.target.value })} /> Option 3
            <input type="checkbox" id="subscribe" name="subscribe" value="subscribe" checked={form.selectedCheckbox} onChange={(e) => setForm({ ...form, selectedCheckbox: e.target.checked })} />
            <button type="submit">Submit</button>
        </form>
    );
}

export {UserForm, SingleForm};