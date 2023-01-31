package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "typeusers")
public class TypeUser {
	
	@Id
	@Column(name = "id_type_user")
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	int idTypeUser;
	
	@Column(name = "type_user", columnDefinition = "TEXT")
	String typeUser;
	
	public int getIdTypeUser() {
		return idTypeUser;
	}
	public void setIdTypeUser(int idTypeUser) {
		this.idTypeUser = idTypeUser;
	}
	public String getTypeUser() {
		return typeUser;
	}
	public void setTypeUser(String typeUser) {
		this.typeUser = typeUser;
	}

}
