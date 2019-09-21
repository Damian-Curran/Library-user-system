package com.example.demo.book;

import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long>{
	public Book findOneByName(String name);
}
