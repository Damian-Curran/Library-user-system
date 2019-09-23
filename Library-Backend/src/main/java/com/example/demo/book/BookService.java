package com.example.demo.book;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
	@Autowired
	private BookRepository br;
	
	public void add(Book b){
		br.save(b);
	}
	
	public Book getByName(String name){
		return br.findOneByName(name);
	}
	
	public void delete(long id){
		br.deleteById(id);;
	}
	
	public void update(Book b){
		br.save(b);
	}
	
	public List<Book> getAll(){
		List<Book> allBooks = new ArrayList<Book>();
		br.findAll().forEach(allBooks:: add);
		
		return allBooks;
	}
	
	public List<Book> getAllByTaker(int taker){
		List<Book> allBooks = new ArrayList<Book>();
		allBooks = br.findAllByTaker(taker);
		
		return allBooks;
	}
}
