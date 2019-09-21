package com.example.demo.user;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>{
	public User findOneById(Long id);
	public User findOneByEmail(String email);
}
