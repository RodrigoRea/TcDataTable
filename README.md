# TcDataTable

Módulo para exibição em tabela com campo de busca e paginação. 

<img src="https://raw.githubusercontent.com/RodrigoRea/TcDataTable/master/src/assets/images/modulo.png">

# TS

```
import {TcDataTableModule} from 'tc-data-table';

@NgModule({
  imports: [TcDataTableModule],
})
export class YourAppModule {
}

```

# HTML

```
<tc-data-table  [data]="dataTable" (todata)="dataTable = $event" [itemsForPage]="10" >
  <thead>
    <tr>
      <th>Produto</th>        
      <th>ID</th>
      <th>Data</th>
    </tr>
  </thead>
  <tbody>
    <ng-container *ngFor="let content of dataTable">
      <tr>
        <td>{{ content.product }}</td>
        <td>{{ content.id }}</td>
        <td>{{ content.created_at | date: 'dd/MM/yyyy' }}</td>
      </tr>
    </ng-container>
  </tbody>
</tc-data-table>
```

# TS

```
this.dataTable = [  
    {
      "product": "Cadeira",
      "created_at": "2021-05-07T12:57:02.351838-03:00",
      "id": "123456",
      "ref": 11334830,
    }
]
```
