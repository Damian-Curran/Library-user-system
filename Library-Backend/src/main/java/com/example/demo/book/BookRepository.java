package com.example.demo.book;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long>{
	public Book findOneByName(String name);
	public List<Book> findAllByTaker(int taker);
}
