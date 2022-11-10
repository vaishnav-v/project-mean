import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from '../shared/article';
import { ArticleService } from '../shared/services/article.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {
  addArticleForm!: FormGroup;
  article!: Article;
  constructor
    (
      private fb: FormBuilder,
      private articleService: ArticleService, 
      
    ) {

  }
  ngOnInit(): void {
    this.addArticleForm = this.fb.group(
      {
        articleName: ['', [Validators.required]],
        content: ['', [Validators.required]]
      }
    )
    
  }
  get articleTitle() {
    return this.addArticleForm.get('articleName')
  }
  get content() {
    return this.addArticleForm.get('content')
  }
  onSubmit(){
     this.addArticle()
  }

  addArticle() {
    this.article = this.addArticleForm.value
    this.articleService.createArticle(this.article).subscribe((data) => {
      console.log(data);
      alert(data)
    })
  }

  
}
