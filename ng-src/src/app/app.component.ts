import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wiki-doc';
  items!: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig,private router: Router) { } 

   ngOnInit() {
    this.items = [
        {
        label: 'File',
        icon:'pi pi-fw pi-file',
        items: [
            {
                label: 'New',
                icon:'pi pi-fw pi-plus',
                items: [
                    {
                    label: 'Bookmark',
                    icon:'pi pi-fw pi-bookmark'
                    },
                    {
                    label: 'Video',
                    icon:'pi pi-fw pi-video'
                    }
                ]
            },
            {
                label: 'Delete',
                icon:'pi pi-fw pi-trash'
            },
            {
                label: 'Export',
                icon:'pi pi-fw pi-external-link'
            }
        ]
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        {
            label: 'File',
            icon:'pi pi-fw pi-file'  
        },
        
    ]
}
}
