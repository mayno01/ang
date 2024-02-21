import { Component, OnInit } from '@angular/core';
import { classService } from 'src/services/classService'; 
import { Router } from '@angular/router';
import { Class } from 'src/model/class'; 

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrls: ['./form-class.component.css']
})
export class FormClassComponent  implements OnInit{
  classs: any[] = []; 
  constructor(private router: Router, private classservice: classService) { }
  ngOnInit(): void {
    this.getClass();
  }
  getClass() {
    this.classservice.getAllClass().subscribe(
      (data: Class[]) => { 
        this.classs = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
    }
    addclass(classData: any) { 
      this.classservice.addclass(classData).subscribe(
        (data: any) => {
          console.log('class added:', data);
  
          this.getClass(); 
        },
        (error) => {
          console.log(error);
       
        }
      );
    }
}
