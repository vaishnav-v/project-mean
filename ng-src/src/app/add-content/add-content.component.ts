import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { string } from 'joi';
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
  renderHeading = ""
  renderContent = ""
  display: boolean = false;
  query400:MediaQueryList = window.matchMedia("(max-width: 400px)")

  constructor
    (
      private fb: FormBuilder,
      private articleService: ArticleService,

    ) {

  }
  ngOnInit(): void {
    this.isActive(this.query400)
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
  onSubmit() {
    this.addArticle()
    this.display = false; 
  }
  isActive(query:MediaQueryList){
    if(query.matches) {
      console.log("matches")
    }
  }
  

  onPreview() {
    this.renderHeading = (this.addArticleForm.value.articleName)
    this.renderContent = (this.addArticleForm.value.content)
  }
  addArticle() {
    this.article = this.addArticleForm.value
    this.articleService.createArticle(this.article).subscribe((data) => {
      console.log(data);
      alert(JSON.stringify(data))
    })
  }

  
 showDialog() {
    this.onPreview()
    this.display = true;
  }

}
