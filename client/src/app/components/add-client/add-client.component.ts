import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client = {
    name: '',
    cpf: '',
    email: ''
  };
  submitted = false;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      name: this.client.name,
      cpf: this.client.cpf,
      email: this.client.email
    };

    this.clientService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.client = {
      name: '',
      cpf: '',
      email: ''
    };
  }

}
