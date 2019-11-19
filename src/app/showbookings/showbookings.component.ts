import { Component, OnInit, ViewChild } from '@angular/core';
import { Booking } from 'src/model/Booking';
import { Router } from '@angular/router';
import { DanceService } from '../dance.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-showbookings',
  templateUrl: './showbookings.component.html',
  styleUrls: ['./showbookings.component.css']
})
export class ShowbookingsComponent implements OnInit {
  // book: Booking[];
  booking: any=[];
  book: MatTableDataSource<Booking>;
// booking:Booking[]=[];
  userName: string;

  // filterData;

  constructor(private router:Router,private Service:DanceService) {
   }
   displayedColumns: string[] = ['bookingId', 'userName', 'location', 'choreographers', 'danceforms', 'session','pricetable','status','delete'];
   dataSource

   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("userNav")).hidden=false;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=true;


    this.userName=sessionStorage.getItem("userName");
    //  this.getUserBookings();
    this.Service.getUserBookings(this.userName).subscribe(data=>{
      this.booking=data
      this.book = new MatTableDataSource(this.booking);
      this.book.paginator = this.paginator;
      this.book.sort = this.sort;
      console.log(this.booking);
  });
  }
  doFilter = (value: string) => {
    this.book.filter = value.trim().toLocaleLowerCase();
  }

  getUserBookings(){
    console.log(this.userName)
    this.Service.getUserBookings(this.userName).subscribe(data=>this.booking=data);

    console.log(this.booking)
  }
  deleteBookings(id) {
    var delet = confirm("Are you sure?")
    if (delet)
    console.log(id)
      this.Service.deleteBookings(id).subscribe();
      window.location.reload();

  }

}
