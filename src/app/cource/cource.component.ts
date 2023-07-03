import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.css']
})
export class CourceComponent {


  courses=[
    {
      "courseName": "Web Development 101",
      "img": "./assets/01.jpeg",
      "duration": "4 weeks",
      "type":"free",
      "price": "free",
      "description": "Introductory course covering the basics of web development."
    },
    {
      "courseName": "Python for Data Science",
      "img": "./assets/02.jpeg",
      "duration": "6 weeks",
      "type":"paid",
      "price": 249.99,
      "description": "Learn Python programming for data analysis and machine learning."
    },
    {
      "courseName": "Digital Marketing Fundamentals",
      "img": "./assets/03.avif",
      "duration": "3 weeks",
      "type":"paid",
      "price": "340",
      "description": "Explore the essential concepts and strategies of digital marketing."
    },
    {
      "courseName": "Introduction to Graphic Design",
      "img": "./assets/04.png",
      "duration": "4 weeks",
      "type":"paid",
      "price":"199",
      "description": "Learn the principles and tools of graphic design."
    },
    {
      "courseName": "JavaScript Fundamentals",
      "img": "./assets/04.png",
      "duration": "5 weeks",
      "type":"paid",
      "price": 199.99,
      "description": "Learn the basics of JavaScript programming language."
    },
    {
      "courseName": "Introduction to Artificial Intelligence",
      "img": "./assets/02.jpeg",
      "duration": "8 weeks",
      "type":"paid",
      "price": 299.99,
      "description": "Explore the concepts and applications of artificial intelligence."
    },
    {
      "courseName": "Photography Basics",
      "duration": "2 weeks",
      "img": "./assets/10.jpg",
      "type":"free",
      "price": "free",
      "description": "Master the fundamentals of photography techniques and composition."
    },
    {
      "courseName": "Mobile App Development",
      "img": "./assets/04.png",
      "duration": "6 weeks",
      "type":"paid",
      "price": 249.99,
      "description": "Build mobile apps for iOS and Android platforms using popular frameworks."
    },
    {
      "courseName": "Introduction to Financial Accounting",
      "img": "./assets/06.jpg",
      "duration": "4 weeks",
      "type":"free",
      "price": "free",
      "description": "Learn the basics of financial accounting and financial statements."
    },
    {
      "courseName": "Introduction to Psychology",
      "img": "./assets/01.jpeg",
      "duration": "3 weeks",
      "type":"paid",
      "price": 149.99,
      "description": "Explore the fundamental concepts and theories of psychology."
    },
    {
      "courseName": "Introduction to Creative Writing",
      "img": "./assets/08.webp",
      "duration": "4 weeks",
      "type":"paid",
      "price": 179.99,
      "description": "Unleash your creativity and develop writing skills in various genres."
    },
    {
      "courseName": "Data Analysis with Excel",
      "img": "./assets/09.jpg",
      "duration": "4 weeks",
      "type":"paid",
      "price": 199.99,
      "description": "Learn data analysis techniques using Microsoft Excel."
    },
    {
      "courseName": "Introduction to Human Anatomy",
      "img": "./assets/10.jpg",
      "duration": "5 weeks",
      "type":"free",
      "price": "free",
      "description": "Discover the structure and functions of the human body."
    },
    {
      "courseName": "Introduction to Business Management",
      "img": "./assets/01.jpeg",
      "duration": "3 weeks",
      "type":"free",
      "price": "free",
      "description": "Explore the fundamentals of business management and leadership."
    },
    {
      "courseName": "Introduction to Social Media Marketing",
      "img": "./assets/02.jpeg",
      "duration": "4 weeks",
      "type":"paid",
      "price": 179.99,
      "description": "Learn how to leverage social media platforms for marketing purposes."
    }
  ]
  
  totalcources=()=> this.courses.length
  free=()=>{
    return this.courses.filter(cource=>cource.type==='free').length;
  }
  paid=()=>{
    return this.courses.filter(cource=>cource.type==='paid').length;
  }

  rselected:string='all';
  filterp=(message:any)=>{
    this.rselected=message
    console.log(this.rselected)
    // console.log(this.courses[0].type);
  }
 

}
