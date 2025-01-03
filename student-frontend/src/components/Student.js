import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@mui/material';

export default function Student() {
	const paperStyle = {padding:'50px 20px', width:600, margin:'20px auto'}
	const[name, setName] = useState('');
	const[address,setAddress] = useState('');
	const[students, setStudents] = useState([]);

	const handleClick = (e) => {
		e.preventDefault();
		const student = {name, address};

		fetch("http://localhost:8080/student/add", {
			method: "POST",
			headers: {"Content-Type":"application/json"},
			body:JSON.stringify(student)
		}).then(()=>{
			console.log("New Student Added Successfully");
		});
	}

	useEffect(() => {
		fetch("http://localhost:8080/student/getAllStudents")
		  .then(res => res.json())
		  .then(result => {
			setStudents(result);
		  })
		  .catch(error => {
			console.error("Error fetching students:", error);
		  });
	  }, []);

  return (
	<Container>
		<Paper elevation={3} style={paperStyle}>
			<h1 style={{color:"blue"}}><u>Add Student</u></h1>
			<form noValidate autoComplete='off'>
				<Box
				component="form"
				sx={{ '& > :not(style)': { m: 1} }}
				noValidate
				autoComplete="off"
				>
				<TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
				value={name}
				onChange={(e)=>setName(e.target.value)}
				/>
				<TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
				value={address}
				onChange={(e)=>setAddress(e.target.value)}
				/>
				<Button variant="contained" color='secondary' onClick={handleClick}>
					Submit
				</Button>
				</Box>
			</form>
		</Paper>
		<h1>Students</h1>
		<Paper elevation={3}>
			{students.map(student=>(
				<Paper elevation={3} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
					Id:{student.id}
					Name: {student.name}
					Address: {student.address}
				</Paper>
			))}
		</Paper>
	</Container>
  );
}
