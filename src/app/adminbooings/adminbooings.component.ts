import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AdminBookings } from 'src/model/AdminBookings';
import { Router } from '@angular/router';
import { DanceService } from '../dance.service';

@Component({
  selector: 'app-adminbooings',
  templateUrl: './adminbooings.component.html',
  styleUrls: ['./adminbooings.component.css']
})
export class AdminbooingsComponent implements OnInit {
  adminBooking:any
  adminbook: MatTableDataSource<AdminBookings>;
  userName: string;


  constructor(private router: Router,private service:DanceService) { }
  displayedColumns: string[] = ['bookingId', 'userName', 'location', 'choreographers', 'danceforms', 'session','pricetable','status'];
   dataSource

   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("userNav")).hidden=true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=false;

    // this.adminBooking= this.service.getList();
    this.adminBooking= this.service.getListBookings();

    this.service.getAllBookings().subscribe(data=>{
        this.adminBooking=data
        this.adminbook = new MatTableDataSource(this.adminBooking);
        this.adminbook.paginator = this.paginator;
        this.adminbook.sort = this.sort;
        console.log(this.adminBooking);
    });

  }
  doFilter = (value: string) => {
    this.adminbook.filter = value.trim().toLocaleLowerCase();
  }
  getAllBookings(){
    console.log(this.userName)
    this.service.getUserBookings(this.userName).subscribe(data=>this.adminBooking=data);

    console.log(this.adminBooking)
  }
  reject(bookingId) {
    let status = 'Rejected';
    this.service.updateBookingStatus(status, bookingId).subscribe()
    alert("Booking is Rejected")
    window.location.reload();
  }

  accept(bookingId) {
    let status = 'Approved';
    this.service.updateBookingStatus(status, bookingId).subscribe()
    alert("Booking is Accepted")
    window.location.reload();
  }

}
