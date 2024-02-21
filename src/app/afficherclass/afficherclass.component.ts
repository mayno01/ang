import { Component, OnInit } from '@angular/core';
import { classService } from 'src/services/classService'; 
import { Router } from '@angular/router';

import { Class } from 'src/model/class'; 

@Component({
  selector: 'app-afficherclass',
  templateUrl: './afficherclass.component.html',
  styleUrls: ['./afficherclass.component.css']
})
export class AfficherclassComponent  implements OnInit{
  classes: any[] = []; 
  selectedClass: Class | undefined;
  constructor(private router: Router, private classservice: classService) { }
  ngOnInit(): void {
    this.getAllClass();
  }

  getAllClass() {
    this.classservice.getAllClass().subscribe(
      (data: Class[]) => { 
        this.classes = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
    }

    deleteClass(idclass: number) {
      const confirmDelete = confirm(`Are you sure you want to delete Class with ID ${idclass}?`);
      if (confirmDelete) {
        this.classservice.deleteClass(idclass).subscribe(
          () => {
            console.log('Class deleted');
            this.getAllClass();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }

    addbloc(classData: any) { 
      this.classservice.addclass(classData).subscribe(
        (data: any) => {
          console.log('class added:', data);
  
          this.getAllClass(); 
        },
        (error) => {
          console.log(error);
       
        }
      );
    }

    showDetails(classs: Class) {
      this.selectedClass = classs;
    }

    updateClass(classs: Class): void {
      const idclass = classs.idclass;
      this.router.navigate(['/update-class', idclass]);
    }

}
