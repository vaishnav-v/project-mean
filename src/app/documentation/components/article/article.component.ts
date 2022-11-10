import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/article';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleTitle: string = "start";
  articleID: string = ''
  article: Article | undefined
  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.articleTitle = params['id'];
      console.log(this.articleTitle);
    })
  }

  ngOnInit(): void {
    this.readID()
  }
   async readID() {
     await this.articleService.getID(this.articleTitle).subscribe(async (data) => {
      console.log(data);
      this.articleID = data
      await this.readArticle()
    })
  }
  async readArticle() {  
    this.articleService.getArticle(this.articleID).subscribe(async (data) => {
      this.article = data
      console.log(this.article);  
    })
  }
  
}


