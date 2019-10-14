package com.employee.search.MiniAassessment.Services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.search.MiniAassessment.Model.Employee;
import com.employee.search.MiniAassessment.Resources.EmployeeRepository;

@Service
public class EmpolyeeSearchService {

	@Autowired
	EmployeeRepository employeeRepository;

	public List<Employee> getAllEmployeeByName(String keyword) {
		return employeeRepository.search(keyword);
	}

	public void addEmployee(Employee emp) {
		employeeRepository.save(emp);
	}

	public List<Employee> getAllEmployeeByServePeriod(Date start_date, Date end_date) {
		return employeeRepository.between(start_date, end_date);

	}

	public Employee getAllEmployeeById(String id) {
		return employeeRepository.findById(id).get();
	}

	public List<Employee> getAllEmployee() {
		return employeeRepository.getAllEmployee();
		
		
	}

}
