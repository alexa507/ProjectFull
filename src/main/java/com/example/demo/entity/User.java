package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	@Id
	@Column
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	int id;
	@Column(name = "name", columnDefinition = "TEXT")
	String name;
	@Column(name = "first_name", columnDefinition = "TEXT")
	String firstName;
	@Column(name = "email", columnDefinition = "TEXT")
	String email;
	@Column(name = "id_type_user", columnDefinition = "INT")
	int idTypeUser;
	
	public int getIdTypeUser() {
		return idTypeUser;
	}
	public void setIdTypeUser(int idTypeUser) {
		this.idTypeUser = idTypeUser;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
}