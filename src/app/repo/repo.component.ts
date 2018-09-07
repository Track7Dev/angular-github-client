import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github-service.service';
import {ClientComponent} from '../client/client.component';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  constructor (private github : GithubService, private clientComponent : ClientComponent) { }
  private client = this.clientComponent;
  private user = this.clientComponent.user;
  private updatedAt = this.clientComponent.repo && String(this.clientComponent.repo.updated_at).split('T')[0];
  private description = this.clientComponent.repo && this.clientComponent.repo.description;
  ngOnInit() {
  }


}
