import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

interface Client {
  id: string,
  name: string,
  cpf: string,
  email: string
}

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})

export class ClientsListComponent implements OnInit {

  clients: any;
  currentClient: Client | null = null;
  currentIndex = -1;
  name = '';

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.retrieveClients();
  }

  retrieveClients(): void {
    this.clientService.getAll()
      .subscribe(
        data => {
          this.clients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveClients();
    this.currentClient = null;
    this.currentIndex = -1;
  }

  // @ts-ignore
  setActiveClient(client, index: number): void {
    this.currentClient = client;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.clientService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveClients();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.clientService.findByName(this.name)
      .subscribe(
        data => {
          this.clients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
