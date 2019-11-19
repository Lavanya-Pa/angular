import { Component, OnInit, ViewChild } from '@angular/core';
import { ChoreographerModel } from 'src/model/ChoreographerModel';
import { Router } from '@angular/router';
import { DanceService } from '../dance.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-showchoreographer',
  templateUrl: './showchoreographer.component.html',
  styleUrls: ['./showchoreographer.component.css']
})
export class ShowchoreographerComponent implements OnInit {
  // choreo: ChoreographerModel;
  // choreo: ChoreographerModel[];
  choreoList:any
  choreo: MatTableDataSource<ChoreographerModel>;


  choreoToBeEdit: ChoreographerModel;
  // filterData;
  constructor(private router: Router,private service:DanceService) {
    this.choreoToBeEdit = new ChoreographerModel();
    // this.choreo = new ChoreographerModel();
   }
   displayedColumns: string[] = ['id', 'name', 'age', 'location', 'danceforms', 'session','pricetable', 'edit', 'delete'];
   dataSource
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("userNav")).hidden=true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=false;


    this.choreoList= this.service.getList();

    this.service.getAllChoreos().subscribe(data=>{
        this.choreoList=data
        this.choreo = new MatTableDataSource(this.choreoList);
        this.choreo.paginator = this.paginator;
        this.choreo.sort = this.sort;
        console.log(this.choreoList);
    });
  }
  doFilter = (value: string) => {
    this.choreo.filter = value.trim().toLocaleLowerCase();
  }
  deleteChoreos(id) {
    var delet = confirm("Are you sure?")
    if (delet)
      this.service.deleteChoreo(id).subscribe();

  }
  editChoreos(choreo: ChoreographerModel) {
    this.choreoToBeEdit = choreo;
    this.service.setSelectedChoreo(this.choreoToBeEdit);
    // document.getElementById("editing").hidden = false;
    this.router.navigate(['/edit'])

    console.log(this.choreoToBeEdit);
  }


}
