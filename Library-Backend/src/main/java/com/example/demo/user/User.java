package com.example.demo.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue
	private long id;
	private String firstName, surname, email, address, password;
	private int admin, phone;
	
	public User(String firstName, String surname, String email, String address, String password, int admin, int phone) {
		super();
		this.firstName = firstName;
		this.surname = surname;
		this.email = email;
		this.address = address;
		this.password = password;
		this.admin = admin;
		this.phone = phone;
	}
	
	public User(){
		super();
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public int getAdmin(){
		return admin;
	}
	
	public void setAdmin(int admin){
		this.admin = admin;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}
	
	public long getId(){
		return id;
	}
}
