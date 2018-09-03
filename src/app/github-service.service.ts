import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private user : String;
  private repo : String;
  constructor() { }
  findUser = (user: String) => {
    if(user) this.user = user;
    return axios.get(`https://api.github.com/users/${this.user}`, {headers:{Authorization: environment.GITHUB}}).catch((err) => console.log("USER NOT FOUND"));
  } 
  getRepos = (user: String) => {
    if(user) this.user = user;
    
    return axios.get(`https://api.github.com/users/${this.user}/repos`, {headers:{Authorization: environment.GITHUB}}).catch((err) => console.log(err));
  } 
  getRepo = (repo : String) => {
    if(repo) this.repo = repo;
    return axios.get(`https://api.github.com/repos/${this.user}/${this.repo}`, {headers:{Authorization: environment.GITHUB}}).catch((err) => console.log(err));
  } 
  
}
