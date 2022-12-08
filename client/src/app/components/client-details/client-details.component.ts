import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Client {
  id: string,
  name: string,
  cpf: string,
  email: string
}

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})

export class ClientDetailsComponent implements OnInit {

  currentClient: Client | null = null;
  message = '';

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getClient(this.route.snapshot.paramMap.get('id'));
  }

  // @ts-ignore
  getClient(id): void {
    this.clientService.get(id)
      .subscribe(
        data => {
          this.currentClient = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateClient(): void {
    // @ts-ignore
    this.clientService.update(this.currentClient?.id, this.currentClient)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The client was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteClient(): void {
    // @ts-ignore
    this.clientService.delete(this.currentClient?.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/clients']);
        },
        error => {
          console.log(error);
        });
  }
}
