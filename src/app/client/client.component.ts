import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github-service.service';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  private repos : Array<any>;
  private repo;
  private user;
  constructor(private github : GithubService) { }

  findUser = async (user) => { 
    this.user = (await this.github.findUser(user));
    if(this.user) this.user = this.user.data;
  }
  
  getRepos = async (user) => {
    if(user) this.user = user;
    const repos = (await this.github.getRepos(user));
    if(repos)
    this.repos = repos.data.map((repo) => {
      return {
        name: repo.name,
        url:  `https://github.com/${repo.full_name}`
      }
    });
    
  }
  
  getRepo = async (repo) => {
    if(!this.user) return;
    this.repo = (await this.github.getRepo(repo));
    if(this.repo) this.repo = this.repo.data;
  }
  
  ngOnInit() {

  }

}
