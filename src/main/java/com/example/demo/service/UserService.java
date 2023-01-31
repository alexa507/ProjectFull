package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public Iterable<User> getAllUsers() {
		return repository.findAll();
	}
	
	public User saveUser(User user) {
		return repository.save(user);		 
	}
	
	public Optional<User> findById(int id) {
		return repository.findById(id);
	}
	
	public User updateById(int id, User user) {
		Optional<User> found = repository.findById(id);
		if(found.isEmpty()) {
			throw new RuntimeException(String.format("User with id: %s was not found", id));
		}
		User userFound = found.get();
		userFound.setEmail(user.getEmail());
		userFound.setFirstName(user.getFirstName());
		userFound.setIdTypeUser(user.getIdTypeUser());
		userFound.setName(user.getName());
		return repository.save(userFound);
	}
	
	public void deleteById(int id) {
		Optional<User> found = repository.findById(id);
		if(found.isEmpty()) {
			throw new RuntimeException(String.format("User with id: %s was not found", id));
		}
		repository.deleteById(id);
	}
}

