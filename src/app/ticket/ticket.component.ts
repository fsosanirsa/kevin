import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Apollo, gql } from 'apollo-angular';
import { GET_ALL } from 'app/graphl/graphql.queries';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TicketComponent implements OnInit {

  @ViewChild('modalCajon') cajonModal: any

  uri: String = environment.api;

  priority: any = ""
  prioridades: any[] = [
    {
      id: "high",
      nombre: "Alto"
    },
    {
      id: "medium",
      nombre: "Medio"
    },
    {
      id: "low”",
      nombre: "Bajo"
    }
  ]
  category: any = ""
  categorias: any[] = [
    {
      id: "incident",
      nombre: "Incidente"
    },
    {
      id: "support",
      nombre: "Soporte"
    },
    {
      id: "error",
      nombre: "Error”"
    }
  ]
  status: any = ""
  estados: any[] = [
    {
      id: "pending",
      nombre: "Pendiente"
    },
    {
      id: "verified",
      nombre: "Verificado"
    },
    {
      id: "approved",
      nombre: "Aprovado"
    }
  ]

  all: Observable<any[]>;

  constructor(
    private apollo: Apollo,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    console.log("entro ")
    this.apollo
      .watchQuery<any[]>({
        query: GET_ALL,
      })
      .valueChanges.pipe(map((result) => result.data
      )).subscribe(
        (data: any[]) => {
          // Manejar los datos recibidos
          console.log("result ", data)
        },
        (error) => {
          console.error('Error al obtener datos:', error);
        }
      );
    console.log("entro ", this.all)
  }

  onClick() {
    this.modalOpenLG(this.cajonModal);
  }

  modalOpenLG(modalLG: any) {
    this.modalService.open(modalLG, {
      centered: true,
      size: 'lg'
    });
  }

  cerrarModal() {
    this.modalService.dismissAll("ok")
  }

}