package com.example.demo.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired 
	private UserRepository ur;
	
	public void add(User u){
		ur.save(u);
	}
	
	public User getById(Long id){
		return ur.findOneById(id);
	}
	
	public User getByEmail(String email){
		return ur.findOneByEmail(email);
	}
	
	public void delete(long id){
		ur.deleteById(id);;
	}
	
	public void update(User u){
		ur.save(u);
	}
	
	public List<User> getAll(){
		List<User> allUsers = new ArrayList<User>();
		ur.findAll().forEach(allUsers:: add);
		
		return allUsers;
	}
}
