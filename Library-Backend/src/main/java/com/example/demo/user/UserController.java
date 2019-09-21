package com.example.demo.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	@Autowired
	private UserService us;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(method = RequestMethod.POST, value = "/user/add")
	public void add(@RequestBody User u){
		us.add(u);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(method = RequestMethod.GET, value = "/user/{id}")
	public User get(@PathVariable Long id){
		return us.getById(id);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/allUser")
	public List<User> get(){
		return us.getAll();
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(method = RequestMethod.DELETE, value = "/user/{id}")
	public void delete(@PathVariable long id){
		us.delete(id);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(method = RequestMethod.PUT, value = "/user/update")
	public void update(@RequestBody User u){
		us.update(u);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(method = RequestMethod.GET, value = "/user/profile/{email}")
	public User get(@PathVariable String email){
		return us.getByEmail(email);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(method = RequestMethod.POST, value = "/user/verify")
	public String verifyUser(@RequestBody User u){
		
		if(us.getByEmail(u.getEmail()) != null){
			if((us.getByEmail(u.getEmail())).getPassword().equals(u.getPassword())){
				return"Success";
			}
			else{
				return "An account with this email or password does not exist";
			}
		}
		
		return "An account with this email or password does not exist";
		
	}
}
