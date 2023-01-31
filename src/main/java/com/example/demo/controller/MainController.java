package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.TypeUser;
import com.example.demo.entity.User;
import com.example.demo.service.TypeUserService;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private TypeUserService typeUserService;
	
	//Endpoints for TypeUser
	
	@GetMapping("/typeUser")
	public Iterable<TypeUser> getAllTypeUsers(){
		return typeUserService.getAllTypeUsers();
	}
	
	@GetMapping("/typeUser/{id}")
	public TypeUser getTypeUserById(@PathVariable int id){
		return typeUserService.getById(id);
	}
	
	@PostMapping("/typeUser")
	public TypeUser addTypeUser(@RequestBody TypeUser typeUser) {
		return typeUserService.saveTypeUsers(typeUser);
	}
	
	@PutMapping("/typeUser/{id}")
	public TypeUser updateTypeUserById(@PathVariable int id, @RequestBody TypeUser typeUser) {
		return typeUserService.updateById(id, typeUser);
	}
	
	@DeleteMapping("/typeUser/{id}")
	public void deleteTypeUserById(@PathVariable int id) {
		typeUserService.deleteById(id);
	}
 
	// Endpoints for User
	
	@GetMapping("/users")
	public Iterable<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@GetMapping("/users/{id}")
	public User getUserById(@PathVariable int id){
		return userService.findById(id).get();
	}
	
	@PostMapping("/users")
	void addUser(@RequestBody User user) {
		userService.saveUser(user);
	}
	
	@PutMapping("/users/{id}")
	public User updateUserById(@PathVariable int id, @RequestBody User user) {
		return userService.updateById(id, user);
	}
	
	@DeleteMapping("/users/{id}")
	public void deleteUserById(@PathVariable int id) {
		userService.deleteById(id);
	}
}