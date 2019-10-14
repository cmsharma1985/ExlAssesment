package com.employee.search.MiniAassessment.Model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="employee")
public class Employee {

	@Id
	String id;
	String firstname;
	String lastname;
	String title;
	int age;

	@Temporal(TemporalType.DATE)
	Date joiningdate;

	public Employee(String id, String firstname, String lastname, String title, int age, Date joiningdate) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.title = title;
		this.age = age;
		this.joiningdate = joiningdate;
	}

	public Employee() {
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Date getJoiningdate() {
		return joiningdate;
	}

	public void setJoiningdate(Date joiningdate) {
		this.joiningdate = joiningdate;
	}

}