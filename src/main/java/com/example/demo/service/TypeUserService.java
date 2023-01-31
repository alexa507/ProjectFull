package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.TypeUser;
import com.example.demo.repository.TypeUserRepository;

@Service
public class TypeUserService {
	
	@Autowired
	private TypeUserRepository repository;
	
	public Iterable<TypeUser> getAllTypeUsers(){
		return repository.findAll();
	}
	
	public TypeUser saveTypeUsers(TypeUser typeUser) {
		return repository.save(typeUser);
	}

	public TypeUser getById(int id) {
		return repository.findById(id).get();
	}
	
	public TypeUser updateById(int id, TypeUser typeUser) {
		Optional<TypeUser> found= repository.findById(id);
		if(found.isEmpty()) {
			throw new RuntimeException(String.format("Type user with id: %s was not found.", id));
		}
		TypeUser typeFound = found.get();
		typeFound.setTypeUser(typeUser.getTypeUser());
		return repository.save(typeFound);
	}
	
	public void deleteById(int id) {
		Optional<TypeUser> found= repository.findById(id);
		if(found.isEmpty()) {
			throw new RuntimeException(String.format("Type user with id: %s was not found.", id));
		}
		repository.deleteById(id);
	}
}
