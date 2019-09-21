package com.example.demo.book;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Book {
	@Id
	@GeneratedValue
	private long id;
	private String name, author, description;
	private int taker;
	
	public Book(String name, String author, String description, int taker) {
		super();
		this.name = name;
		this.author = author;
		this.description = description;
		this.taker = taker;
	}

	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public int getTaker() {
		return taker;
	}

	public void setTaker(int taker) {
		this.taker = taker;
	}
}
