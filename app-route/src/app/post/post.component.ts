import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  constructor(private passingId:ActivatedRoute)
  {

  }
  id!:string;
  
  ngOnInit(): void 
  {
    this.id = this.passingId.snapshot.params['id'];
  }

}
