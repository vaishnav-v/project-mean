import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MenuModel} from './menu-model'
import { ArticleService } from '../shared/services/article.service';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  articleList:any = []
  items!: MenuItem[];

  constructor( private articleService:ArticleService) { }

  ngOnInit(): void {  
    var model = new MenuModel()
    this.items = model.model
    this.readArticles()
  }
  readArticles(){
    this.articleService.getArticles().subscribe((data)=>{
      this.articleList=data
      console.log(data);
      
    })
  }

}

