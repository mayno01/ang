import { Class } from 'src/model/class'; 
import { Component, OnInit ,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { classService } from 'src/services/classService'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent  implements OnInit{

  classs: Class = { idclass: 0, nomClass: '', filiere: '' };
  
  constructor(private route: ActivatedRoute,private router: Router, private classservice: classService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.classservice.getclassById(id).subscribe(data => {
          this.classs = data || { idclass: 0, nomClass: '', filiere: '' }; 
        });
      }
    });
  }

  updateClass(): void {
    if (this.classs) {
      this.classservice.updateClass(this.classs, this.classs.idclass).subscribe(updated => {
        this.router.navigate(['/classes']);
      }, error => {
   
      });
    }
  }

}
