package com.springreact.studentmanagementsystem.service;

import com.springreact.studentmanagementsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
