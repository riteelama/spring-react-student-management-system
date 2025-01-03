package com.springreact.studentmanagementsystem.controller;

import com.springreact.studentmanagementsystem.model.Student;
import com.springreact.studentmanagementsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New Student is Added";
    }

    @GetMapping("/getAllStudents")
    public List<Student> getAllStudents(){
       return studentService.getAllStudents();
    }
}
