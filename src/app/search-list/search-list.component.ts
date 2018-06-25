import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SearchServiceClient} from "../services/search.service.client";
import {SearchList} from "../models/search.model.client";
import {PostAdServiceClient} from "../services/postad.service.client.";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  search: String;
  category:String;
  searchList: SearchList[];
  test;
  about: String;
  ad;
sample="&#x0024;1948";

  scrape_details(about)
  {
    this.about=about;
    this.router.navigate(['ad-details',this.about]);

  }
  searchCraigs(search, category) {

    this.search = search;
    this.category = category;
    console.log("Search list component ts:"+this.search);
    console.log("Search list component ts:"+this.category);
    this.service
      .searchCraigs(search,category)
      .subscribe((response) => {
        this.searchList = response;
      }
        );
    window.scroll(0,1000);


      // .then(searchResult => this.searchResult = searchResult);
    console.log("BAck to client"+ this.searchList);
  }

  constructor(private router: Router,
              private service: SearchServiceClient,
              private postservice: PostAdServiceClient) { }

  ngOnInit() {
  }

}
