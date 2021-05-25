import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tc-table';
  oxi: string;
  dataTable: any;

  constructor(){

  

  this.oxi = 'teste';

  this.dataTable = [
  
    {
       "product": "a protheus",
      "created_at": "2021-05-07T12:57:02.351838-03:00",
      "cloud_id": "CA09NQ",
      "pipeline_id": 11334830,
      "pipeline_status": "SUCCEEDED",
      "topology_id": 105135,
      "user": "Cassiano Batista  Silveira",
      "email": "cassiano.silveira@tresmarcos.com.br",
      "updated_at": "2021-05-07T12:59:44.606230-03:00",
      "t_code": "TEZLLX",
      "label_id": "backend.actions.protheus.start_all",
      "type": "action_execute_cmd",
      "error_detail": null
    },

    {
      "product": "b protheus",
     "created_at": "2021-05-07T12:57:02.351838-03:00",
     "cloud_id": "CA09NQ",
     "pipeline_id": 11334830,
     "pipeline_status": "SUCCEEDED",
     "topology_id": 105135,
     "user": "Cassiano Batista  Silveira",
     "email": "cassiano.silveira@tresmarcos.com.br",
     "updated_at": "2021-05-07T12:59:44.606230-03:00",
     "t_code": "TEZLLX",
     "label_id": "backend.actions.protheus.start_all",
     "type": "action_execute_cmd",
     "error_detail": null
   },

   {
    "product": "c protheus kkk",
   "created_at": "2021-05-07T12:57:02.351838-03:00",
   "cloud_id": "CA09NQ",
   "pipeline_id": 11334830,
   "pipeline_status": "SUCCEEDED",
   "topology_id": 105135,
   "user": "Cassiano Batista  Silveira",
   "email": "cassiano.silveira@tresmarcos.com.br",
   "updated_at": "2021-05-07T12:59:44.606230-03:00",
   "t_code": "TEZLLX",
   "label_id": "backend.actions.protheus.start_all",
   "type": "action_execute_cmd",
   "error_detail": null
 },

 {
   "product": "d protheus",
  "created_at": "2021-05-07T12:57:02.351838-03:00",
  "cloud_id": "CA09NQ",
  "pipeline_id": 11334830,
  "pipeline_status": "SUCCEEDED",
  "topology_id": 105135,
  "user": "Cassiano Batista  Silveira",
  "email": "cassiano.silveira@tresmarcos.com.br",
  "updated_at": "2021-05-07T12:59:44.606230-03:00",
  "t_code": "TEZLLX",
  "label_id": "backend.actions.protheus.start_all",
  "type": "action_execute_cmd",
  "error_detail": null
},

{
  "product": "e protheus kkk",
 "created_at": "2021-05-07T12:57:02.351838-03:00",
 "cloud_id": "CA09NQ",
 "pipeline_id": 11334830,
 "pipeline_status": "SUCCEEDED",
 "topology_id": 105135,
 "user": "Cassiano Batista  Silveira",
 "email": "cassiano.silveira@tresmarcos.com.br",
 "updated_at": "2021-05-07T12:59:44.606230-03:00",
 "t_code": "TEZLLX",
 "label_id": "backend.actions.protheus.start_all",
 "type": "action_execute_cmd",
 "error_detail": null
},

{
 "product": "f protheus kkk",
"created_at": "2021-05-07T12:57:02.351838-03:00",
"cloud_id": "CA09NQ",
"pipeline_id": 11334830,
"pipeline_status": "SUCCEEDED",
"topology_id": 105135,
"user": "Cassiano Batista  Silveira",
"email": "cassiano.silveira@tresmarcos.com.br",
"updated_at": "2021-05-07T12:59:44.606230-03:00",
"t_code": "TEZLLX",
"label_id": "backend.actions.protheus.start_all",
"type": "action_execute_cmd",
"error_detail": null
},

{
  "product": "g protheus",
 "created_at": "2021-05-07T12:57:02.351838-03:00",
 "cloud_id": "CA09NQ",
 "pipeline_id": 11334830,
 "pipeline_status": "SUCCEEDED",
 "topology_id": 105135,
 "user": "Cassiano Batista  Silveira",
 "email": "cassiano.silveira@tresmarcos.com.br",
 "updated_at": "2021-05-07T12:59:44.606230-03:00",
 "t_code": "TEZLLX",
 "label_id": "backend.actions.protheus.start_all",
 "type": "action_execute_cmd",
 "error_detail": null
 }
    
  ]

  //toDataTable = this.dataTable;
}

}
